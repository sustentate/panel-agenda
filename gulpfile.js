const { src, dest, watch, series, task, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass        = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');



var cors = function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'headers_you_want_to_accept');
  next();
};
var server = {
    baseDir: "./web",
    middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
  };
/* var reload = browserSync.reload; */
// Compilacion de los Archivos SCSS
function browser_sync(done){
    browserSync.init({
        server:  server
    });
    done();
};
function sas(done) {
    return src("./scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(dest("web/css"))
        
    done();
};

// Compilacion de los Archivos Pug

function html(done){
  return src('pug/*.pug')
    .pipe(pug({
    	pretty: true
    }))
    .pipe(dest('./web'))
    .pipe(browserSync.stream());
    done();
};


// Font Awesome

function fonts(done) {
    return src(['./node_modules/@fortawesome/fontawesome-free/webfonts/*.*'])
            .pipe(dest('web/fonts/'));
        done();
        };


//Librerias SCSS
function libreriesscss(donde) {
    return src([
    		'./node_modules/@fortawesome/fontawesome-free/scss/brands.scss',
    		'./node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss',
    		'./node_modules/@fortawesome/fontawesome-free/scss/regular.scss',
    		'./node_modules/@fortawesome/fontawesome-free/scss/solid.scss',
    		'./node_modules/@fortawesome/fontawesome-free/scss/v4-shims.scss'
    	])
        .pipe(sass())
        .pipe(dest("web/css"))
        
        done();
    };

// Librerias Javascript

function libreriesjs(done){
  return src([
  	'./node_modules/jquery/dist/jquery.min.js',
  	'./node_modules/popper.js/dist/popper.js',
  	'./node_modules/@fortawesome/fontawesome-free/js/all.min.js'
  	])
    .pipe(dest('web/js'))
    
    done();
};
function reload(done){
    browserSync.reload();
    done();
};
function browser_sync(){
        browserSync.init({
            server: "./web"
        });
 
    };
function watch_files(){
    watch("./scss/*.scss", series(sas,reload));
    watch("./pug/*.pug", series(html,reload));
};
task("sas", sas);
task("libreriesjs", libreriesjs);
task("html", html);
/* gulp.task('serve', ['sass','librerias-scss', 'librerias-js', 'fonts' ], function() {

    browserSync.init({
        server: "./web"
    });

    gulp.watch("./scss/*.scss", gulp.parallel(['sass']));

    gulp.watch("./pug/*.pug", gulp.parallel(['html']));

    gulp.watch("web/*.html).on('change', browserSync.reload);
}); */

task('default', parallel(sas,libreriesjs,html));
task('watch', parallel(browser_sync, watch_files));
