import orderByProps from '../js/orderFunc';

test('testing orderFunc', () => {
  const param = ['name', 'level'];
  const targetObj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const mathchObj = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const result = orderByProps(targetObj, param);
  expect(result).toMatchObject(mathchObj);
});
