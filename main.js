function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RLi6vJmA7/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log("You code is working Perfectly");
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        red=Math.floor(Math.random()*255)+1;
        green=Math.floor(Math.random()*255)+1;
        blue=Math.floor(Math.random()*255)+1;
        document.getElementById("action").innerHTML="I can hear - "+results[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("action").style.color="rgb("+red+","+green+","+blue+")";
        document.getElementById("accuracy").style.color="rgb("+red+","+green+","+blue+")";

        img1=document.getElementById("alien1");
        img2=document.getElementById("alien2");
        img3=document.getElementById("alien3");

        if(results[0].label=="Meowing"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
        }
        else if(results[0].label=="Mooing Cow Sound"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
        }
        else{
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
        }

    }

}