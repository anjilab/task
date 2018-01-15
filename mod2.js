module.exports = function printNote(sub,cbs){
	//note print ko lagi pathako 
	setTimeout(function(){
		cbs({note:sub});
	},2000)
}