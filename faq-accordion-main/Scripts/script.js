document.onclick = function(event) {
    var target = event.target;
    console.log("Clicked element:", event.target);
    if (target.id === "p1") {
        toggleAnswer("q1");
    } else if (target.id === "p2") {
        toggleAnswer("q2");
    } else if (target.id === "p3") {
        toggleAnswer("q3");
    } else if (target.id === "p4") {
        toggleAnswer("q4");
    }
};

function toggleAnswer(question) {
    var container = document.getElementById(question);
    var answer = container.querySelector('p.answer');
    var image = container.querySelector('img');

    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        image.src = 'assets/images/icon-minus.svg';
    } else {
        answer.style.display = 'none';
        image.src = 'assets/images/icon-plus.svg';
    }
}


