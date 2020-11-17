const exec = require('child_process').exec;

function execute(command, callback) {
  exec(command, (error, stdout, stderr) => {
    callback(stdout);
  });
}

execute(`git diff --name-only HEAD ${process.env.LAST_COMMIT}`, output => {
  console.log(output);

  const changedFiles = output.split('\n');

  console.log(changedFiles);

  const libraryChanged =
    changedFiles.filter(filename => filename.includes('formation-react'))
      .length > 0;

  console.log(libraryChanged);
});

console.log('Testing');
console.log(process.env.CIRCLE_COMPARE_URL);
