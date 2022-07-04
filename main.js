
noseX=0;
noseY=0;

function preload()
{
    lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    pose_net=ml5.poseNet(video,modelLoaded);
    pose_net.on('pose',gotPoses);
}

function draw()
{
 image(video,0,0,300,300);
 image(lipstick,noseX,noseY,56,28);



}

function take_snapshot()
{
    save("MyFilterImg.png");
}

function modelLoaded()
{
    console.log("posenet is initialized");
}

function gotPoses(results)
{
 if(results.length>0)
 {
     console.log(results);
     console.log("Nose X="+results[0].pose.nose.x);
     noseX=results[0].pose.nose.x-28;
     noseY=results[0].pose.nose.y+22;
     console.log("Nose Y="+noseY);

 }
}




