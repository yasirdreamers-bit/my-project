var canvas, model, video, noseX, noseY;

function preload(){
  moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
	canvas = createCanvas(400,300);
	canvas.center();
	video = createCapture(VIDEO);
	video.size(400,300);
	video.hide();
	model = ml5.poseNet(video, modelLoad);
	model.on('pose',gotResult)
}

function modelLoad(){
	console.log("PoseNET Loaded!");
}

function gotResult(results){
	if(results.length>0){
    noseX = results[0].pose.nose.x-20;
    noseY = results[0].pose.nose.y;
    console.log(noseX, noseY);
  }
}

function draw(){
	image(video, 0, 0,  400, 300);
	image(moustache, noseX, noseY, 50,30);
}

