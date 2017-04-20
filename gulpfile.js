var gulp         = require('gulp'),
    less         = require('gulp-less'),
    customizeBootstrap = require('gulp-customize-bootstrap'),
    gcmq         = require('gulp-group-css-media-queries'),
    watch        = require('gulp-watch'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');


//gulp.task('compileBootstrap', function() {
//    return gulp.src('./node_modules/bootstrap/less/bootstrap.less')
//        .pipe(customizeBootstrap('./app/less/*.less'))
//        .pipe(less())
//        .pipe(gulp.dest('./app/css/libs.css'));
//});

gulp.task('less', function() {
    return gulp.src(['./app/less/main.less', './app/less/libs.less'])
        .pipe(less())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
            { cascade: true }))
        .pipe(gcmq())
        .pipe(gulp.dest('./app/css/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
        'app/libs/bootstrap/dist/js/bootstrap.min.js',
        'app/libs/owl-carousel/owl-carousel/owl.carousel.min.js',
        'app/libs/Swiper-master/dist/js/swiper.min.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
})

gulp.task('libs', function() {
    return gulp.src([
        'app/libs/Swiper-master/dist/css/swiper.css'
    ])
        //.pipe(rename('libs.css'))
        .pipe(gulp.dest('app/css'));
})

gulp.task('css-libs', ['less'], function(){
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoplugins: [{removeVieqBox: false}],
            une: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['clean', 'img', 'less', 'scripts'], function() {
    var buildCss = gulp.src(['app/css/main.css', 'app/css/libs.min.css', 'app/css/fonts.css', 'app/css/swiper.css'])
        .pipe(gulp.dest('dist/css'));

    var buidFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src(['app/js/**/*'])
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('clear', function() {
    return cache.clearAll();
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('./app/less/**/*.less', ['less']);
    gulp.watch('./app/*.html', browserSync.reload);
    gulp.watch('./app/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);