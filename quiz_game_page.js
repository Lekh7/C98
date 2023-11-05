function send() {
    number1 = document.getElementById("number1").value;
    number1 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number + "X"+ number2 +"</h4>";
    input_box = "<br> Answer : <input type='text'id='input_cheak_box'>";
    cheak_button = "<br><br><button class'btn btn-info' onclick ='cheak()'>Cheak </button>";
    row = question_number + input_box + cheak_button ;
    document.getElementById("Output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}