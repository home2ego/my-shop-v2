export default function formatProductName(name: string) {
  const nameToArr = name.split(' ');
  const lastWord = nameToArr[nameToArr.length - 1];

  return lastWord[0].toUpperCase() + lastWord.substring(1);
}
