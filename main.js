song1="";
song2="";
leftWristy=0;
rightWristy=0;


function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("poseNet is loaded");
}


function draw(){
    image(video,0,0,600,500);
    }

    function gotPoses(results){
        if(results.length>0){
            console.log(results);
        
            scoreLeftWrist=results[0].pose.keypoints[9].score;
            scoreRightWrist=results[0].pose.keypoints[10].score;}
        }