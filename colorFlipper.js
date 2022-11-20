const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const RandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
}

const hexColor = () => {
  let color = '#';
  for(let i = 0; i <= 6; i += 1) {
    color += hex[RandomNumber(hex)];
  }
  return color;
}

hexColor();