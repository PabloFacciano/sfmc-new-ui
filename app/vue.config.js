module.exports = {
  configureWebpack: config => {
    if(process.env.NODE_ENV === "production") {
      config.output.filename = './[name].js'
      config.output.chunkFilename = './[name].js';
    } else {
      config.output.filename = './[name].[hash].min.js';
      config.output.chunkFilename = './[name].[hash].min.js';
    }
    config.optimization.splitChunks = false;
  },
  css: {
    extract: false
  },
  /*
  devServer: {
    //open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080, // CHANGE YOUR PORT HERE!
    https: true,
    //hotOnly: false,
  },
  */
}