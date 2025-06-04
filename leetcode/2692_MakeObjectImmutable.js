function deepFreeze(obj) {
    // Retrieve the property names defined on obj
    const propNames = Object.getOwnPropertyNames(obj);
    console.log('propName' , propNames);
    // Freeze properties before freezing self
    for (const name of propNames) {
      const value = obj[name];
      console.log("value , name" , value, name);
      
      // If value is an object, freeze it
      if (value && typeof value === 'object') {
        deepFreeze(value);
      }
    }
  
    return Object.freeze(obj);
}

const obj = {
  a: 1,
  b: {
    c: {
      d:2
    }
  }
};

deepFreeze(obj);

obj.a = 10;

console.log(obj.b);