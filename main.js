function identify() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lHNZCCyhK/model.json", modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotResults)
}



function gotResults(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
}



// {label: 'Backpack', confidence: 0.9945693612098694}

// {label: 'Background Noise', confidence: 0.003012805711477995}

// {label: 'Fork And Bowl', confidence: 0.0020427112467586994}

// {label: 'Medicine',}