export default function cleanSet(set, string) {
  let exmaple = [...set].filter((item) => item.includes(string));
  const len = string.length;
  for (const item of exmaple) {
    exmaple[exmaple.indexOf(item)] = item.slice(len);
  }
  exmaple = exmaple.join('-');
  return exmaple;
}
