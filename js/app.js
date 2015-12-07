$(document).ready(function() {

	/*load introduction, load quiz on Play game button click*/

	$('#quiz').hide()
	$('#intro').show()
	$('#outro').hide()

	
	$('#begin').one('click', function(){
		$('#quiz').fadeIn(1000);
		$(".mug-score-track").css("display", "none");
		$("#mug-meter-0").show();
		$('#intro').fadeOut(1000);

	});
	
	//quiz question and answers
	var questions = [{
		question: "Question 1: Which president was elected in 1932 because of his promise to end Prohibition?",
		choices: ["Herbert Hoover", "Franklin D. Roosevelt", "Calvin Coolidge", "Harry S. Truman"],
		qNum: 0,
		correct: 1,
	},
	{
		question: "Question 2: What is the official alcohol of the United States of America?",
		choices: ["Gin", "Vodka","Tequila", "Bourbon"],
		qNum: 1,
		correct: 3,
	},
	{
		question: "Question 3: In ancient Egypt, how many containers of beer was the minimum wage for a day's labor?",
		choices: ["1", "2", "3", "4"],
		qNum : 2,
		correct : 1,
	},
	{
		question: "Question 4: What is the largest brewery in the world?",
		choices: ["SABMiller", "Carlsberg Group", "Heineken International", "Anheuser-Busch InBev"],
		qNum : 3,
		correct : 3,
	},
	{
		question: "Question 5: What country has the most individual beer brands?",
		choices: ["Belgium", "Germany", "United States of America", "Ireland"],
		qNum : 4,
		correct : 0,
	}]


    //variables
    var numberCorrect = 0;
    var currentQuestion = 0;

    $("#question-box").on("click", "#submit-answer", function() {
    	updateMug();
    	currentQuestion++;
    	nextQuestion();
    });

    /* Hitting play again button after quiz is over*/
    $("#outro").on("click", "#retry", function() {
    	numberCorrect = 0;
    	currentQuestion = 0;
    	$(".mug-score-track").css("display", "none");
    	$("#mug-meter-0").css("display", "inline");
    	var newQuestion = '<p id="question">'+questions[currentQuestion].question+'</p><br><div id="answers"><input id="answer" type="radio" name="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input id="answer" type="radio" name="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input id="answer" type="radio" name="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input id="answer" type="radio" name="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div class="center"><button id="submit-answer">Submit Answer</button></div>';
    	$("#question").html(newQuestion);
    	$("#outro").hide();
    	$("#quiz").show();
    });


    function updateMug() {
    	var userAnswer = $("input[type='radio']:checked").val();

    	if (userAnswer == questions[currentQuestion].correct) {
    		numberCorrect++;    
    	}
    	if (numberCorrect == 0) {
    		$(".mug-score-track").css("display", "none");
    		$("#mug-meter-0").show();
    	}
    	if (numberCorrect == 1) {
    		$(".mug-score-track").css("display", "none");
    		$("#mug-meter-1").show();
    	}
    	else if (numberCorrect == 2) {
    		$(".mug-score-track").hide();
    		$("#mug-meter-2").show();
    	}
    	else if (numberCorrect == 3) {
    		$(".mug-score-track").hide();
    		$("#mug-meter-3").show();
    	}
    	else if (numberCorrect == 4) {
    		$(".mug-score-track").hide();
    		$("#mug-meter-4").show();
    	}
    	else if (numberCorrect == 5) {
    		$(".mug-score-track").hide();
    		$("#mug-meter-5").show();
    	}
    }

    function nextQuestion() {
    	if (currentQuestion < 5) {
    		$("#question").remove();
    		$("#answers input").remove();
    		$("#answers span").remove();
    		var newQuestion = '<p id="question">'+questions[currentQuestion].question+'</p><br><div id="answers"><input type="radio" name="option" id="answer" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" id="answer" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" id="answer" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" id="answer" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div class="center"><button id="submit-answer">Submit Answer</button></div><div class="beer-meter"><img class="mug-score-track">';
    		$("#question-box").html(newQuestion);
    	}
    	else {
    		$("#quiz").hide();
    		$("#outro").show();
    		if (numberCorrect == 1) {
    			var finalScore = '<span id="final">Cheers, mate!  You finished the quiz!  You answered '+numberCorrect+' question correctly.'
    			$(".end h2").html(finalScore);
    		}
    		else {
    			var finalScore = '<span id="final">Cheers, mate!  You finished the quiz!  You answered '+numberCorrect+' questions correctly.'
    			$(".end h2").html(finalScore);
    		}
    	}
    }
});