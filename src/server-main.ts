﻿/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
// we want font-awesome to load as soon as possible to show the fa-spinner
import '../static/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import bootstrapper from 'aurelia-ssr-bootstrapper-webpack';

async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration();

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}

module.exports = bootstrapper(configure);