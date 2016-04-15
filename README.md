# ald-web

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## add support
###1, add sass support 
  a) install ruby  and add to PATH
	b) install compass:  
   > gem install compass
<br/>
###2, add imagemin support
    a) add： "jpegtran-bin": "0.2.0", to package.json
	  b) npm remove grunt-contrib-imagemin
	  c) npm install or npm install jpegtran-bin, npm install grunt-contrib-imagemin
<br/>	
	other:
		a) install ImageMagick
		b) npm install -g jpegtran-bin
		c) npm install grunt-contrib-imagemin
	
###3, jit-grunt: Plugin for the "karma" task not found.
	> npm install grunt-karma --save-dev
<br/><br/>
	
## quick guide
> prepare:
> install grunt: 	npm install -g grunt-cli
> install bower:  npm install -g bower
> install yeoman: npm install -g yo
<br/>
>1, npm install<br/>
>2, bower install<br/>
>3, grunt build<br/>
>4, grunt serve<br/>
