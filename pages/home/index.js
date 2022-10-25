const inputsColor = [...document.querySelectorAll("input[type=color]")];

const colors = [
  "#5f3dc4",
  "#7048e8",
  "#7950f2",
  "#845ef7",
  "#212529",
  "#495057",
  "#ced4da",
  "#f1f3f5",
  "#c92a2a",
  "#087f5b",
  "#f08c00",
  "#c6c7cd",
];

colors.forEach((style, index) => {
  inputsColor[index].value = style;
});
