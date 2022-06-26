player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

function send() {
    get_number1 = document.getElementById("Number1").value;
    console.log("Number1 = " + get_number1);
    get_number2 = document.getElementById("Number2").value;
    console.log("Number2 = " + get_number2);


    question_number = "<h4 id='number_display'> Q."+get_number1+"x"+get_number2+"</h4>"
    console.log(question_number);
    input_box = "<br>Answer : <input type='text' id='input_check"
    check_button = "<br><br><button class = 'btn btn-info' onclick= check()>check</button>";

}

function check() {
   get_answer = document.getElementById("input_checkbox_box").value;
   answer = get_answer.toLowerCase();
   console.log("answer in lower case = " + answer);
   if(answer == word)
   {
       if(answer_turn == "player1")
       {
           player1_score = player1_score+1;
           document.getElementById("player1_score").innerHTML = player1_score;
       }
       else
       {
        player2_score = player2_score+1;
        document.getElementById("player2_score").innerHTML = player2_score;
       }
   }
   if (question_turn == "player1")
   {
       question_turn = "player2"
       document.getElementById("player_question").innerHTML="Question Turn - " + player2_name;
   }
   else
   {
    question_turn = "player1"
    document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
   }
   if(answer_turn == "player1")
   {
       answer_turn = "player2"
       document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
   }
   else
   {
       answer_turn="player1"
       document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
   }

   document.getElementById("output").innerHTML = "";
}