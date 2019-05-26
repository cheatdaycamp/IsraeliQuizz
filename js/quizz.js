var score1 = 0,
    score2 = 4,
    score3 = 0,
    score4 = 0,
    score5 = 0;

function resetAns() {
    score1 = 0,
        score2 = 4,
        score3 = 0,
        score4 = 0,
        score5 = 0;
}

function getQuestion1ans() {
    var radios = document.getElementsByName('question1');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            score1 = parseInt(radios[i].value);
            break;
        }
    }
    return score1;
}

function getQuestion2ans(myID) {
    var ans = document.getElementById("q2-ans");
    score2 = 4;
    switch (myID) {
        case "button-q2-a":
            ans.innerHTML = ("Your choice: A");
            score2 = 4;
            break;
        case "button-q2-b":
            ans.innerHTML = ("Your choice: B");
            score2 = 1;
            break;
        case "button-q2-c":
            ans.innerHTML = ("Your choice: C");
            score2 = 3;
            break;
        case "button-q2-d":
            ans.innerHTML = ("Your choice: D");
            score2 = 2;
            break;
    }
    return score2 = parseInt(score2);
}

function getQuestion3ans() {
    var checkbox = document.getElementsByName('question3');
    var z = 0;
    for (var i = 0, length = checkbox.length; i < length; i++) {
        if (checkbox[i].checked) {
            z++;
        }
    }
    return score3 = parseInt(z);
}

function getQuestion4ans() {
    var ans = document.getElementById("q4-ans");
    score4 = parseInt(ans.options[ans.selectedIndex].value);
    return score4;
}

function getQuestion5ans() {
    score5 = parseInt((document.getElementById("q5-ans").value) / 2);
    return score5;
}

function getAnswers() {
    var result = document.getElementById("result")
    var totscore = score1 + score2 + score3 + score4 + score5;
    if (totscore < 9) {
        result.innerHTML = "As Israeli as a Coconut (No, we don't have coconuts here)";
    } else if (totscore < 13) {
        result.innerHTML = "Not so israeli.. But you are starting to get the basics";
    } else if (totscore < 17) {
        result.innerHTML = "On the way to become an Israeli expert... Keep it that way Neshama Sheli!!!";
    } else {
        result.innerHTML = "True israeli! \n The blue and white is in your veins, we can see that you speak hebrew faster than Subliminal";
    }

}