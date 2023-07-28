nose_x=0;
nose_y=0;
leftwristX=0;
rightwristX=0;
difference=0;
function setup()
{
    canvas=createCanvas(550,550);
    canvas.position(675,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);   
}
function draw()
{
    background("grey");
    fill("blue");
    stroke("yellow");
    textSize(difference);
    text("text",nose_x,nose_y);
    document.getElementById("side").innerHTML="Font size is : "+difference+"px";
}
function modelloaded()
{
    console.log("model loaded!");
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x is: "+nose_x+" nose y is: "+nose_y)
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("the difference b/w left wrist and right wrist is "+difference)
        
    }
}