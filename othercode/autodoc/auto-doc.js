/** HTML script for 8-bit map with data included for 30 countries
      *@author  Deekshitha Thumma, Gabriel Cohen, Michael Min, Jeffrey Won, Jeffrey Kim
      *@version v1.0.0
      *@since 2016-04-20
      */

/** setCookie function 
*sets unique cookie ID for a user when the user types in his username.
*/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

/** getCookie function calls saved cookie for a username
*@return saved unique cookie of a username
*/
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/** checkCookie function 
*checks the username to differentiate between returning user and new user
*@return setCookie or welcome again text
*/
function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}

/** 
*myFunction: when the user clicks on the button,
*toggle between hiding and showing the dropdown content 
*/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var d = 0; d < dropdowns.length; d++) {
            var openDropdown = dropdowns[d];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/** 
*mchooseAvatar1: when the user selects avatar 1,
* make all other avatars black and white
*/
function chooseAvatar1(pic) {
    document.getElementById('pic1').src = 'femaleavatar1.png'
    document.getElementById('pic2').src = 'femaleavatar2bw.png'
    document.getElementById('pic3').src = 'femaleavatar3bw.png'
    document.getElementById('pic4').src = 'femaleavatar4bw.png'
    document.getElementById('pic5').src = 'femaleavatar5bw.png'
    document.getElementById('pic6').src = 'maleavatar1bw.png'
    document.getElementById('pic7').src = 'maleavatar3bw.png'
    document.getElementById('pic8').src = 'maleavatar4bw.png'
    document.getElementById('pic9').src = 'maleavatar5bw.png'
}
/** 
*mchooseAvatar2: when the user selects avatar 2,
* make all othr avatars black and white
*/
function chooseAvatar2(pic) {
    document.getElementById('pic1').src = 'femaleavatar1bw.png'
    document.getElementById('pic2').src = 'femaleavatar2.png'
    document.getElementById('pic3').src = 'femaleavatar3bw.png'
    document.getElementById('pic4').src = 'femaleavatar4bw.png'
    document.getElementById('pic5').src = 'femaleavatar5bw.png'
    document.getElementById('pic6').src = 'maleavatar1bw.png'
    document.getElementById('pic7').src = 'maleavatar3bw.png'
    document.getElementById('pic8').src = 'maleavatar4bw.png'
    document.getElementById('pic9').src = 'maleavatar5bw.png'
}
/** 
*mchooseAvatar3: when the user selects avatar 3,
* make all other avatars black and white
*/
function chooseAvatar3(pic) {
    document.getElementById('pic1').src = 'femaleavatar1bw.png'
    document.getElementById('pic2').src = 'femaleavatar2bw.png'
    document.getElementById('pic3').src = 'femaleavatar3.png'
    document.getElementById('pic4').src = 'femaleavatar4bw.png'
    document.getElementById('pic5').src = 'femaleavatar5bw.png'
    document.getElementById('pic6').src = 'maleavatar1bw.png'
    document.getElementById('pic7').src = 'maleavatar3bw.png'
    document.getElementById('pic8').src = 'maleavatar4bw.png'
    document.getElementById('pic9').src = 'maleavatar5bw.png'
}
/** 
*mchooseAvatar4: when the user selects avatar 4,
* make all other avatars black and white
*/
function chooseAvatar4(pic) {
    document.getElementById('pic1').src = 'femaleavatar1bw.png'
    document.getElementById('pic2').src = 'femaleavatar2bw.png'
    document.getElementById('pic3').src = 'femaleavatar3bw.png'
    document.getElementById('pic4').src = 'femaleavatar4.png'
    document.getElementById('pic5').src = 'femaleavatar5bw.png'
    document.getElementById('pic6').src = 'maleavatar1bw.png'
    document.getElementById('pic7').src = 'maleavatar3bw.png'
    document.getElementById('pic8').src = 'maleavatar4bw.png'
    document.getElementById('pic9').src = 'maleavatar5bw.png'
}
/** 
*mchooseAvatar5: when the user selects avatar 5,
* make all other avatars black and white
*/
function chooseAvatar5(pic) {
    document.getElementById('pic1').src = 'femaleavatar1bw.png'
    document.getElementById('pic2').src = 'femaleavatar2bw.png'
    document.getElementById('pic3').src = 'femaleavatar3bw.png'
    document.getElementById('pic4').src = 'femaleavatar4bw.png'
    document.getElementById('pic5').src = 'femaleavatar5.png'
    document.getElementById('pic6').src = 'maleavatar1bw.png'
    document.getElementById('pic7').src = 'maleavatar3bw.png'
    document.getElementById('pic8').src = 'maleavatar4bw.png'
    document.getElementById('pic9').src = 'maleavatar5bw.png'
}
/** 
*mchooseAvatar6: when the user selects avatar 6,
* make all other avatars black and white
*/
function chooseAvatar6(pic) {
    document.getElementById('pic1').src = 'femaleavatar1bw.png'
    document.getElementById('pic2').src = 'femaleavatar2bw.png'
    document.getElementById('pic3').src = 'femaleavatar3bw.png'
    document.getElementById('pic4').src = 'femaleavatar4bw.png'
    document.getElementById('pic5').src = 'femaleavatar5bw.png'
    document.getElementById('pic6').src = 'maleavatar1.png'
    document.getElementById('pic7').src = 'maleavatar3bw.png'
    document.getElementById('pic8').src = 'maleavatar4bw.png'
    document.getElementById('pic9').src = 'maleavatar5bw.png'
}
/** 
*mchooseAvatar7: when the user selects avatar 7,
* make all other avatars black and white
*/
function chooseAvatar7(pic) {
    document.getElementById('pic1').src = 'femaleavatar1bw.png'
    document.getElementById('pic2').src = 'femaleavatar2bw.png'
    document.getElementById('pic3').src = 'femaleavatar3bw.png'
    document.getElementById('pic4').src = 'femaleavatar4bw.png'
    document.getElementById('pic5').src = 'femaleavatar5bw.png'
    document.getElementById('pic6').src = 'maleavatar1bw.png'
    document.getElementById('pic7').src = 'maleavatar3.png'
    document.getElementById('pic8').src = 'maleavatar4bw.png'
    document.getElementById('pic9').src = 'maleavatar5bw.png'
}

/** 
*mchooseAvatar8: when the user selects avatar 8,
* make all other avatars black and white
*/
function chooseAvatar8(pic) {
    document.getElementById('pic1').src = 'femaleavatar1bw.png'
    document.getElementById('pic2').src = 'femaleavatar2bw.png'
    document.getElementById('pic3').src = 'femaleavatar3bw.png'
    document.getElementById('pic4').src = 'femaleavatar4bw.png'
    document.getElementById('pic5').src = 'femaleavatar5bw.png'
    document.getElementById('pic6').src = 'maleavatar1bw.png'
    document.getElementById('pic7').src = 'maleavatar3bw.png'
    document.getElementById('pic8').src = 'maleavatar4.png'
    document.getElementById('pic9').src = 'maleavatar5bw.png'
}

/** 
*mchooseAvatar9: when the user selects avatar 9,
* make all other avatars black and white
*/
function chooseAvatar9(pic) {
    document.getElementById('pic1').src = 'femaleavatar1bw.png'
    document.getElementById('pic2').src = 'femaleavatar2bw.png'
    document.getElementById('pic3').src = 'femaleavatar3bw.png'
    document.getElementById('pic4').src = 'femaleavatar4bw.png'
    document.getElementById('pic5').src = 'femaleavatar5bw.png'
    document.getElementById('pic6').src = 'maleavatar1bw.png'
    document.getElementById('pic7').src = 'maleavatar3bw.png'
    document.getElementById('pic8').src = 'maleavatar4bw.png'
    document.getElementById('pic9').src = 'maleavatar5.png'
}

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0; // pos is position in array of questions, chA, chB, and chC are the choices
var questions = [  //where all our questions are
    ["What is the capital of Australia?", "Melbourne", "Sydney", "Canberra", "C"],
	["What is the primary language used in Australia?", "Aborigine", "Kangaroo", "English", "C"],
	["What percentage of GDP does Australia spend on the military?", "more than 4%", "between 2% and 4%", "less than 2%", "C"],
	["What is the per capital GDP in Australia?", "greater than $60,000", "between $40,000 and $60,000", "less than $40,000", "A"],
	["What is the population in Australia?", "about 20 million", "about 200 million", "about 2 million", "A"]
];

/** -(x){ function 
    *@return element document using the ID input x, used to put javascript variables into the actial HTML
    */
function _(x) {
    return document.getElementById(x);
}
/** renderQuestion function 
    *prints a question from the question bank saved in questions array
    *@return question
    */
function renderQuestion() {
    test = _("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        _("test_status").innerHTML = "Quiz Completed";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Australia Quiz Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];  //target the question
    chA = questions[pos][1];  //target first option
    chB = questions[pos][2]; //target second option
    chC = questions[pos][3]; //target first option
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
/** checkAnswer function 
    *checks for correct answer for each question and prints out correct output of the chosen answer is wrong
    *@return true or false
    */
function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice == questions[pos][4]) {
        correct++;
        document.getElementById("answer").innerHTML = "CORRECT!"
    }
    else {
        if (questions[pos][4] == 'A') {
            document.getElementById("answer").innerHTML = "Sorry, the the correct answer to '" + questions[pos][0] + "' was " + questions[pos][1] + "!"
            //window.alert(questions[pos][4])
        }
        if (questions[pos][4] == 'B') {
            document.getElementById("answer").innerHTML = "Sorry, the the correct answer to '" + questions[pos][0] + "' was " + questions[pos][2] + "!"
            //window.alert(questions[pos][4])
        }
        if (questions[pos][4] == 'C') {
            document.getElementById("answer").innerHTML = "Sorry, the the correct answer to '" + questions[pos][0] + "' was " + questions[pos][3] + "!"
            //window.alert(questions[pos][4])
        }
    }

    pos++;
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
