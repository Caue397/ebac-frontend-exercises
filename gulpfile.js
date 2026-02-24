const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function styles() {
  return gulp
    .src('./src/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./build'));
}

function scripts() {
  return gulp
    .src('./src/scripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

function images() {
  return gulp
    .src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function watch() {
  gulp.watch('./src/main.scss', styles);
  gulp.watch('./src/scripts/**/*.js', scripts);
  gulp.watch('./src/images/**/*', images);
}

exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.default = gulp.series(
  gulp.parallel(styles, scripts, images),
  watch
);
