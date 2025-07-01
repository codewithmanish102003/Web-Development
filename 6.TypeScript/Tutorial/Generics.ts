//Generics functons

function uniqudataTypefunc<T>(val1: T, val2: T): [T, T] {
  return [val1, val2];
}

const num = uniqudataTypefunc<number>(10, 20);
const stri = uniqudataTypefunc<string>("Hello", "World");
const bool = uniqudataTypefunc<boolean>(true, false);

interface DogInterface {
  name: string;
  breed: string;
}

const dog1 = uniqudataTypefunc<DogInterface>(
  { name: "Buddy", breed: "German" },
  { name: "Sherry", breed: "Unknown" }
);

console.log(num);
console.log(stri);
console.log(bool);
console.log(dog1);

//Generating Random Key Value Pairs
