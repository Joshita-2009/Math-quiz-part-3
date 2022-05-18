function button_login(){
          player1_name= document.getElementById("player1_name").value;
          player2_name= document.getElementById("player2_name").value;
          localStorage.setItem("player1_name", player1_name);
          localStorage.setItem("player2_name", player2_name);
          window.location="game_page.html";
}
function send(){
          number1= document.getElementById("number1").value;
          number2= document.getElementById("number2").value;
          actual_answer= parseInt(number1) * parseInt(number2);
}
question_number= "<h4> + number1 + "X" + number2 + </h4>"
input_box= "<br> Answer: <input type='text', id='chk_box'>"
chk_btn="<br><br> <button onclick= 'check()'></button"
row= question_number + input_box + chk_btn;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").innerHTML= "";
document.getElementById("number2").innerHTML= "";