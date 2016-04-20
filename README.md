# ald-web

## quick guide
	prepare:
		install grunt: 	npm install -g grunt-cli<br/>
		install bower:  npm install -g bower<br/>
		install yeoman: npm install -g yo<br/>

		1, npm install  
		2, bower install
		3, grunt build
		4, grunt serve

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
