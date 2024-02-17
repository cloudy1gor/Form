"use strict";

const { src, dest, parallel, series, watch } = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const rename = require("gulp-rename");
const fileinclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const webpack = require("webpack-stream");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const cleancss = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const gcmq = require("gulp-group-css-media-queries");
const size = require("gulp-size");

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html",
        },
        open: false,
        notify: true,
        online: true,
        logPrefix: "🔥",
        logLevel: "info",
    });
}

function html() {
    return src("src/*.html")
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(
            fileinclude({
                prefix: "@@",
                basepath: "src/",
            })
        )
        // .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(
            size({
                gzip: true,
                pretty: true,
                showFiles: true,
                showTotal: true,
            })
        )
        .pipe(dest("dist/"))
        .pipe(browserSync.reload({ stream: true }));
}

function scripts() {
    return src("src/js/main.js")
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(
            webpack({
                mode: "production",
                output: {
                    filename: "main.min.js",
                },
                module: {
                    rules: [
                        {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                                loader: "babel-loader",
                                options: {
                                    presets: [
                                        [
                                            "@babel/preset-env",
                                            {
                                                corejs: 3,
                                                useBuiltIns: "usage",
                                            },
                                        ],
                                    ],
                                },
                            },
                        },
                    ],
                },
            })
        )
        .pipe(dest("dist/js/"))
        .pipe(
            size({
                gzip: true,
                pretty: true,
                showFiles: true,
                showTotal: true,
            })
        )
        .pipe(browserSync.reload({ stream: true }));
}

function styles() {
    return src("src/scss/style.scss")
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 8 versions"],
                cascade: true,
                browsers: ["Android >= 6", "Chrome >= 20", "Firefox >= 24", "Explorer >= 11", "iOS >= 6", "Opera >= 12", "Safari >= 6"],
            })
        )
        .pipe(gcmq())
        .pipe(rename("style.css"))
        .pipe(dest("dist/css/"))
        .pipe(
            size({
                gzip: true,
                pretty: true,
                showFiles: true,
                showTotal: true,
            })
        )
        .pipe(
            cleancss({
                level: {
                    2: {
                        specialComments: 0,
                        // format: "beautify",
                    },
                },
            })
        )
        .pipe(rename("style.min.css"))
        .pipe(sourcemaps.write("."))
        .pipe(dest("dist/css/"))
        .pipe(
            size({
                gzip: true,
                pretty: true,
                showFiles: true,
                showTotal: true,
            })
        )
        .pipe(browserSync.reload({ stream: true }));
}

function images() {
    return src("src/images/*.*")
        .pipe(dest("dist/images/"));
}

function fonts() {
    return src("src/fonts/*.*")
        .pipe(dest("dist/fonts/"));
}

function startwatch() {
    watch("src/*.html", html);
    watch("src/scss/**/*.scss", styles);
    watch("src/js/**/*.js", scripts);
    watch("src/images/**/*.*", images);
    watch("src/fonts/**/*.*", fonts);
}

exports.browsersync = browsersync;
exports.html = html;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.fonts = fonts;

exports.default = series(parallel(html, scripts, styles, images, fonts, browsersync, startwatch));