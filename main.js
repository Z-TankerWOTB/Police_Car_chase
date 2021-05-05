canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var Police_car= police_car_real.jfif ;
var Thief_car= yellow_thief_car_real.jfif ;

var P_car_width=100;
var P_car_height=100;
var P_car_x=10;
var P_car_y=10;

var T_car_width=100;
var T_car_height=100;
var T_car_x=25;
var T_car_y=10;

var background_img= background.jfif

function add(){
    bac_imgTag=new Image();
    bac_imgTag.onload=uploadbackground;
    bac_imgTag.src=background_img;
    P_imgTag=new Image();
    P_imgTag.onload=upload_P_car;
    P_imgTag.src=Police_car;
    T_imgTag=new Image();
    T_imgTag.onload=upload_T_car;
    T_imgTag.src=Thief_car;
}

function uploadbackground(){
    ctx.drawImage(bac_imgTag, 0, 0,canvas.width,canvas.height);
}

function upload_P_car(){
    ctx.drawImage(P_imgTag,P_car_x, P_car_y,P_car_width,P_car_height);
}

window.addEventListener("keydown",my_Keydown);

function my_Keydown(e){
    console.log("test");
    keypress=e.keyCode;
    console.log(keypress);
    if (keypress=='38'){
        up();
        console.log("up");
    }
    if (keypress=='40'){
        down();
        console.log("down");
    }
    if (keypress=='39'){
        right();
        console.log("right");
    }
    if (keypress=='37'){
        left();
        console.log("left");
    }
    if (keypress=='87'){
        w_key();
        console.log("w");
    }
    if (keypress=='65'){
        a_key();
        console.log("a");
    }
    if (keypress=='83'){
        s_key();
        console.log("s");
    }
    if (keypress=='68'){
        d_key();
        console.log("d");
    }
   }

   function up(){
       if(T_car_y >= 0){
           T_car_y = T_car_y - 10 ;
           uploadbackground();
           upload_T_car();
       }
   }
   function down(){
    if(T_car_y <= 500){
        T_car_y = T_car_y + 10 ;
        uploadbackground();
        upload_T_car();
    }
}
function left(){
    if(T_car_x >= 0){
        T_car_x = T_car_x - 10 ;
        uploadbackground();
        upload_T_car();
    }
}
function right(){
    if(T_car_x <= 700){
        T_car_x = T_car_x + 10 ;
        uploadbackground();
        upload_T_car();
    }
}
function w_key(){
    if(P_car_y >= 0){
        P_car_y = P_car_y - 10 ;
        uploadbackground();
        upload_P_car();
    }
}
function s_key(){
    if(P_car_y <= 500){
        P_car_y = P_car_y + 10 ;
        uploadbackground();
        upload_P_car();
    }
}
function a_key(){
    if(P_car_x >= 0){
        P_car_x = P_car_x - 10 ;
        uploadbackground();
        upload_P_car();
    }
}
function d_key(){
    if(P_car_x <= 700){
        P_car_x = P_car_x + 10 ;
        uploadbackground();
        upload_P_car();
    }
}