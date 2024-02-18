const randomColor = () => {
  let hexColor = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
  document.body.style.backgroundColor = hexColor;
  document.getElementById("color-code").innerText = hexColor;
};
document.getElementById("btn").addEventListener("click", randomColor);
randomColor();
