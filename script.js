var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var nameInput = document.getElementById("name");
var downloadBtn = document.getElementById("download-btn");

var image = new Image();
image.crossOrigin = "anonymous";
image.src = "./maee.png";
image.onload = function () {
  drawImage();
};

function drawImage() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.font = "70px Cairo";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";

  ctx.fillText(nameInput.value, 1000, 1300);
}

nameInput.addEventListener("input", function () {
  drawImage();
});

downloadBtn.addEventListener("click", function () {
  downloadBtn.href = canvas.toDataURL("image/jpg");
  downloadBtn.download = "Congrates - " + nameInput.value;
});
