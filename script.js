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
  ctx.font = "60px Cairo";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";

  ctx.fillText(nameInput.value, 750, 975);
}

nameInput.addEventListener("input", function () {
  drawImage();
});

downloadBtn.addEventListener("click", function downladDrw() {
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png"); // Set the image data as the link URL
  link.download = "Congrates - " + nameInput.value; // Set the desired file name
  link.click();
});
