const param = ['name', 'level'];
const targetObj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};
export default function orderByProps(obj, paramArr) {
  const tmpArr = [];
  const keysArr = [];
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (paramArr.includes(key)) {
      keysArr.push({ key, value });
    } else {
      tmpArr.push({ key, value });
    }
  });
  tmpArr.sort((a, b) => (a.key > b.key ? 1 : -1));
  return [...keysArr, ...tmpArr];
}
console.log(orderByProps(targetObj, param));
