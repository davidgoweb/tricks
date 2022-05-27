function embedForm(params) {
    let height = {
      heightWindow: 566,
  
      set changeHeight(newHeight) {
        this.heightWindow = newHeight;
      },
    };
    const embedURL = "https://www.hashmicro.com/id/embed-form/";
    let idname = 'form-embed-'+params.id;
    let breakpoints = [
      {width: 0, resizeTo: 780},
      {width: 592, resizeTo: 602}
    ];
  
    breakpoints.forEach((element, index, array) => {
      if (screen.width >= array[index]['width']) {
        height.changeHeight = array[index]['resizeTo'];
      } 
    });
  
    window.onresize = () => {
      breakpoints.forEach((element, index, array) => {
        if (screen.width >= array[index]['width']) {
          document.getElementById(idname).height = array[index]['resizeTo'];
        } 
      });
    };
  
    let embed =
      "" +
      "<embed" +
      '      type="text/html"' +
      `      id="${idname}"` +
      `      src=${embedURL}?id=${params.id}"` +
      '      width="100%"' +
      `      height="${height.heightWindow}px"` +
      "    />" +
      "";
  
    const para = document.createElement("div");
    para.setAttribute("id", "form-container-hashmicro");
    document.body.appendChild(para);
    document.getElementById('form-container-hashmicro').innerHTML = embed;
  }
  