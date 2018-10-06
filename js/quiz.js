var ques_num = -1;
var selected = 0;

var questions = [
	{
		question: "What is the world's longest river?",
		options: ["Amazon", "Flipkart", "Ganges", "Yamuna"],
		answer: 1
	},
	{
		question: "Richest person in the world?",
		options: ["Shubhraj Prasad Singh", "Jeff Bezos", "Bill Gates", "Mukesh Ambani"],
		answer: 2
	},
	{
		question: "World's most expensive brand?",
		options: ["Facebook", "Google", "Amazon", "Apple"],
		answer: 4
	},
	{
		question: "Xiaomi's latest smartphone?",
		options: ["Poco F1", "Redmi Note 5 Pro", "Mi A2", "Mi 8"],
		answer: 1
	},
	{
		question: "Who is the developer of this Game?",
		options: ["Shubhraj", "Sayan", "Rohit", "Mohit"],
		answer: 1
	}];

$(document).ready(function(){
	nextQuestion();
    $("#option-1").click(function(){
    	selected = 1;
        checkOption("option-1");
    });
    $("#option-2").click(function(){
    	selected = 2;
        checkOption("option-2");
    });
   	$("#option-3").click(function(){
   		selected = 3;
        checkOption("option-3");
    });
    $("#option-4").click(function(){
    	selected = 4;
        checkOption("option-4");
    });
    $("#next-btn").hide();
    $("#next-btn").click(function(){
    	nextQuestion();
    });
});

function nextQuestion(){
	ques_num++;
	$("#question-text").html(questions[ques_num].question);
	for(var i=0; i<4; i++)
	{
		$("#option-"+(i+1)).html(questions[ques_num].options[i]);
		$("#option-"+(i+1)).css("background-color", "#0b4c73");
	}
	$("#next-btn").hide();
	selected = 0;
}

function checkOption(option)
{
	if(selected == questions[ques_num].answer)
	{
		$("#"+option).html("Correct Answer");	
    	$("#"+option).css("background-color","green");
    	if(ques_num != 4){
    		$("#next-btn").show();
    	}
	}
	else
	{
		$("#"+option).html("Wrong Answer!");	
    	$("#"+option).css("background-color","red");
    	$("#next-btn").hide();
	}
}
