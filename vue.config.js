const path = require('path');

module.exports = {
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === "production" ? "/Deployment" : "/",
  publicPath: '/VueDeployment',
  chainWebpack: config => {
    // Modify the rule for images to maintain the original file name without hash
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        if (!options) options = {};
        options.esModule = false; // This maintains the original file name
        return options;
      });

    // Add a rule for PDF files using file-loader to maintain original file names
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/pdf/[name].[ext]' // Maintain the original file name for PDFs
      });
  },
  filenameHashing: false // Disable filename hashing for all files
};