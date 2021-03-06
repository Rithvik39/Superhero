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

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
var key_pressed= e.keyCode;
console.log(key_pressed);

if(e.shiftKey == true && key_pressed == "80"){
    console.log("Shift and P key is pressed");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

if(e.shiftKey == true && key_pressed == "77"){
    console.log("Shift and M key is pressed");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

if(key_pressed == "38"){
    console.log("Up arrow key is pressed");
    //Up();
}
if(key_pressed == "40"){
    console.log("Down arrow key is pressed");
    //Down();
}
if(key_pressed == "37"){
    console.log("Left arrow key is pressed");
    //Left();
}
if(key_pressed == "39"){
    console.log("right arrow key is pressed");
    //Right();
}


if(key_pressed == "70"){
    console.log("F key is pressed");
    block_img_update("ironman_face.png");
}
if(key_pressed == "66"){
    console.log("B key is pressed");
    block_img_update("spiderman_body.png");
}
if(key_pressed == "76"){
    console.log("L key is pressed");
    block_img_update("hulk_legs.png");
}
if(key_pressed == "82"){
    console.log("R key is pressed");
    block_img_update("thor_right_hand.png");
}
if(key_pressed == "72"){
    console.log("H key is pressed");
    block_img_update("captain_america_left_hand.png");
}
}