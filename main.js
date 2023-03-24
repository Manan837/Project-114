noseX=0;
noseY=0;

function preload()
{
    mustache = loadImage('https://i.postimg.cc/SxVxJBVB/mustache-removebg-preview.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded()
{
    console.log("PoseNet is initialized");
}

function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x - 35;
        noseY=results[0].pose.nose.y - 2;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

    }
}

function take_snapshot()
{
    save('myImage.jpeg');
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 70, 50);
}