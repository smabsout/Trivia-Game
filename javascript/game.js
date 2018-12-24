$(document).ready(function () {
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var sec = 20;
	var queuePos = 0;
	var x;

	var questions = [
		q1 = {
			q: "What is the Capital of France",
			a1: "Rome",
			a2: "New Delhi",
			a3: "Nantes",
			a4: "Paris",
			correctAnswer: "Paris"
		},
		q2 = {
			q: "Entomology is the science that studies",
			a1: "Behavior of humans",
			a2: "Insects",
			a3: "The history of scientific terms",
			a4: "Formation of rocks",
			correctAnswer: "Insects"
		},
		q3 = {
			q: "Garampani sanctuary is located at",
			a1: "Jungarah, Gujarat",
			a2: "Diphu, Assam",
			a3: "Kohima, Nagaland",
			a4: "Gantok, Sikkim",
			correctAnswer: "Diphu, Assam"
		},
		q4 = {
			q: "Hitler party which came into power in 1933 is known as",
			a1: "Nazi Party",
			a2: "Labour Party",
			a3: "Democratic Party",
			a4: "Republican Party",
			correctAnswer: "Nazi Party"
		},
		q5 = {
			q: "The ozone layer restricts",
			a1: "Visibile Light",
			a2: "Infrared Radiation",
			a3: "X-rays and Gamma-rays",
			a4: "Ultraviolet Radiation",
			correctAnswer: "Ultraviolet Radiation"
		},
		q6 = {
			q: "Elucid was.. ",
			a1: "A Greek Mathematician",
			a2: "Contributor to the use of geometry",
			a3: "Propounded the geometrical theorems",
			a4: "All of the Above",
			correctAnswer: "All of the Above"
		},


	
	];

	function displayQ() {

		
		$("#question").html(questions[queuePos].q);
		$("#a1").html("<button>" + questions[queuePos].a1 + "</button>");
		$("#a2").html("<button>" + questions[queuePos].a2 + "</button>");
		$("#a3").html("<button>" + questions[queuePos].a3 + "</button>");
		$("#a4").html("<button>" + questions[queuePos].a4 + "</button>");

	}

	function displayAnswer() {
		
		if (sec === -1) {
			$("#question").html("You ran out of time!");
			$("#a1").html("The correct answer is:");
			$("#a2").html(questions[queuePos].correctAnswer);
			$("#a3").empty();
			$("#a4").empty();
			unanswered++;
		}
		else if ($(this).text() === questions[queuePos].correctAnswer) {
			$("#question").html("Correct!");
			$("#a1").html("The answer is:");
			$("#a2").html(questions[queuePos].correctAnswer);
			$("#a3").empty();
			$("#a4").empty();
			correct++;
		}
		else if ($(this).text() != questions[queuePos].correctAnswer) {
			$("#question").html("Incorrect!");
			$("#a1").html("The correct answer is:");
			$("#a2").html(questions[queuePos].correctAnswer);
			$("#a3").empty();
			$("#a4").empty();
			incorrect++;
		}

		queuePos++;
		clearInterval(x);
		sec = 19;
		x = setTimeout(displayQ, 3000);
		x = setTimeout(gameTimer, 3000);

	}

	function displayResults() {
		$("#question").empty();
		$("#a1").html("Correct Answers: " + correct);
		$("#a2").html("Incorrect Answers: " + incorrect);
		$("#a3").html("Unanswered: " + unanswered);
		$("#a4").empty();
		$("#time-left").empty();		
	}

	function gameTimer() {
		if (queuePos === questions.length) {
			displayResults();
			return;
		}
		$("#time-left").html("<h2>Time remaining: 20</h2>");
		x = setInterval(function () {
			$("#time-left").html("<h2>Time remaining: " + sec + "</h2>");
			sec--;
			if (sec === -1) {
				clearInterval(x);
				displayAnswer();
				sec = 19;
			}
		}, 1000);

	}

	$("#start").on("click", function () {
		gameTimer();
		displayQ();
	});

	$("#a1").on("click", displayAnswer);
	$("#a2").on("click", displayAnswer);
	$("#a3").on("click", displayAnswer);
	$("#a4").on("click", displayAnswer);
});