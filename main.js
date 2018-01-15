var moda = require('./mod1.js');
var modb = require('./mod2.js');
var modc = require('./mod3.js');
var mode= require('./mod4.js');

console.log('moda>>>',moda);
console.log('modb>>>',modb);
console.log('modc>>>',modc);
console.log('mode>>>',mode);


// // module.exports = function callFornote(sub,cb){
// 	setTimeout(function(){
// 		cb({note:sub})
// 	},2000)
// }

moda('javascript', function(note) {
	console.log('note is ready ');
	console.log('note is now ', note);
	modb(note, function(printedNote) {
		console.log('printed note is ', printedNote);
		modc(function(done) {
			console.log('watching movie finished', done);
			mode(function(done) {
				console.log('bike servicing finished');
				// startPrepareNow(note);
			});
		});
		console.log('it start raining');
	});
	console.log('take bath');
	console.log('eat food');


});
console.log('this is below call for note');