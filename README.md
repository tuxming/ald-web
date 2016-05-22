﻿## ald-web

## quick guide
	prepare:
		install gulp: 	npm install -g gulp
		install bower:  npm install -g bower
		install yeoman: npm install -g yo

		1, npm install  
		2, bower install
		3-1, gulp build                       //http://domain.com:9000/   will use relative path in html
		3-2, gulp build --webroot /ald-web    //http://domain.com:9000/ald-web
		3-3, gulp build --webroot /           //http://domain.com:9000/
		4, gulp server

## warning
```html
	modify boostrap font path in: 
		bower_components/bootstrap/less/variables.less
	open: variables.less
	change:
		@icon-font-path:          "../fonts/"
	to
		@icon-font-path:          "../static/"
```
		
##questions
		1) jit-grunt: Plugin for the "karma" task not found.
			npm install grunt-karma --save-dev
		
		2) add sass support 
			a) install ruby  and add to PATH
			b) install compass: 
				gem install compass
		
		3) add imagemin support
				a) add： "jpegtran-bin": "0.2.0", to package.json
				b) npm remove grunt-contrib-imagemin
					npm install || npm install jpegtran-bin, npm install grunt-contrib-imagemin
	
			other:
				a) install ImageMagick
				b) npm install -g jpegtran-bin
				c) npm install grunt-contrib-imagemin
