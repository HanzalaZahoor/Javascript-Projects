const endDate = "25 May 2024 12:00 AM";
document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  //   console.log(diff);

  if (diff < 0) {
    inputs[(0, 1, 2, 3)].value = 0;
  } else {
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff % 60);
  }
};

setInterval(() => {
  clock();
}, 1000);
