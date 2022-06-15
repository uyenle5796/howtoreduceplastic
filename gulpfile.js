'use scrict';

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

//////////////
// SCSS / CSS
/////////////

var SCSS_SOURCE = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

//Compile SCSS automatically using Gulp
gulp.task('compile_scss', function() {
  gulp.src(SCSS_SOURCE)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST))
});

//Detect changes in SCSS
gulp.task('watch_scss', function() {
  gulp.watch(SCSS_SOURCE, ['compile_scss']);
});

//Run tasks
gulp.task('default', ['watch_scss']);
