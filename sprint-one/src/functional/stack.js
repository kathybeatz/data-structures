var Stack = function(){
  var count = 0; //want to keep track of the size

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){ //push, adding something
                              //put this value in someInstance object
                              //create a key and assignt 
    someInstance[count] = value; //keeping track of what we are putting into our stack
    count++; 
  };

  someInstance.pop = function(){ //removing something
    if(count){
      count--;
    }
    return someInstance[count]; 
  };

  someInstance.size = function(){ //give how many elements are in the stack
    return count;
  };

  return someInstance;
};
