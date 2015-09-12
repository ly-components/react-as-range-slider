var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var child_process = require('child_process');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
  if (process.argv[2] !== '--server') return;
  url = "http://localhost:3000";
  if(process.platform == 'wind32'){
    cmd  = 'start "%ProgramFiles%\Internet Explorer\iexplore.exe"';
  }else if(process.platform == 'linux'){
    cmd  = 'xdg-open';
  }else if(process.platform == 'darwin'){
    cmd  = 'open';
  }
  child_process.exec(cmd + ' "'+url + '"');
});