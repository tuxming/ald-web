var gulp = require('gulp');
var load = require('gulp-load-plugins')();
var openURL = require('open');
var runSequence = require('run-sequence');
var vfs = require('vinyl-fs');
var fs = require('fs');
var cheerio = require('cheerio');
var through2 = require('through2');
var path = require('path');
//var useref  = require('gulp-useref');
var less = require('gulp-less');
//var inject = require('gulp-inject-xm');
var inject = require('./mymodules/inject.js');
//var jshint = require('gulp-jshint');
var extend = require('util')._extend;
//var tplProcessor = require("gulp-template-xm");
var tplProcessor = require("./mymodules/template.js");
var htmlref = require("./mymodules/htmlref.js");
var getpath = require("./mymodules/getpath.js");

var process = require("process");
var crypto = require("crypto");
var minifycss = require('gulp-minify-css');

var args = require('minimist'); //传参数

var debug = false;

var knownArgs = {
  string: 'webroot',
  default: { arg: process.env.NODE_ENV || '' }
};
var params = args(process.argv.slice(2), knownArgs);


var config = {
	app: require('./bower.json').appPath || 'app',
	dist: 'dist',
	base: '',  // ("", "/", "/ald-web")
	model: 'relative',  //relative, absolute,
	cwd: process.cwd()
};

var url_mappings = [
  {"/views/": "/"},
  {"/views/home": "/"}
];

var paths = {
  scripts: [config.app + '/scripts/**/*.js', '!'+config.app + '/scripts/public/**/*.js'],
  scriptsPublic:[config.app + '/scripts/public/**/*.js'],
  styles: [config.app + '/styles/**/*.less'],
  stylesPublic: [config.app+'/styles/main.css', config.app+'/styles/style.css'],
  copys: [
    config.app +'/**/*.*',
    '!'+config.app+'/scripts/**/*.*',
    '!'+config.app+'/styles/**/*.?(css|less)',
    //'!'+config.app+'/styles/**/*.less',
    '!'+config.app+'/**/*.html'

  ],
  bowerjs: [
    './bower_components/jquery/dist/jquery.js',
	  './bower_components/bootstrap/dist/js/bootstrap.js',
	  './bower_components/angular/angular.js',
    './bower_components/angular-animate/angular-animate.js',
    './bower_components/angular-aria/angular-aria.js',
	  './bower_components/angular-cookies/angular-cookies.js',
    './bower_components/angular-messages/angular-messages.js',
    './bower_components/angular-resource/angular-resource.js',
	  './bower_components/angular-touch/angular-touch.js',
	  './bower_components/angular-route/angular-route.js',
    './bower_components/angular-sanitize/angular-sanitize.js'
  ],
  bowercss: [
   // './bower_components/bootstrap/dist/css/bootstrap.css',
   // './bower_components/bootstrap/dist/css/bootstrap-theme.css'
  ],
  bowerstatic: [
    './bower_components/bootstrap/dist/fonts/*.*'
  ],
  watched:[
	config.app + '/**/*.*', '!'+config.app + '/**/*.less',  '!'+config.app + '/**/*.html'
  ],
  karma: 'karma.conf.js',
  htmls:  [
		config.app + '/**/*.html', '!'+config.app+'template/**/*.html'
	]
};

/**
 * ************************
 * *******公共模块*********
 * ************************
 **/
//js语法检测
gulp.task('lint:scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(load.jshint('.jshintrc'))
		.pipe(load.jshint.reporter('jshint-stylish'));
});

//编译less
gulp.task('less', function(){
	return gulp.src(paths.styles)
		.pipe(less(
			{
				paths: [ path.join(__dirname, 'less', 'includes') ]  //这个参数，编译到less的当前目录
			}
		))
    .pipe(gulp.dest(config.app+'/styles/'));
});

//将bower的库文件对应到指定位置
gulp.task('bower:ref', function(){
	//console.log(paths.bowerjs);
	gulp.src(paths.bowerjs)
		.pipe(gulp.dest(config.app+'/scripts/public/'));

	gulp.src(paths.bowercss)
		.pipe(gulp.dest(config.app+'/styles/public/'));
	gulp.src(paths.bowerstatic)
		.pipe(gulp.dest(config.app+'/static/'));
});

//删除.tmp目录
gulp.task('clean:tmp', function (cb) {
	//rimraf('./.tmp', cb);
	return gulp.src('./.tmp', {read: false})
		.pipe(load.clean());
});

//删除.tmp目录和dist目录
gulp.task('clean:all', function () {
	//rimraf('./.tmp', cb);
	//rimraf(config.dist, cb);
	return gulp.src([config.dist, './.tmp'], {read: false})
		.pipe(load.clean());
});

