const gulp = require("gulp");
const browserSync = require("browser-sync");
const postcss = require("gulp-postcss");
const cssnext = require("postcss-cssnext");
const autoprefixer = require("autoprefixer");
const minifycss = require("gulp-csso");

gulp.task("css", function() {
  return gulp
    .src("src/styles/*.css")
    .pipe(postcss([cssnext(), autoprefixer({ browsers: ["last 5 version"] })]))
    .pipe(minifycss())
    .pipe(gulp.dest("build/styles"));
});

gulp.task("img", function() {
  return gulp
    .src("src/images/**/*.*")
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("build/img"));
});

gulp.task("default", ["css", "img"], function() {
  gulp.watch("src/styles/*.css", ["css"]);
});
