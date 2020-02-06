let antwoorden = ['Parijs', '8', 'Ijsselmeer']

function controleerantwoord() {
    let goed = 0;
    let input1 = document.getElementById("eerstevraag"). value;
    if (input1 == antwoorden[0]) {
        document.getElementById("eerstevraag");
        goed += 1;
    } else {
        document.getElementById("eerstevraag");
    }
    let input2 = document.getElementById("tweedevraag").value;
    if (input2 == antwoorden[1]) {
        document.getElementById("tweedevraag");
        goed += 1;
    } else {
        document.getElementById("tweedevraag");
    }
    let input3 = document.getElementById("derdevraag").value;
    if (input3 == antwoorden[2]) {
        document.getElementById("derdevraag");
        goed += 1;
    } else {
        document.getElementById("derdevraag");
    }
    if (goed == 3) {
        document.getElementById("goedeantwoorden").innerHTML = "Alle antwoorden zijn goed!";
    } else {
        document.getElementById("goedeantwoorden").innerHTML = goed + " van jouw drie antwoorden zijn goed!";
    }
}