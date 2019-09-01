const gulp = require('gulp');
const concat = require('gulp-concat');
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');

const uglify = composer(uglifyes, console);
const concatCss = require('gulp-concat-css');
const uglifycss = require('gulp-uglifycss');

gulp.task('js', function() {
  return gulp.src([
    'js/data/*.js',
    'js/src/*.js',
    'js/templates/*super.js',
    'js/templates/*.js',
    'js/event/*.js',
    'js/event/main.js'])
    .pipe(concat('index.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('css', function() {
  return gulp.src('css/**/*.css')
    .pipe(concatCss('master.min.css'))
    .pipe(uglifycss({
      uglyComments: true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', gulp.parallel('js', 'css'));
