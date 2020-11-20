const exec = require('child_process').exec;

function execute(command, callback) {
  exec(command, (error, stdout, stderr) => {
    console.log('ERROR', error);
    console.log('STDERR', stderr);
    callback(stdout);
  });
}

execute(`git diff --name-only HEAD ${process.env.LAST_COMMIT}`, output => {
  const changedFiles = output.split('\n');
  console.log(changedFiles);

  const libraryChanged =
    changedFiles.filter(filename => filename.includes('formation-react'))
      .length > 0;

  console.log(
    libraryChanged
      ? 'Need to publish storybook'
      : 'No updates made to component library',
  );

  execute('aws s3 ls', s3Output => {
    console.log(s3Output);
  });
});
