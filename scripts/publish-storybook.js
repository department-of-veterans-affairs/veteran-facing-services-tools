const exec = require('child_process').exec;

function execute(command, callback) {
  exec(command, (error, stdout, stderr) => {
    callback(stdout);
  });
}

execute(`git diff --name-only HEAD ${process.env.LAST_COMMIT}`, output => {
  console.log(output);
});

console.log('Testing');
console.log(process.env.CIRCLE_COMPARE_URL);
