'use strict';

const Path      = require('path');
const languages = require('./languages');

module.exports = function fang(filePath) {

    const fileExt = Path.parse(filePath).ext.toLowerCase();
    for (let ext in languages) {
        if (languages.hasOwnProperty(ext) && ext === fileExt) {
            return languages[ext];
        }
    }

    return;
};