//复制文件
gulp.task('copy', function () {

  gulp.src(paths.copys)
    .pipe(gulp.dest(config.dist));

	gulp.src(config.app+"/scripts/public/*.js")
		.pipe(gulp.dest(config.dist+"/scripts/public/"));
});

//复制文件
gulp.task('copy:all', function () {
	return gulp.src([config.app+"/**/*.*", "!"+config.app+"/**/*.html"])
		.pipe(gulp.dest(".tmp/"));
});

/**
 * 注入webroot到appjs
 * */
gulp.task("injectWebPath", function(){
  gulp.src(config.app+"/scripts/app.js")
    .pipe(function(){
      return through2.obj(function (file, enc, done) {
        // 如果文件为空，不做任何操作，转入下一个操作，即下一个 .pipe()
        if (file.isNull()) {
          this.push(file);
          return done();
        }
        // 插件不支持对 Stream 对直接操作，跑出异常
        if (file.isStream()) {
          this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
          return cb();
        }

        var content =file.contents.toString();

        var reg = /var\s+webroot\s*=\s*\'[\:\/\w\-]*\'\;/;
        var webroot = "var webroot = '"+config.base+"';";
        content = content.replace(reg, webroot);

        file.contents = new Buffer(content);
        this.push(file);
        done();
      });
    }())
    .pipe(gulp.dest(config.app+"/scripts/"));
});

//打开浏览器
gulp.task('start:client', ['start:server', 'less'], function () {
  openURL('http://localhost:9000');
});

//启动服务器
gulp.task('start:server', function() {
  load.connect.server({
    //root: config.app,
    root: ".tmp",
    livereload: true,
    // Change this to '0.0.0.0' to access the server from outside.
    port: 9000
  });
});

//处理html的回调函数
var htmlCallback = function (info, isDebug, filepath){
	if(info.type == "tpl"){
		var source = fs.readFileSync(config.app+"/"+info.ref);
		if(source)
			return source.toString();
		else
			return "";
	}else if(info.type=='bower'){
		var bowerjss;
		//if(isDebug){
			bowerjss = paths.bowerjs.map(function(item, i){
				var paths = item.split("/");
				var jsName = paths[paths.length-1];
        var jspath = '/scripts/public/'+jsName; //getpath(filepath, jspath, config)
				return "<script type='text/javascript' src='"+jspath+"'></script>\n";
			}).reduce(function(a, b){
				return a+b;
			});
		//}else{
		//	bowerjss = "<script type='text/javascript' src='/scripts/vender.js'></script>";
		//}

    return bowerjss;

	}else
		return "";

};

//处理模板的回调函数
var tplCallback = function(templatefile, filepath){ //inject to template {index.tpl.html}
	//console.log(templatefile.toString())

  var options = {
    isDebug: debug,  //product, true: develop -> can't inject css, js
    callback: htmlCallback
  };

	return inject.processHtmlForString(templatefile.toString(), options, filepath);
};

//监听文件变化
gulp.task('watch', function() {
	load.watch(paths.watched)
		.pipe(load.plumber())
		.pipe(gulp.dest(".tmp/"))
		.pipe(load.connect.reload());

	load.watch(config.app+'/**/*.html')
		.pipe(load.plumber())
		.pipe(inject.process({isDebug: debug,callback: htmlCallback, cwd: config.cwd}))
		.pipe(tplProcessor({
			tplProcess : tplCallback
		}))
		.pipe(gulp.dest(".tmp/"))
		.pipe(load.connect.reload());

	gulp.watch(config.app+'/**/*.less', ['less']);

	//gulp.watch('bower.json', ['bower']);
});

//处理html文件到.tmp用于开发
gulp.task('process:html:server', function() {

	debug = true;

	gulp.src(config.app+'/**/*.html')
		.pipe(load.plumber())
		.pipe(inject.process(
      {isDebug: debug,callback: htmlCallback, cwd: config.cwd})
    )
		.pipe(tplProcessor({
			tplProcess : tplCallback
		}))
		.pipe(gulp.dest(".tmp/"));
});

/**
 * ************************
 * *********任务***********
 * ************************
 **/
 gulp.task('server', function (cb) {
  runSequence('clean:all', 'injectWebPath',
    ['bower:ref', 'less', 'lint:scripts',  'copy:all', "process:html:server"],
    ['start:client'],
    'watch', cb);
});

