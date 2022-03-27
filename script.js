window.onload = function() {

    var num1 = Math.ceil(Math.random() * 20);
    var num2 = Math.ceil(Math.random() * 20);
    var num3 = Math.ceil(Math.random() * 20);

    console.log(Math.max(3, 3, 2));

    //stats
    document.getElementById("stat1").innerHTML = num1;
    document.getElementById("stat2").innerHTML = num2;
    document.getElementById("stat3").innerHTML = num3;

    //time
    var time = num2 * num3;
    var timeHour = Math.floor(time / 60);
    var timeMinute = time % 60;
    var timeSentence = "Clearing Time: " + timeHour + "hr " + timeMinute + "min (" + time + " mins)";
    document.getElementById("clearTime").innerHTML = timeSentence;

    //highest
    var statEvent = 1;
    var statHighest = '';
    var highest = Math.max(num1, num2, num3);


    if ((num1 == num2) && (num1 == num3)) {
        statHighest = "All stats have"
        statEvent = 3;
        document.getElementById("equipmentImage").src = "images/PunkBangle.png";
        document.getElementById("equipmentName").innerHTML = "Punk Bangle";

    } else {
        //dual
        if ((num1 == num2) && (num1 == highest)) {
            statHighest = "Attack and Defense stats have"
            statEvent = 2;
            document.getElementById("equipmentImage").src = "images/IoliteShield.png";
            document.getElementById("equipmentName").innerHTML = "Iolite Shield";
        }

        if ((num1 == num3) && (num1 == highest)) {
            statHighest = "Attack and Speed stats have"
            statEvent = 2;
            document.getElementById("equipmentImage").src = "images/CrimeHunterBow.png";
            document.getElementById("equipmentName").innerHTML = "Crime Hunter Bow";
        }

        if ((num2 == num3) && (num2 == highest)) {
            statHighest = "Defense and Speed stats have"
            statEvent = 2;
            document.getElementById("equipmentImage").src = "images/TurtleGauntlet.png";
            document.getElementById("equipmentName").innerHTML = "Turtle Gauntlet";
        }

        //individual num1 to num3

        if ((num2 != highest) && (num3 != highest)) {
            var statHighest = "Attack stat has";
            document.getElementById("equipmentImage").src = "images/CherryBlossom.png";
            document.getElementById("equipmentName").innerHTML = "Cherry Blossom";
        }

        if ((num1 != highest) && (num3 != highest)) {
            statHighest = "Defense stat has";
            document.getElementById("equipmentImage").src = "images/PunkishGirl.png";
            document.getElementById("equipmentName").innerHTML = "Punkish Girl";
        }

        if ((num1 != highest) && (num2 != highest)) {
            statHighest = "Speed stat has";
            document.getElementById("equipmentImage").src = "images/BlackStuddedBoots.png";
            document.getElementById("equipmentName").innerHTML = "Black Studded Boots";
        }
    }

    var statBuff = Math.ceil((Math.random() * 30) / statEvent);
    var statGrammar = "none";

    if (statEvent == 1) {
        statGrammar = "The specific stat is ";

    } else {

        if (statEvent == 2) {
            statGrammar = "The specific stats are ";

        } else {

            if (statEvent == 3) {
                statGrammar = "All the stats are ";

            }
        }
    }


    statDisplayMessage = statHighest + " the highest numbers with a value of " + highest + "! " + statGrammar +
        "buffed by " + statBuff + "%!!!";

    document.getElementById("statDisplay").innerHTML = statDisplayMessage;

    //letter 

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"];
    var chosenLetter = letters[num1 - 1];
    document.getElementById("letterBorder").innerHTML = chosenLetter;

    //word 
    var wordLetters = new Array(6)
    const wordImgLet = ["A", "M", "O", "G", "U", "S"];

    for (var x = 0; x < 6; x++) {
        wordLetters[x] = Math.random();
    }
    for (var x = 0; x < 6; x++) {
        var getLetter = "letter" + x;
        var letterPath = "images\\letters\\" + wordImgLet[x] + "-";

        if (wordLetters[x] < 0.5) {
            document.getElementById(getLetter).src = letterPath + "1.png"
        } else {
            document.getElementById(getLetter).src = letterPath + "2.png"
        }
    }

    //word = true

    setTimeout(function() {
        const wordImgLet = ["A", "M", "O", "G", "U", "S"];
        var wordNumbers = ["1", "13", "15", "7", "21", "19"];
        var word = false;
        var numCount = 0;
        var wordPos = 99;

        while ((word == false) && (numCount < 6)) {
            if (num1 == wordNumbers[numCount]) {
                word = true;
                wordPos = numCount;
            } else {
                numCount++;
            }
        }

        var wordState = !(wordLetters[wordPos] > 0.5)

        if ((word == true) && (wordState == true)) {
            var getLetter = "letter" + numCount;
            var letterPath = "images\\letters\\" + wordImgLet[numCount] + "-2.png";
            setTimeout(function() { document.getElementById(getLetter).src = letterPath; }, 500)

            $('#' + getLetter).animate({ borderSpacing: 1440 }, {
                step: function(now, fx) {
                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 1000
            }, 'linear');

        }
    }, 4500);
}
