# ald-web

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

-----------------------add support----------------------------
1, add sass support 
	a) install ruby  and add to PATH
	b) install compass: 
		gem install compass

2, add imagemin support
	a) add： "jpegtran-bin": "0.2.0", to package.json
	b) npm remove grunt-contrib-imagemin
	c) npm install    or     npm install jpegtran-bin, npm install grunt-contrib-imagemin
	
	other:
		a) install ImageMagick
		b) npm install -g jpegtran-bin
		c) npm install grunt-contrib-imagemin
	
3, jit-grunt: Plugin for the "karma" task not found.
	npm install grunt-karma --save-dev

	
-----------------------quick guide-----------------------------
prepare:
install grunt: 	npm install -g grunt-cli
install bower:  npm install -g bower
install yeoman: npm install -g yo

1, npm install  
2, bower install
3, grunt build
4, grunt serve