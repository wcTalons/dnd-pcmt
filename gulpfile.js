var amd = require('amd-optimize');
var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var plumber = require('gulp-plumber');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var runSequence = require('run-sequence');
var templateCache = require('gulp-angular-templatecache');
var ugligy = require('gulp-uglify');
var util = require('gulp-util');
var merge = require('merge-stream');
var paths = {
	base: 'src/',
	dest: 'build'
};

paths.manifest = paths.dest + '/rev-manifest.json';
paths.index = paths.base + 'index.html';
paths.imgs = paths.base + 'imgs/';
paths.require = paths.base + 'libs/';
paths.modules = paths.base + 'modules/';
paths.styles = paths.base + 'styles/';
paths.utils = paths.base + 'utils/'
paths.chrome = {
	manifest: paths.base + 'manifest.json',
	background: paths.base + 'chrome-background.js'
};
paths.files = {
	build: {
		css: 'styles.min.css',
		html: 'templates.min.js',
		scripts: 'app.min.js'
	},
	css: [
		paths.styles + 'fonts.css',
		paths.styles + 'dom.css',
		paths.styles + 'boxes.css',
		paths.styles + 'layout.css',
		paths.styles + 'text.css',
		paths.styles + 'colours.css',
		paths.styles + 'imgs.css',
		paths.styles + 'components.css'
	],
	html: [paths.modules + '**/*.html'],
	scripts: [
		paths.base + 'index.js',
		paths.base + 'app.js',
		paths.modules + '**/*.js',
		paths.utils + '**/*.js'
	],
	libs: paths.base + 'libs/*.js',
	assets: paths.base + 'assets/**/*.{png,gif,jpg,ttf}'
};
paths.angular = {
	ng: paths.base + 'libs/angular.min.js',
	ngRoute: paths.base + 'libs/angular-route.min.js',
};
paths.require = {
	base: paths.base + 'libs/require.min.js',
	config: {
		baseUrl: 'src',
		paths: {
			appTemplates: paths.files.build.html.replace('.js', ''),
			loaderUtls: 'utls/loader',
			moduleLocators: 'modules/index'
		},
		shim: {
			appTemplates: ['app']
		}
	}
};

function logError(err) {
	console.log(err);
}

gulp.task('removeBuild', function () {
	return del([
			paths.dest + '/'
		]);
});

gulp.task('removeHtmlTemp', function () {
	return del([
			paths.base + paths.files.build.html
		]);
});

gulp.task('bundleCss', function () {
	return gulp.src(paths.files.css)
		.pipe(plumber({ error: logError }))
		.pipe(concat(paths.files.build.css))
		.pipe(rev())
		.pipe(gulp.dest(paths.dest))
		.pipe(rev.manifest())
		.pipe(gulp.dest(paths.dest))
});

gulp.task('makeHtml', function () {
	return gulp.src(paths.files.html)
		.pipe(plumber({ error: logError }))
		.pipe(templateCache(paths.files.build.html, { module: 'pcmt-app' }))
		.pipe(gulp.dest(paths.base));
});

gulp.task('bundleScripts', function () {
	return gulp.src(paths.files.scripts)
		.pipe(plumber({ error: logError }))
		.pipe(amd('index', paths.require.config))
		.pipe(concat(paths.files.build.scripts))
		//.pipe(ugligy())
		.pipe(rev())
		.pipe(gulp.dest(paths.dest))
		.pipe(rev.manifest(paths.manifest, { base: paths.dest, merge: true }))
		.pipe(gulp.dest(paths.dest));
});

gulp.task('bundleLibs', function () {
	return gulp.src(paths.files.libs)
		.pipe(plumber({ error: logError }))
		.pipe(gulp.dest(paths.dest));
});

gulp.task('copyAssets', function () {
	return gulp.src(paths.files.assets)
		.pipe(plumber({ error: logError }))
		.pipe(gulp.dest(paths.dest));
});

gulp.task('makeApp', function () {
	var manifest = gulp.src(paths.manifest);
	var cpCore = gulp.src([
			paths.chrome.background
		])
		.pipe(plumber({ error: logError }))
		.pipe(gulp.dest(paths.dest));
	var revApp = gulp.src([
			paths.index,
			paths.chrome.manifest
		])
		.pipe(plumber({ error: logError }))
		.pipe(revReplace({ replaceInExtensions: ['.json', '.js', '.html'], manifest: manifest }))
		.pipe(gulp.dest(paths.dest));

	return merge(revApp, cpCore);
});

gulp.task('build', function (done) {
	runSequence(
		'removeBuild',
		['bundleCss', 'makeHtml', 'bundleLibs', 'copyAssets'],
		'bundleScripts',
		'makeApp',
		'removeHtmlTemp',
		done
	);
});