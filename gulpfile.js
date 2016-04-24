'use strict';

var gulp = require('gulp'),
    minifycss = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    //imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    //rename = require('gulp-rename'),
    //concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    //cache = require('gulp-cache'),
    rev = require('gulp-rev'),
    ngannotate = require('gulp-ng-annotate'),
    browserSync = require('browser-sync'),
    del = require('del');


gulp.task('jshint', function() {
  return gulp.src('app/scripts/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

// Clean
gulp.task('clean', function() {
    return del(['public'], {force: true});
});

gulp.task('sass', function () {
  return gulp.src('app/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/styles'));
});

gulp.task('files', function () {
  return gulp.src(['app/404.html', 'app/.htaccess', 'app/robots.txt', 'app/favicon.ico'])
    .pipe(gulp.dest('public/'));
});
gulp.task('data', function () {
  return gulp.src('app/data/campers.json')
    .pipe(gulp.dest('public/data/'));
});


gulp.task('usemin',['jshint','sass'], function () {
  return gulp.src('app/**/*.html')
      .pipe(usemin({
        css:[minifycss(),rev()],
        js: [ngannotate(),uglify(),rev()]
      }))
      .pipe(gulp.dest('public/'));
});

// Images
gulp.task('imagemin', function() {
  return del(['public/images']), {force: true}, gulp.src('app/images/*')
    //.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('public/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

// gulp.task('copyfonts', ['clean'], function() {
//    gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
//    .pipe(gulp.dest('../public/fonts'));
//    gulp.src('./bower_components/bootstrap/dist/fonts/**/*.{ttf,woff,eof,svg}*')
//    .pipe(gulp.dest('../public/fonts'));
// });


// Watch
gulp.task('watch', ['browser-sync'], function() {
  // Watch .js files
  gulp.watch('{app/scripts/**/*.js,app/styles/**/*.css,app/**/*.html}', ['usemin']);
      // Watch image files
  gulp.watch('app/images/**/*', ['imagemin']);
  //gulp.watch('app/index.html', ['copyfonts']);
});

gulp.task('browser-sync', ['default'], function () {
   var files = [
      'app/**/*.html',
      'app/styles/**/*.css',
      'app/images/**/*.png',
      'app/scripts/**/*.js',
      'public/**/*'
   ];

   browserSync.init(files, {
      server: {
         baseDir: 'public',
         index: 'index.html'
      }
   });
        // Watch any files in dist/, reload on change
  gulp.watch(['public/**']).on('change', browserSync.reload);
    });

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('usemin', 'imagemin', 'files', 'data');
});
