var through2 = require('through2');
var getpath = require("./getpath.js");

var inject ={};
module.exports = inject;
inject.process = function(options){

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

    //这里去掉views目录
    //if(file.path.indexOf("/views/")>=0)
    //  file.path =  file.path.replace();
    console.log("1=++++"+file.path+", "+options.cwd);
    var mypath = file.path.replace(options.cwd+"\\app\\", "");
    console.log(file.path + ", "+mypath+"," +mypath.indexOf("views"));
    if(mypath.indexOf("views") == 0){
      mypath = mypath.replace("views", "");
    }else{
      mypath = "\\"+mypath;
    }

    file.path = options.cwd+"\\app"+mypath;

    console.log(file.path);

    content = inject.processHtmlForString(content, options, file.path);

    file.contents = new Buffer(content);
    this.push(file);
    done();
  });
};
/**
 *

 * @param options={cwd:"gulpfile.js目录的绝对路径"，
    isDebug: (true, false), true: not uglify and other handler: js,css file
    callback: parame: info, filepath, isDebug
 * }
 *
 * @info: json from： <!-- build {"type": "script", "ref":"style/main.js"} -->
 *
 * @param content
 * @param filepath
 */
inject.processHtmlForString = function (content, options, filepath){

  //<!-- build {"type": "script", "ref":"style/main.js"} -->
  //<script src="scripts/app.js"></script>
  //<script src="scripts/controllers/main.js"></script>
  //<!-- endbuild -->

  //<!-- build {type: "css", ref:"style/main.js"} -->
  //<link href="styles/main.css"></link>
  //<link href="styles/default/style.css"></link>
  //<!-- endbuild -->
  var jsRegExp = /(<!--\s*build)[\s\S]*?(endbuild\s*-->)/g;

  //<!-- build {"type": "script", "ref":"style/main.js"} -->
  var headerReg = /<!--.*-->/;

  //{"type": "script", "ref":"style/main.js"}
  var jsonReg = /\{.*\}/;

  var matchElems = content.match(jsRegExp);
  if(matchElems && matchElems.length>0){
    for(var i=0; i < matchElems.length; i++){

      var head = matchElems[i].match(headerReg);

      if(head && head.length>0){

        var jsonStr = head[0].match(jsonReg);

        if(jsonStr && jsonStr.length>0){

          var info = JSON.parse(jsonStr[0]);

          if(!options.isDebug){
            var replaceText = "";
            if(info.type){

              if(info.type==='script'){//var fpath = getpath(filepath, info.ref, options)
                replaceText = '<script type="text/script" src="'+info.ref+'"></script>';
              }else if(info.type==='css') //getpath(filepath, info.ref, options)
                replaceText = '<link rel="stylesheet" href="'+info.ref+'"/>';
              else{
                if(options && options.callback){
                  replaceText = options.callback(info, options.isDebug, filepath)
                }
              }
            }
            content = content.replace(matchElems[i], replaceText);
          }else{
            if(options && options.callback){
              var replaceText = options.callback(info, options.isDebug, filepath);

              if(replaceText){
                content = content.replace(matchElems[i], replaceText);
              }
            }
          }

        }

      }

    }
  }
  return content;
};
