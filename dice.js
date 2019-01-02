//DOM IS READY
$(function(){

    var generateRandom = function(maxNum){
        //get a value between 0 up to but not including 1
        var random = Math.random(); 
        random = Math.floor(maxNum * random);
        random += 1; //1 up to and including maxNum
        return random;
    };

    var changePlayers = function(){
        var currPlayerName = $("#current").text();
        var player1Name = $("#player1").val();
        var player2Name = $("#player2").val();

        //swap from player 1 to player 2
        if(currPlayerName == player1Name){
            $("#current").text(player2Name);
        }
        else{
            $("#current").text(player1Name);
        }
    };


    //when new game button is clicked
    $("#new_game").click(function(){
        //reset user scores
        $("#score1").val("0");
        $("#score2").val("0");

        var player1 = $("#player1").val();
        var player2 = $("#player2").val();
        if(player1 == "" || player2 == ""){
            alert("You must enter a name for both players");
        }
        else{ //all is valid, start game
            $("#turn").addClass("open");
            $("#total").val(0);
            //lock in player names
            $("#player1").attr("disabled", "disabled");
            $("#player2").attr("disabled", "disabled");
            changePlayers();
        }
    });


    $("#roll").click(function(){
        var currTotal = parseInt($("#total").val());
        //get die roll 1 - 6 (inclusive)
        var rollValue = generateRandom(6);
        if(rollValue == 1){
            currTotal = 0;
            changePlayers();
        }
        else{
            currTotal += rollValue;
        }

        $("#die").val(rollValue);
        $("#total").val(currTotal);
    });


    $("#hold").click(function(){
        var turnTotal = parseInt($("#total").val());
        var currPlayerName = $("#current").text();
        var score = 0;
        if(currPlayerName == $("#player1").val()){
            score = parseInt($("#score1").val());
            $("#score1").val(score + turnTotal);
        }
        else{
            score = parseInt($("#score2").val());
            $("#score2").val(score + turnTotal);
        }

        $("#total").val(0);
        changePlayers();
        
    });

});