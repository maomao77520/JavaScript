/*函数判断两个对象是否相等*/
function objEqual(objA,objB){
    if(Object.prototype.toString.call(objA)  !== Object.prototype.toString.call(objB)){//若两个参数的类型不同，则不相等。可区分object和array
    	return false;
    }
    if(Object.prototype.toString.call(objA) === "[object Object]"){ //对象，要求对象名相同的值相等
        var objAlen = 0, objBlen = 0;
       for(var o in objA){   //遍历A的所有自有属性
       	   if( !objA.hasOwnProperty(o)){continue;}
       	   if(typeof objA[o] === 'number' || typeof objA[o] === 'string'){ //基本类型，可直接用全等判断，只要A中属性o的值与B中对应的属性o的值相等，则返回true
       	   	   if( objA[o] !== objB[o]) {
       	   	   	   return false;
       	   	   }
       	   }else if( !arguments.callee(objA[o],objB[o])){  //引用类型，递归调用objEqual
       	   	   return false;
       	   }
       	   objAlen ++;   //计算A的属性的个数
       }
       for(var u in objB){  //遍历计算B的自有属性的个数
           if( !objB.hasOwnProperty(o)){ continue;}
           objBlen ++;
       }
       if(objAlen != objBlen){  //属性个数不相等，则对象不相等，返回false
       	  return false;
       }
       return true;
    }
    if(Object.prototype.toString.call(objA) === "[object Array]"){   //数组，要求对应位置的值相等
    	if(objA.length !== objB.length){   //数组长度不等则不相等
    		return false;
    	}
    	for( var i=0; i<objA.length; i++){     //对应位置的值相等
    		if(typeof objA[i] !== typeof objB[i]){   //对应位置的类型相等，此处不能判断object和array，需要再递归调用后判断
    			return false;
    		}
            if(typeof objA[i] === 'number' || typeof objA[i] === 'string'){  
            	if(objA[i] !== objB[i]){
            		return false ;
            	}
            }else if( !arguments.callee(objA[i],objB[i])){
            	console.log("sub obj not 2");
            	return false;
            }
    	}
    	return true;
    }
}