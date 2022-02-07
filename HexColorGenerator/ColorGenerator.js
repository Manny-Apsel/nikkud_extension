export function getRandomHexValue() {
  let hexArray = [];
  for (let index = 0; index < 10; index++) {
    hexArray.push(index.toString());
  }
  hexArray.push("A");
  hexArray.push("B");
  hexArray.push("C");
  hexArray.push("D");
  hexArray.push("E");
  hexArray.push("F");

  let hexValue = "";

  for (let jindex = 0; jindex < 6; jindex++) {
    let randVal = Math.floor(Math.random() * 15);
    hexValue += hexArray[randVal];
  }

  return hexValue;
}
