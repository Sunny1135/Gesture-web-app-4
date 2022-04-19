var Prediction_1="";
 var Prediction_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    function take_snapshot()
    {
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
    }
    console.log('ml5 version:',ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kl8yVMMAS/model.js',modelLoaded);
    function modelLoaded()
{
console.log('Model loaded');
}
function speak()
{
var synth=window.speechSynthesis;
speak_data_1="the first prediction is"+Prediction_1;
speak_data_2="And the second prediction is"+Prediction_2;
var Say=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
synth.speak(Say);
}
function check()
{
img=document.getElementById('captured_image')    ;
classifier.classify(img,gotResult);
}
function gotResult(error,results)
{
if(error)
{
console.error(error);
}else
{
console.log(results);
document.getElementById("result_gesture_name").innerHTML=results[0].label;
document.getElementById("result_gesture_name2").innerHTML=results[1].label;
Prediction_1=results[0].label;
Prediction_2=results[1].label;
speak();
if(results[0].label=="Good")
{
document.getElementById("update_emoji").innerHTML="&#128077;";
}
if(results[0].label=="Okay")
{
document.getElementById("update_emoji").innerHTML="&#128076;";
}
if(results[0].label=="Swag")
{
document.getElementById("update_emoji").innerHTML="&#129304;";
}
if(results[0].label=="Bad")
{
document.getElementById("update_emoji").innerHTML="&#128078;";
}
if(results[0].label=="Wave")
{
document.getElementById("update_emoji").innerHTML="&#128075;";
}

if(results[1].label=="Good")
{
document.getElementById("update_emoji2").innerHTML="&#128077;";
}
if(results[1].label=="Okay")
{
document.getElementById("update_emoji2").innerHTML="&#128076;";
}
if(results[1].label=="Swag")
{
document.getElementById("update_emoji2").innerHTML="&#129304;";
}
if(results[1].label=="Bad")
{
document.getElementById("update_emoji2").innerHTML="&#128078;";
}
if(results[1].label=="Wave")
{
document.getElementById("update_emoji2").innerHTML="&#128075;";
}
}
}