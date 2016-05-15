/**
 * Created by tuxming on 2016-05-13.
 */

var through2 = require('through2');
var cheerio = require('cheerio');
var getpath = require("./getpath.js");

module.exports = function(options){

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

    var content = file.contents.toString();

    content = processHtmlRefForDOM(content, file.path, options);

    file.contents = new Buffer(content);
    this.push(file);
    done();
  });
};

function processHtmlRefForDOM(content, filepath, options){
  var $ = cheerio.load(content);

  //filepath = filepath.substring(0, filepath.lastIndexOf("\\"));

  //var apppath = path.join(options.cwd, options.webdir);
  //var fileRelativePath = filepath.replace(apppath, "");

  if(options.processCSS){
    options.processCSS($, filepath, options);
  }
  if(options.processJS){
    options.processJS($, filepath, options);
  }
  //css ref
  $('link').each(function(i, elem){
    var el = $(elem);
    var ref = getpath(filepath, el.attr("href"),  options);
    el.attr("href", ref);
  });

  //script ref
  $('script').each(function(i, elem){
    var el = $(elem);
    var ref = getpath(filepath, el.attr("src"),  options);
    el.attr("src", ref);
  });

  //img ref
  $('img').each(function(i, elem){
    var el = $(elem);
    var ref = getpath(filepath, el.attr("src"),  options);

    //console.log(filepath+", "+el.attr("src")+", "+ref);

    el.attr("src", ref);
  });

  return $.html();

};

