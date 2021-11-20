LeftX = 0;
RightX = 0;
Difference = 0;

function setup(){
    Canvas = createCanvas(550 , 400);
    Canvas.position(630 , 110);

    vid = createCapture(VIDEO);
    vid.size(525 , 500);
    vid.position(80 , 58);

    pose = ml5.poseNet(vid , loaded);
    pose.on('pose' , got_poses);

}
function loaded(){
    console.log("PoseNet Is Loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

function got_poses(results){
    if(results.length>0){
     console.log(results);
     LeftX = results[0].pose.leftWrist.x;
     RightX = results[0].pose.rightWrist.x;

     Difference = floor(LeftX - RightX);

     document.getElementById("Font").innerHTML = "The Font Size Is "+Difference+"px";
    }
}
function draw(){
    textSize(Difference);
    fill('#FFFFFF');

    text('Holiday' , 10 , 200);
}