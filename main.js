function identify() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/W6WGKHTo5/model.json", modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotResults)
}



function gotResults(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("resultLabel").innerHTML = "I Can Hear - " + result[0].label;
        document.getElementById("resultAccuracy").innerHTML = "Accuracy - " + result[0].confidence.toFixed(2);

        if (result[0].label == 'Pig') {
            document.getElementById("image").src = "Pig.jpg";
        } else if (result[0].label == 'Monkey') {
            document.getElementById("image").src = "Monkey.jpg";
        } else if (result[0].label == 'Cow') {
            document.getElementById("image").src = "Cow.jpg";
        } else {
            document.getElementById("image").src = "Speaker.jpg";
        }
    }
}



/*[
    {
        "label": "Pig",
        "confidence": 0.4571627974510193
    },
    {
        "label": "Background Noise",
        "confidence": 0.20363536477088928
    },
    {
        "label": "Monkey",
        "confidence": 0.177247554063797
    },
    {
        "label": "Cow",
        "confidence": 0.16195432841777802
    }
]*/