const fs = require('fs');
const path = require('path');

exports.onPreBootstrap = async () => {
  const staticDir = path.join(__dirname, '../../static/mermaid-svgs');
  const publicDir = path.join(__dirname, '../../public/mermaid-svgs');

  await fs.readdir(staticDir, async (err, files) => {
    if (err) throw err;

    for (const file of files) {
      await fs.unlink(path.join(staticDir, file), err => {
        if (err) throw err;
      });
    }
  });

  await fs.readdir(publicDir, async (err, files) => {
    if (err) throw err;

    for (const file of files) {
      await fs.unlink(path.join(publicDir, file), err => {
        if (err) throw err;
      });
    }
  });
}
