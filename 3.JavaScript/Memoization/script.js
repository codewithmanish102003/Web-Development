function slowFunction(num) {
    console.log('Calculating...');
    return num * num;
  }
  
  function memoize(fn) {
    const cache = {};
    return function (arg) {
      if (cache[arg]) {
        return cache[arg]; // Return cached result
      }
      cache[arg] = fn(arg);
      return cache[arg];
    };
  }
  
  const fastFunction = memoize(slowFunction);
  
  console.log(fastFunction(5)); // Output: Calculating... 25
  console.log(fastFunction(5)); // Output: 25 (No recalculation)
  