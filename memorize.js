
function memoize(fn) {
    const map = new Map();
       return function(...args) {
           if(!map.has(JSON.stringify(args))){
               const b = fn(...args);
               map.set(JSON.stringify(args), b);
               return b;
           }
           else{
               return map.get(JSON.stringify(args));
           }
       }
   }
   
   