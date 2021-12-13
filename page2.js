question_number1=localStorage.getItem("question_number1");
question_number2=localStorage.getItem("question_number2");

player1_score=0;
player2_score=0;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;


function send(){
    get_word=document.getElementById("word").value;

    question_number1="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button";
    row=player_question+input_box+check_button;
    document.getElementById("output").innerHTML=row1;
    document.getElementById("word").value="";








}

