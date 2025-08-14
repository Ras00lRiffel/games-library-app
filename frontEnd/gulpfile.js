// gulpfile.js
import gulpDartSass from 'gulp-dart-sass';
import { src, dest, watch } from 'gulp';
import rename from 'gulp-rename';

function buildStyles() {
  return src('src/**/*.scss', { base: './' })
    .pipe(gulpDartSass().on('error', gulpDartSass.logError))
    .pipe(rename({ extname: '.css' }))
    .pipe(dest('./'));
}

export default function() {
  watch('src/**/*.scss', buildStyles);
}
