module.exports = {
  publicPath: (() => {
    if(process.env.NODE_ENV === "production") {
      return 'https://gitcdn.link/cdn/PabloFacciano/sfmc-new-ui/main/app/dist/';
    } else {
      return './';
    }    
  })(),
  configureWebpack: config => {
    /*
    if(process.env.NODE_ENV === "production") {
      config.output.filename = './[name].js'
      config.output.chunkFilename = './[name].js';
    } else {
      config.output.filename = './[name].[hash].min.js';
      config.output.chunkFilename = './[name].[hash].min.js';
    }
    config.optimization.splitChunks = false;
    */
    config.output.filename = './[name].[hash].min.js';
    config.output.chunkFilename = './[name].[hash].min.js';
  },
  css: {
    //extract: true
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