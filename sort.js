//快排。选取第一个元素为标杆，比它小的push到left数组，大的push到right，相等的数连接到left和right中间，递归调用
function quicksort(a){
  var left=[],right=[],s=[],len=a.length;
  var value=a[0];
  var i=1;
  if(len <= 1){
    return a;
  }
  while(i < len){
    if(a[i] < value){
      left.push(a[i++]);
    }else if( a[i] > value){
      right.push(a[i++]);
    }else{
      s.push(a[i++]);
    }

  }
  return quicksort(left).concat(value,s,quicksort(right));
}

//冒泡排序。每一轮外层循环将最小的交换到i的位置
function bubblesort(a){
  for( var i=0,len=a.length; i<len; i++){
    for(var j=i; j<len; j++){
      if(a[i] > a[j]){
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}
//插入排序。
function insersionsort(a){
   for(var i=1,len=a.length; i<len; i++){
       var j=i,v=a[j];
       while(j>0 && a[j-1]>v){
           a[j] = a[j-1];
           j--;
       }
       a[j] = v;
   }
   return a;

}
