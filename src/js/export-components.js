const fs = require('fs');
const babel = require("babel-core");

const reactComponentFiles = [
  'src/components/modal/Modal.jsx',
  'src/components/search_menu/SearchMenu.jsx',
  'src/components/segmented_progress_bar/SegmentedProgressBar.jsx'
];

reactComponentFiles.forEach((fileName) => {
  babel.transformFile(fileName, (err, result) => {
    const componentName = fileName.slice(fileName.lastIndexOf('/') + 1, fileName.indexOf('.'));
    const newFileName = `dist/js/components/${componentName}.js`;

    fs.writeFile(newFileName, result.code);
  });
});
