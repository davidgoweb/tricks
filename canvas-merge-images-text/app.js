var c=document.getElementById("my-canvas");
var ctx=c.getContext("2d");
var imageObj1 = new Image();

imageObj1.crossOrigin="anonymous";
var imageObj2 = new Image();
var imageObj = new Image();

// certificate bg
imageObj1.src = "image-big.png"
imageObj1.onload = function() {
  ctx.drawImage(imageObj1, 0, 0, 1000, 600);
    
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.fillText("hallo ini text center", 500, 100);
  
   // qrcode path
   imageObj2.src = "image-small.png";
   imageObj2.onload = function() {
      ctx.drawImage(imageObj2, 800, 400, 150, 150);
   }
  
};


// Convert canvas to image
document.getElementById('btn-download').addEventListener("click", function(e) {
    var canvas = document.querySelector('#my-canvas');

    var dataURL = canvas.toDataURL("image/jpeg", 1.0);

    downloadImage(dataURL, 'my-canvas.jpeg');
});

// Save | Download image
function downloadImage(data, filename = 'untitled.jpeg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}