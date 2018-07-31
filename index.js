function getFirstSelector(selector){
  var output = document.querySelector(selector);
  return output;
}

function nestedTarget(){
  var output = document.querySelector('#nested.target');
  return output;
}

function increaseRankBy(n){
  var output = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < output.length; i++){
    output[i].innerHTML = parseInt(output[i].innerHTML) + n;
  }
}

function deepestChild(){
  var output = document.getElementById('grand-node');
  var nextChild = output.children[0];
  while (nextChild){
    
  }
}