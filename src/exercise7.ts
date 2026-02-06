/*
Practical question
Solve all the typing issues in the code without changing the implementation

const setRange = (range: number): number => {
  const x = range[0];
  const y = range[1];

  return { x, y: y.age > 10 };
};

setRange([true, { name: 'Patrick', age: 3}]);x
*/


type Person = {
  name: string;
  age: number;
};

type Ranges = [boolean, Person];

const setRange = (range: Ranges): { x: boolean; y: boolean } => {
  const x = range[0];
  const y = range[1];

  return { x, y: y.age > 10 };
};

setRange([true, { name: 'Patrick', age: 3 }]);
