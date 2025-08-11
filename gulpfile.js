import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

// Compile SCSS and place CSS next to it
export function styles() {
  return gulp.src('**/*.scss', { sourcemaps: true }) // search all folders
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(file => file.base, { sourcemaps: '.' })); // output in same folder
}

// Watch for changes and recompile
export function watchFiles() {
  gulp.watch('**/*.scss', styles);
}

// Default task
export default gulp.series(styles, watchFiles);
