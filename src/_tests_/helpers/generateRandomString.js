export default ({
  length = 10,
  types = 'Zz',
  additionalSymbols = '',
  prefix = '',
}) => {
  let symbols = types.split('').reduce((memo, item) => {
    let symbols = '';

    if (item === 'Z') {
      symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (item === 'z') {
      symbols = 'abcdefghijklmnopqrstuvwxyz';
    } else if (item === '0') {
      symbols = '0123456789';
    } else if (item === 'Я') {
      symbols = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    } else if (item === 'я') {
      symbols = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    }

    return memo + symbols;
  }, '');

  symbols += additionalSymbols;

  let result = '';

  for (let i = 0; i < length; i++) {
    const char = symbols.charAt(Math.floor(Math.random() * symbols.length));
    result += char;
  }

  return prefix + result;
};
