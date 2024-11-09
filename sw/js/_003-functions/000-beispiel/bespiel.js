function sagHallo(language) {
    if (language == "english") {
        console.log("Hello !");
    } else if (language == "deutsch") {
        console.log("Hallo !");
    } else if (language == "spanish") {
        console.log("Ola !");
    } else {
        console.log("Ich spreche nur Englisch, Spanisch und Deutsch!");
    }    
}


function sagVerbessertesHallo(language) {
    var result = "Ich spreche nur Englisch, Spanisch und Deutsch!";
    if (language == "english") {
        result = "Hello";
    } else if (language == "deutsch") {
        result = "Hallo";
    } else if (language == "spanish") {
        result = "Ola !";
    } 
    console.log(result);
}