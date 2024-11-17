export function generateRandomNums() {
  return Math.floor(Math.random() * 100);
}

function cToF(celcius) {
  return (celcius * 9) / 5 + 32;
}

const dataObj = { value: 100, value2: 200 };

const dataObjFunc = () => {
  return { funValue: 100, funVlue2: 200 };
};

const defaultDataObj = { defaultValue: 100, defValue2: 200 };

export { cToF, dataObj, dataObjFunc };
export default defaultDataObj;
