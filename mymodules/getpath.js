/**
 * Created by Administrator on 2016-05-14.
 */

var path = require("path");
var extend = require('util')._extend;

/**
 {
   model: relative|absolute,
   base: "/",  model=='absolute' when:( "/"-> "http://domain:port/main.js"),  ( "/ald-web"-> "http://domain:port/ald-web/main.js")
   app: "app", app dir
   cwd: "c:/web/"  //gulpfile.js absolute path
 }
 */
module.exports = function(filepath, ref, options){
  //filepath: c:/webapp/app/home   c:/webpp/app/home/index.html
  //apppath:  c:/webapp/app
  //ref:      /scripts/main.js| ../scripts/main.js| ./scripts/main.js

  //console.log(JSON.stringify(options), filepath, ref);

  options = extend({
    app: 'app',
    model: 'relative',
    cwd: process.cwd(),
    base: function(){
      var cwd = process.cwd();
      var parent = path.resolve(process.cwd(), '../');
      return cwd.replace(parent, "").replace("/\\/g", "/");
    }()
  }, options);

  if(!ref)
    return ref;

  filepath = filepath.substring(0, filepath.lastIndexOf("\\"));
  var apppath = path.join(options.cwd, options.app);

  ref = ref.replace(/\\/g, "/");
  if(ref.length>0 && ref.substring(0,1) == '/'){
    ref = path.join(apppath, ref);      //
  }else{
    ref = path.join(filepath, ref);
  }

  //ref: c:/webapp/app/scripts/main.js

  if(options.model == 'relative'){
    ref = path.relative(filepath, ref);  // ../scripts.js
  }else{ //absolute
    //console.log(options.base+", "+ref+", "+apppath);
    if(options.base.indexOf("http://")>=0 ||options.base.indexOf("https://")>=0 ){
      var mybase = options.base;
      if(mybase.lastIndexOf("/") != mybase.length-1){
        mybase = mybase+"/";
      }
      ref = options.base+ref.replace(apppath, "");
    }else{
      ref = path.join(options.base, ref.replace(apppath, ""));   // /web/scripts/main.js| /scripts/main.js
    }
  }
  ref = ref.replace(/\\/g, "/");

  return ref;
};
