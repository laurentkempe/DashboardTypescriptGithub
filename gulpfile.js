var gulp   = require('gulp');
var bower = require('gulp-bower');
var tsc    = require('gulp-tsc');
var shell  = require('gulp-shell');
var runseq = require('run-sequence');

var paths = {
    tscripts : { 
        src : [
            'src/**/*.ts' 
        ],
        dest : './wwwroot/scripts' 
    }
};

gulp.task('default', ['bower', 'build']);

// Bower

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('wwwroot/lib/'));
});

// Compile

gulp.task('build', ['compile:typescript']);
gulp.task('compile:typescript', function () {
    return gulp
        .src(paths.tscripts.src)
        .pipe(tsc({
            module: "CommonJS",
            sourcemap: true,
            emitError: false,
            tscPath: "C:/Program Files (x86)/Microsoft SDKs/TypeScript/1.5/tsc.exe"
        }))
        .pipe(gulp.dest(paths.tscripts.dest));
});