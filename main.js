canvas= new fabric.Canvas("myCanvas");
var player_x= 10;
var player_y= 10;
block_image_height= 30;
block_image_width= 30;
var player_image= "";
var block_img_object= "";

function player_update(){
    fabric.Image.fromURL("player.png", function(IMG){
        player_image= IMG;
        player_image.scaleToWidth(145);
        player_image.scaleToHeight(135);
        player_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image);
    });
}

function block_img_update(get_img){
fabric.Image.fromURL(get_img, function(IMG){
    block_img_object= IMG;
    block_img_object.scaleToWidth(block_image_width);
    block_img_object.scaleToHeight(block_image_height);
    block_img_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_img_object);
});
}