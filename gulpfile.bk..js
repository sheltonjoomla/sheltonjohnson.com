// //////////////////
// Required
// //////////////////

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    compass = require('gulp-compass'),
    rename = require('gulp-rename');

// //////////////////
//   Script Task
// //////////////////


gulp.task('scripts', function () {
    gulp.src(['app/js/**/*.js', 'npm !app/js/**/*.min.js'])
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('app/js/'));
});


// //////////////////
// Compass/SASS Task
// //////////////////

// this is broke
gulp.task('compass', function () {
    gulp.src('app/scss/style.scss')
        .pipe(compass({
            config_file: './config.rb',
            css:'app/css',
            sass:'app/scss',
            require: ['susy']
        }))
        .pipe(gulp.dest('app/css/'));

})


// //////////////////
// Watch Task
// //////////////////
gulp.task('watch', function () {
    gulp.watch('app/js/**/*.js', ['scripts']);
    gulp.watch('app/scss/**/*.scss', ['compass']);
})


// //////////////////
// Default Task
// //////////////////

gulp.task('default', ['scripts','compass', 'watch']);


// //////
/// Notes
// css/*.css
// css/**/*.css
// !css/style.css excludes style.css file
// *.+(js|css) matches all files in the root dir ending in .js or .css
// more info on Glob
// https://github.com/isaacs/node-glob/projects
// https://github.com/isaacs/minimatch
// https://www.smashingmagazine.com/2014/06/building-with-gulp/
// npm install gulp-plumber gulp-uglify gulp-compass browser-sync gulp-autoprefixer del gulp-rename  --save-dev
// //////////////////////////////////

