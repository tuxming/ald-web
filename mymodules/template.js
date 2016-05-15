var through2 = require('through2');
var fs = require('fs');
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
    content = processHtmlForString(content, options, file.path);

    file.contents = new Buffer(content);
    this.push(file);
    done();
  });
}

function processHtmlForString(content, options, filepath){

  /*
   <!-- tpl {"parent": "index.tmp.html", "css": ["/styles/user.css", "/style/default.css"],
   "title": "this is user profile page", "js": ["/script/config.js", "/scripts/user.js"]
   } -->
   */
  var tplReg = /(<!--\s*tpl)[\s\S]*?(-->)/g;

  //{"type": "script", "ref":"style/main.js"}
  var jsonReg = /\{[\s\S]*\}/;

  var matchElems = content.match(tplReg);
  if(matchElems && matchElems.length>0){

    var tpl = matchElems[0];
    content = content.replace(tpl, "");

    var jsonStr = tpl.match(jsonReg);

    if(jsonStr && jsonStr.length>0){

      jsonStr[0] = jsonStr[0].replace(/\r?\n|\r|\t/g, "");
      //console.log("12312::"+jsonStr[0]);
      var info = JSON.parse(jsonStr[0]);

      //load template
      var template = fs.readFileSync(info.parent);
      if(template){

        //process template
        var source = template.toString();

        if(options.tplProcess){
          source = options.tplProcess(template, filepath);
        }

        content = source.replace("#{content}", content);

        for(var variable in info){

          if(variable=='parent')
            continue;

          if(variable=='css'){
            var csss = info.css.map(function(item, i){ //getpath(filepath,item, options)
              return "<link rel='stylesheet' href='"+item+"'/>\n"
            }).reduce(function(a, b){
              return a+b;
            });

            content = content.replace("#{css}",  csss);

          }else if(variable == 'js'){
            var jss = info.js.map(function(item, i){ //getpath(filepath,item, options)
              return "<script type='text/javascript' src='"+item+"'></script>\n"
            }).reduce(function(a, b){
              return a+b;
            });

            content = content.replace("#{js}", jss);

          }else {
            content = content.replace("#{"+variable+"}", info[variable]);
          }

        }

        content = content.replace("#{css}", "");
        content = content.replace("#{js}", "");

      }

    }

  }
  return content;
}
