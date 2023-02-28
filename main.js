mx="";
my="";


function preload(){
mustache=loadImage("https://i.postimg.cc/J0SNWBgC/fimg.png")
}

function setup(){
    canvas=createCanvas(350,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model loaded succesfuly");
}


function gotPoses(result){
    if(result.length>0)
    {
        console.log(result)
        mx=result[0].pose.nose.x-180;
        my=result[0].pose.nose.y-85;
    }
}


function take_snapshot(){
    save("ythgfgvttntgd.png")
}

function draw(){
    image(video,0,0,350,300);
    image(mustache,mx,my,100,40)
    
}
//https://i.postimg.cc/J0SNWBgC/fimg.png

