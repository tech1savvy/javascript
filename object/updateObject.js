let obj = {
  num1: 1,
  num2: 2,
};

function updateObject(getObj) {
  return {
    ...getObj,
    num2: 0,
  };
}

obj = updateObject(obj);

console.log(obj);
