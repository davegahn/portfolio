module.exports = function() {
  const webpack = require('webpack');
  const gulpWebpack = require('webpack-stream');
  
  $.gulp.task('webpack', function() {
    return $.gulp.src('source/js/app.js')
      .pipe(gulpWebpack(require('../../webpack.config.js'), webpack))
      .pipe($.gulp.dest('./build'));
  });
};


