question_turn = "player_1";
answer_turn = "player_2";


function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    //localStorage.setItem("player1_score", 0);

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game.html";
}

    player1_name = localStorage.getItem("player1_name");
    player2_name = localStorage.getItem("player2_name");
   // player1_score = localstorage.getItem("player1_score");

    player1_score = 0;
    player2_score = 0;
    console.log(player1_score);

    document.getElementById("player1_name").innerHTML = player1_name + ": ";
    document.getElementById("player2_name").innerHTML = player2_name + ": ";
    //document.getElementById("player1_score").innerHTML = player1_score + ": ";


    console.log("Question Turn - " + player1_name);
    console.log("Answer Turn - " + player2_name);
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;


    function update_score(){
        document.getElementById("player1_score").innerHTML = player1_score ;
        document.getElementById("player2_score").innerHTML = player2_score ;
    }


    document.getElementById("player1_score").innerHTML = player1_score ;
    document.getElementById("player2_score").innerHTML = player2_score ;

    

function send(){
    document.getElementById("message").innerHTML = "";
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actualAnswer = parseInt(number1) * parseInt(number2);
    console.log(actualAnswer);

    question_number = "<br><h4>" + number1 + " X " + number2 + "<h4>";
    input_box = "<br><span class = 'answer_text'>Answer:</span> <input type = 'text' id = 'input_check_box'>";
    check_button = "<button class = 'btn btn-info check_button' onclick = 'check()'>Check</button>";
    console.log("Before check");
    row = question_number + input_box + "<br> <br>" + check_button;
    console.log("after check");

    document.getElementById("output").innerHTML = row;

    number1 = "";
    number2 = "";

    document.getElementById("output").style.display = "block";
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

function check(){
    get_answer = parseInt(document.getElementById("input_check_box").value);
    console.log(get_answer);
    console.log('I was outside');
    document.getElementById("message").innerHTML = "";


    if(get_answer==actualAnswer){

        document.getElementById("output").style.display = "none";

        if (answer_turn == "player_1"){
            question_turn = "player_1";
            answer_turn = "player_2";
            player1_score+=1;
            update_score();
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
            document.getElementById("message").style.color = "green";
            document.getElementById("message").innerHTML = "You got it right! You get a point! It's the next person's turn!";
        }
        else{
            question_turn = "player_2";
            answer_turn = "player_1";
            player2_score+=1;
            update_score();
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
            document.getElementById("message").style.color = "green";
            document.getElementById("message").innerHTML = "You got it right! You get a point! It's the next person's turn!";
        }
    }
    else{
        document.getElementById("output").style.display = "none";
        if (answer_turn == "player_1"){
            question_turn = "player_1";
            answer_turn = "player_2";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
            document.getElementById("message").style.color = "red";
            document.getElementById("message").innerHTML = "You got it wrong, you don't get a point! It's the next person's turn!";
            // wait(5000);
            // document.getElementById("message").innerHTML = "";
           
        }
        else{
            question_turn = "player_2";
            answer_turn = "player_1";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
            document.getElementById("message").style.color = "red";
            document.getElementById("message").innerHTML = "You got it wrong, you don't get a point! It's the next person's turn!";
            // wait(5000);
            // document.getElementById("message").innerHTML = "";
            
        }
    }


    // if(question_turn=="player_1"){
    //     question_turn="player_2";
    //     answer_turn = "player_1";
    //     document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    //     document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    // }
    // else{
    //     question_turn="player_1";
    //     answer_turn == "player_2";
    //     document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    //     document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    // }
}
