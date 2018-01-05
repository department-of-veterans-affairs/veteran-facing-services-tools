const pkg = require('./package.json');
const fractal = require('@frctl/fractal').create();
const generatePropDocs = require('./lib/helpers/generatePropDocs');
const createWebpackBundle = require('./createWebpackBundle');

const context = {
  'package': {
    name: pkg.name,
    version: pkg.version,
  },
  uswds: {
    path: '../../dist',
  },
};

fractal.set('project.title', 'Vets.gov Design Standards');

const { components, docs, web } = fractal;

components.set('ext', '.njk');
components.set('path', 'src/components');
components.set('default.preview', '@uswds');
components.set('default.context', context);

const vetsAdapter = require('./lib/vets-adapter')({
  filters: {
    jsonify: d => JSON.stringify(d, null, '  '),
  },
  paths: [
    'src/components',
  ]
});

fractal.components.engine(vetsAdapter);

docs.set('path', 'docs');

const theme = require('@frctl/mandelbrot')({
  lang: 'en-US',
  skin: 'white',
  // display context data in YAML
  format: 'yaml',
  // which panels to show
  panels: [
    'html',
    'notes',
    'view',
    'context',
    'resources',
    'info',
    'props'
  ],
});

theme.addLoadPath(`${__dirname}/theme-overrides`);

theme.on('init', (env) => {
  env.engine.addFilter('generateProps', generatePropDocs);
});

fractal.cli.command('watch', () => {
  const logger = fractal.cli.console;
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));

  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
    createWebpackBundle(logger, fractal.components);
  });
});

fractal.cli.command('build-site', (args, done) => {
  const logger = fractal.cli.console;
  const builder = fractal.web.builder();

  builder.on('progress', (completed, total) =>
    logger.update(`Exported ${completed} of ${total} items`, 'info'));

  builder.on('error', err =>
    logger.error(err.message));

  return builder.build().then(() => {
    logger.success('Fractal build completed!');
    logger.update('Building React components');
    createWebpackBundle(logger, fractal.components, false);
    done();
  });
});

web.theme(theme);

web.set('static.path', 'dist');
web.set('static.mount', 'dist');
// output files to /build
web.set('builder.dest', 'build');

module.exports = fractal;
