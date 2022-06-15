
var c=document.createElement("canvas");
document.body.appendChild(c);
c.width=1000;
c.height=600;
var ctx=c.getContext("2d");
var imageObj1 = new Image();
var imageObj2 = new Image();
var imageObj = new Image();

// bg big
imageObj1.src = "https://via.placeholder.com/1000x600/FFFFaa"
imageObj1.onload = function() {
   ctx.drawImage(imageObj1, 0, 0, 1000, 600);
    
   // text content center
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.fillText("hallo ini judul center", 500, 100);
  
   // image small
   imageObj2.src = "https://via.placeholder.com/150x150/ccccFF";
   imageObj2.onload = function() {
      ctx.drawImage(imageObj2, 800, 400, 150, 150);
      var img = c.toDataURL("image/png");
      document.write('<img src="' + img + '" width="1000px" height="600px"/>');
   }
  
};