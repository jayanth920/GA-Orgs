function BinTree(value){
  this.left = null;
  this.right = null;
  this.value = value;
}


BinTree.prototype.max = function(){
	// check for the root value and set it
	// check it the value to be inserted is > or < the root value
	if (value < this.value) {
		if(this.left === null) {
			this.left = new BinTree(value);
		} else{
			this.left.insert(value);
			}
		} else {
			if (this.right === null) {
			this.right = new BinTree(value);
		} else {
					this.right.insert(value);
		}
}
};
try{
  module.exports = BinTree;
} catch(e){

}