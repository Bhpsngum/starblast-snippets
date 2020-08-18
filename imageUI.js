/* ADD SMALL IMAGE (lower than 35x35) TO THE GAME
Syntax:
game.configImageUI(options, handler)

options: an object with preferences:
* id, visible, clickable and position: same as normal UI Components
* url: the Image URL (strongly recommends Raw GitHub links)
* opacity: opacity of the image (from 0 to 1)

handler: a function to handle the results

Note: image are not rendered with pixels, its height and width depend to the user's browser window's width and height, so define the postion wisely :D

for example:
game.configImageUI({ 
  id:"example_img", 
  visible:true, 
  clickable:false, 
  url:"https://raw.githubusercontent.com/Bhpsngum/img-src/master/yeetus.png", 
  position: [50,60,10,10], 
  opacity:1 
},game.ships[0].setUIComponent);

will add an imageUIComponent from yeetus.png to the first player's screen

Note: if your image's resolution is too high (more than 35x35), the game will crashed for unknown reason (websocket sending limit maybe?)

*/
game.configImageUI = function(opt, handler)
{
  if (opt.url)
  {
    let image = {
      id: opt.id,
      visible: opt.visible,
      position: opt.position,
      clickable: opt.clickable,
      components: []
    }, img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function(){
      this.canvas = $('<canvas />')[0];
      this.canvas.width = img.width;
      this.canvas.height = img.height;
      this.canvas.getContext('2d').drawImage(this, 0, 0, this.width, this.height);
      let h=100/this.height,w=100/this.width;
      function round(num)
      {
        return parseFloat(num.toFixed(2));
      }
      for (let i=0;i<this.height;i++)
      {
        for (let j=0;j<this.width;j++)
        {
          let data = img.canvas.getContext('2d').getImageData(j,i,1,1).data;
          image.components.push({type:"box",position:[round(w*j),round(h*i),round(w+0.5),round(h+0.5)],fill:`rgba(${data[0]},${data[1]},${data[2]},${data[3]/255*(opt.opacity||1)})`});
        }
      }
      (typeof handler == "function") && handler(image);
    }
    img.onerror = function(){throw new Error("Failed to fetch the image")}
    img.src = opt.url;
  }
  else throw new Error("No Image URL detected");
}
