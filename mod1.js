module.exports = function callFornote(sub,cb){
	setTimeout(function(){
		cb({note:sub})
	},2000)
}


console.log('yo import huncha ki nai check gara ');