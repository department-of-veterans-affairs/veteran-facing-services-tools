import 'axe-core';
import './lib/testing/enzyme-setup.js';

var testsContext = require.context('./src', true, /\.spec\.js[x]{0,1}$/);
testsContext.keys().forEach(testsContext);
