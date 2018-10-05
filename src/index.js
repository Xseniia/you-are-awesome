createEnumerableProperty = function(name) {
	let obj = {};
	obj.name=0;
	return obj;
};

function createNotEnumerableProperty(name){ 
return Symbol(name);
}

function createProtoMagicObject() {
	function magic(){};
	magic.prototype=Function.prototype;	
return magic;
}

let incrementorSum = 0;

function incrementor () {
  incrementorSum++;
  function counter() {
    incrementorSum++;
   return counter;
  }
  counter.toString = function() {
    return incrementorSum;
  };
  return counter;
};

var asyncincrementorSum = 1;
asyncIncrementor = function() {
	return asyncincrementorSum++;
};

function createIncrementer() {
	let b = {
		value: 0,
		next: function() {this.value = this.value+1; return this;},
		[Symbol.iterator]: function() {return this; }
	}
return b;		
}

// return same argument not earlier than in one second, and not later, than in two
returnBackInSecond = function(param) {
  let parametr = param;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // после таймаута — вызов resolve,
      // можно без результата, чтобы управление перешло в следующий then
      // (или можно передать данные пользователя дальше по цепочке)
     resolve (parametr);
    }, 1000);
  });
  
  promise.then(); 
  //promise.then( function (parametr) {}, function (parametr) {console.log("Was mistale");})
  function resolve() {return parametr;}
}

function getDeepPropertiesCount(obj) { 
	let len=JSON.stringify(obj);
	let count=0;

	let temp = [], openingBrackets = [], closingBrackets = [];
  
	openingBrackets[0]='{'; 
	closingBrackets[0]='}';
    temp.push(len[0]);

	for (i = 1; i < len.length; i++) {
		symbol = len[i];

		if (openingBrackets.indexOf(symbol) > -1) {		
			temp.push(symbol);

		} else if (closingBrackets.indexOf(symbol) > -1) {
			temp.pop(); 
			count++;} else continue;
    }
return count-1;
};

createSerializedObject = function () {
return null;
}

sortByProto = function(objectsArr) {
return objectsArr.sort((a,b) => {return a.__proto__ - b.__proto__;})
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;