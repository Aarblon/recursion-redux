// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  // your code here

  var results = [];
  node = node || document.body;

  var nodeClasses = node.className.split(' ');
  if(nodeClasses.indexOf(className) >= 0){
    results.push(node);
  }

  for(var i = 0; i < node.children.length; i ++){
    var childResult = getElementsByClassName(className, node.children[i]);
    results = results.concat(childResult);
  }


  return results;
};
