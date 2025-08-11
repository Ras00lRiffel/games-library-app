import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

// Compile SCSS and place CSS in the same folder (no source maps)
export function styles() {
  return gulp.src(['**/*.scss', '!**/_*.scss']) // exclude partials starting with "_"
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(file => file.base)); // same folder as SCSS
}

// Watch for changes and recompile
export function watchFiles() {
  gulp.watch(['**/*.scss', '!**/_*.scss'], styles);
}

// Default task
export default gulp.series(styles, watchFiles);
