#! /usr/bin/env node

'use strict';

const _       = require('lodash');
const fs      = require('fs');
const langMap = require('./languages');

const extToLang = {};

_.each(langMap, (lang, name) => {
    _.each(lang.extensions, ext => {
        extToLang[ext] = {
            name: name,
            mode: lang.ace_mode,
            scope: (lang.tm_scope && lang.tm_scope != 'none') ? lang.tm_scope : null,
            color: lang.color || null,
        };
    });
});

fs.writeFileSync('languages.json', JSON.stringify(extToLang, null, 2), 'UTF-8');
