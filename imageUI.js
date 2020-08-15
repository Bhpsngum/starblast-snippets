game.configImageUI = function(opt, handler)
{
  let image = {
    id: opt.id,
    visible: opt.visible,
    clickable: opt.clickable,
    components: []
  };
  if (opt.id == null) throw new Error("Invalid UI Component ID");
  if (opt.url)
  {
    let img = $("#"+opt.id)[0];
    if (!img)
    {
      img = document.createElement("img");
      img.setAttribute("id",opt.id);
      img.setAttribute("style","display:none");
      img.crossOrigin = "anonymous";
      $('body').append(img);
    }
    img.onload = function(){
      this.canvas = $('<canvas />')[0];
      this.canvas.width = img.width;
      this.canvas.height = img.height;
      this.canvas.getContext('2d').drawImage(this, 0, 0, this.width, this.height);
      let mx,my,h=100/this.height,w=100/this.width,d=[],pos=opt.position||{x:0,y:0},scale = opt.scale||{x:1,y:1};
      function round(num)
      {
        return parseFloat(num.toFixed(2));
      }
      if (["scoreboard","radar_background"].indexOf(opt.id) != -1)
      {
        d=[0,0];
        mx=(pos.x||0)/100;
        my=(pos.y||0)/100;
      }
      else
      {
        d = [pos.x||0,pos.y||0];
        mx=0;
        my=0;
      }
      image.position = [d,[round(w*(scale.x||1)),round(h*(scale.y||1))]].flat();
      for (let i=0;i<this.height;i++)
      {
        for (let j=0;j<this.width;j++)
        {
          let data = img.canvas.getContext('2d').getImageData(j,i,1,1).data;
          image.components.push({type:"box",position:[round(w*j+mx),round(h*i+my),round(w*1.5),round(h*1.5)],fill:`rgba(${data[0]},${data[1]},${data[2]},${data[3]/255*(opt.opacity||1)})`});
        }
      }
      (typeof handler == "function") && handler(image);
    }
    img.onerror = function(){throw new Error("Failed to fetch the image")}
    img.setAttribute("src",opt.url);
  }
  else throw new Error("No Image URL detected");
}
