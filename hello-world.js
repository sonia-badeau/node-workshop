console.log("Hello World");

/*Create a branch called hello-world off of master. In it, write a simple node program that outputs "Hello World!" to the console.
Add an instruction to your program that will output "Hello World Again!!" 10 seconds after the program was run.
Create a pull request so we can look at your code.*/

setTimeout(function() {
    console.log('Hello World Again!!');
}, 10);

/*Create a branch called iss off of master. In it, write a simple node program that will output the latitude and longitude of the International Space Station.
Practice your google-fu by searching for "iss api" and figuring out the correct URL to use.
Notice that the values provided by the API are very precise. Round off the values to two decimal digits for a nicer display.
Create a pull request so we can look at your code.*/

var request = require('request');//je veux accéder à cette librairie, donnes moi accès à cette librairie

request("http://api.open-notify.org/iss-now.json", function(err, res, body) { //npm request library
    //if everything is ok, l'information contenue dans l'url passe dans le paramètre body de la fonction
    //si erreur, request va prendre le contenu de cette erreur pour le passer dans err
 
    if (!err) {
        var issInfo = JSON.parse(body); //JSON.parse prend le JSON et il le convertit en objet, parce qu'on veut accéder aux propriétés de cet objet
        console.log(issInfo);
        console.log(issInfo.iss_position.latitude)
        
        console.log("The ISS is now at: " + issInfo.iss_position.latitude.toFixed(2) + " x " + issInfo.iss_position.longitude.toFixed(2));
    }
    else {
        console.log("there was an error: " + err);
    }
});

// toFixed() => fonction qui permet de convertir un numéro

