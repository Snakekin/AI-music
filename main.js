function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded); 

    poseNet.on('pose', gotPoses)

}

function modelLoaded(){
    console.log('PoseNet is Intialized');
}

function draw() {
    image(video, 0,0,600,500);
    song1status=song1.isPlaying();
    song2status=song2.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");
if(scorerightwrist >0.2)
{
    circle(rightWristX,rightWristY,20);
song2.stop();

if(song_status==false)
{
    song1.play();
    document.getElementById("song").innerHTML="playing- Enchanting Flutes"
}
}


}

song1 ="";
song2 ="";
leftWristX= 0;
leftWristY=0;
rightWristX= 0;
rightWristY=0;
scoreleftwrist = 0;
scorerightwrist = 0;
song1status="";
song2status="";
function preload()
{
    song1 =loadSound("song1.mp3");
    song2 =loadSound("song2.mp3");

}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreleftwrist= results[0].pose.keypoints[9].score;
        console.log("scoreleftwrist = " + scoreleftwrist);
        scorerightwrist= results[0].pose.keypoints[10].score;
        console.log("scorerightwrist = " + scorerightwrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX+" leftWristY = " + leftWristY );
       rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX+" rightWristY = " + rightWristY );
    }
}