gulp.task('default', ['server']);
gulp.task('build', function(cb){

  console.log(params.webroot);

  if(params.webroot && params.webroot.length>0){
    config.base = params.webroot;
    config.model = 'absolute';
  }else{
    config.base = '';
    config.model = 'relative';
  }

	runSequence('clean:all', 'injectWebPath',
		['bower:ref', 'less', 'copy'],
		//['bower:ref', 'copy'],
		'process:build', cb);

});

gulp.task('process:build', function(){

  //处理bower注入的js，把合并成一个vender.js
	gulp.src(paths.scriptsPublic)
		.pipe(load.concat("vender.js"))
		.pipe(load.uglify())
		.pipe(gulp.dest(config.dist+"/scripts/"));

  //把主要的css合并，
	gulp.src(paths.stylesPublic)
		.pipe(load.concat('main.css'))
		//.pipe(cleanCSS())
    .pipe(minifycss())
		.pipe(gulp.dest(config.dist+'/styles/'));

	//处理html
	debug = false;
	var stream = gulp.src(paths.htmls)
    //把：<!-- build {"type": "script", "ref":"style/main.js"} -->...<!--endbuild--> 替换成指定的文件
		.pipe(inject.process({isDebug: debug,callback: htmlCallback, cwd: config.cwd}))
		.pipe(tplProcessor({tplProcess : tplCallback}))
		.pipe(
      htmlref(
        extend({processCSS: cssHandler,processJS: jsHandler }, config)
      )
    )
		.pipe(gulp.dest(config.dist+'/'));
});


var maps = {};
var jsHandler = function($, filepath, options){

  //console.log($.html());

  //将非public目录下面的js合并
  var appjss = $("script")
    .filter(function(i,element){
      var elem = $(element);
      var src =  elem.attr("src");

      if(!src)
        return false;
      if(src.indexOf('/public/')>=0 || src.indexOf('vender.js')>=0)
          return false;
      return true;
    })
    .map(function(i, item){
      var src =  $(item).attr("src");
      $(item).remove();

      var options = extend({}, config);
      options.model = "absolute";
      options.base ="/";

      // if config.base = "/ald-web", result: /ald-web/scripts/main.js
      // if config.base = "/", result: /scripts/main.js
      // if config.base = "", result: /scripts/main.js
      var abspath = getpath(filepath, src, options);
      //console.log(abspath+", "+filepath+", "+src);
      if(config.base.length>1){
        abspath = abspath.replace(config.base, "");
      }

      if(abspath.indexOf("/") != 0){
        abspath = "/"+abspath;
      }
      return config.app+abspath;
    }).toArray();

  if(appjss && appjss.length>0){
    var temp = (new Buffer(appjss.toString())).toString("binary");
    var ret = crypto.createHash('md5').update(temp).digest("hex");

    var fileName = "app."+ret+".js";

    //getpath(filepath, "/scripts/"+fileName, extend({}, config))
    $("body").append("<script type='text/javascript' src='/scripts/"+fileName+"'></script>");

    if(maps[fileName])
      return ;

    maps[fileName] = true;

    var stream = vfs.src(appjss)
      .pipe(load.concat(fileName))
      .pipe(load.jshint('.jshintrc'))
      .pipe(load.jshint.reporter('jshint-stylish'))
     // .pipe(load.uglify())
      .pipe(gulp.dest(config.dist+"/scripts/"));

  }

};

var cssHandler = function($, filepath, options){

  var csss = $("link")
    .filter(function(i,element){
      var elem = $(element);
      var href =  elem.attr("href");

      if(!href)
        return false;
      if(href.indexOf('main.css')>=0 || href.indexOf('styles.js')>=0)
        return false;
      return true;
    })
    .map(function(i, item){
      var href =  $(item).attr("href");
      $(item).remove();

      var options = extend({}, config);
      options.model = "absolute";
      options.base ="/";

      // if config.base = "/ald-web", result: /ald-web/scripts/main.js
      // if config.base = "/", result: /scripts/main.js
      // if config.base = "", result: /scripts/main.js
      var abspath = getpath(filepath, href, options);
      if(config.base.length>1){
        abspath = abspath.replace(config.base, "");
      }

      return config.app+abspath;
    }).toArray();

  if(csss && csss.length>0){
    var temp = (new Buffer(csss.toString())).toString("binary");
    var ret = crypto.createHash('md5').update(temp).digest("hex");

    var fileName = "app."+ret+".css";

    //console.log(filepath);
    $('head').append('<link rel="stylesheet" href="/styles/'+fileName+'"/>');

    if(maps[fileName])
      return ;

    maps[fileName] = true;

    var stream = vfs.src(csss)
      .pipe(load.concat(fileName))
      //.pipe(cleanCSS())
      .pipe(minifycss())
      .pipe(gulp.dest(config.dist+"/styles/"));
  }

};


















