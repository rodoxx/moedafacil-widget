var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var streamify = require('gulp-streamify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');

function onError(err) {
  console.log('error: ',err);
}

function getBuildFunction(type) {
  type = type=='simulador' ? 'simulador' : 'cotacao';
  var path = {
    OUT: 'moedafacil-widget-'+type+'.min.js',
    DEST: 'dist',
    //ENTRY_POINT: './src/'+type+'/main.jsx'
    ENTRY_POINT: './src/index.js'
  };
  return function(){
    browserify({
      entries: [path.ENTRY_POINT],
      transform: [reactify]
    })
      .bundle()
      .pipe(source(path.OUT))
      .pipe(streamify(uglify(path.OUT)))
      .pipe(gulp.dest(path.DEST))
      .on('error', onError);
  }
}

var serve = require('gulp-serve');

gulp.task('serve', serve(['dist', 'watch']));
gulp.task('serve-build', serve(['dist', 'build']));
gulp.task('serve-prod', serve({
  root: ['dist', 'build'],
  port: 80,
  middleware: function(req, res) {
    // custom optional middleware
  }
}));

gulp.task('build-simulador', getBuildFunction('simulador'));

gulp.task('build-cotacao', getBuildFunction('cotacao'));

gulp.task('watch', function(){
 gulp.watch('src/simulador/**/*.*',['build-simulador']);
 gulp.watch('src/cotacao/**/*.*',['build-cotacao']);
});

gulp.task('default',['build-simulador','build-cotacao']);
