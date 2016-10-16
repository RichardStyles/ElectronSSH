# Local SSH

Small project to see if an Electron app can be made to connect to a remote terminal via ssh and display infomation to a local client.

### Setup node packages
Compile packages for use with Electron.

#### NPM configs that need to be set
* export npm_config_target=1.4.3
* export npm_config_arch=x64
* export npm_config_disturl=https://atom.io/download/atom-shell
* export npm_config_runtime=electron
* export npm_config_build_from_source=true

HOME=~/.electron-gyp npm install