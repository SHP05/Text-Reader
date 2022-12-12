function fun(){
    var x = document.getElementById("MyT").value;
    console.log(x);
//the SpeechSynthesisUtterance is a web speech API that represent a speech request
    let utterence = new SpeechSynthesisUtterance(`${x}}`);
    speechSynthesis.speak(utterence);   //speak method of speechsynthesis speaks the utterence
}