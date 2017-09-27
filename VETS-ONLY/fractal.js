'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Vets.gov Design System');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('default.preview', '@core');
//fractal.components.set('ext', '.nunj'); // look for files with a .nunj file extension
fractal.components.set('default.status', 'wip'); // default is 'ready'

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));
fractal.web.set('builder.dest', __dirname + '/public');

//Whether or not to use BrowserSync to watch the filesystem and reload the web UI when changes occur.
fractal.web.set('server.sync', true);

/*
 * Meta.
 */
fractal.set('project.version', 'v1.0');

const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: "navy",
    
      "styles": [
        "default",
        "/style_vets.css"
      ]
    
    // any other theme configuration values here
    
});



fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default
