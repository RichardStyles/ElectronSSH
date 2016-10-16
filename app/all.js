let childProcess = require('child_process');
let pathToElectron = require('electron-prebuilt');

shouldRebuildNativeModules(pathToElectron)
  .then((shouldBuild) => {
    if (!shouldBuild) return true;

    let electronVersion = childProcess.execSync(`${pathToElectron} --version`, {
      encoding: 'utf8',
    });
    electronVersion = electronVersion.match(/v(\d+\.\d+\.\d+)/)[1];

    return installNodeHeaders(electronVersion)
      .then(() => rebuildNativeModules(electronVersion, './node_modules'));
  })
  .catch((e) => {
    console.error("Building modules didn't work!");
    console.error(e);
  });
window.$ = window.jQuery = require('jquery');

var ping = require('ping'),
	keytar = require('keytar'),
	SSH = require('simple-ssh');

require('bootstrap-sass/assets/javascripts/bootstrap');