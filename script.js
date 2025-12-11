
let random_num = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
let gameOver = false;
let timerSet = false;
let gameStart = false;
let timerId = 0;
function Reset() {
    attempt = 0;
    random_num = Math.floor(Math.random() * 100) + 1;
    console.log(random_num);
    document.getElementById("result").innerText = "";
    document.getElementById("attempt").innerText = "";
    document.getElementById("num").value = "";
    document.getElementById("timer").innerText = 30;
    document.getElementById("timer").style.color = "black";
    document.getElementById("result").style.color = "black";
    document.getElementById("start").style.display = "inline-block";
    document.getElementById("reset").style.display = "none";
    document.getElementById("num").disabled = false;
    document.querySelector("button[onclick='Check()']").disabled = false;
    gameOver = false;
    timerSet = false;
    gameStart = false;
    clearInterval(timerId);
}
function Check() {

    if (gameOver) return;
    if (!gameStart) {
        alert("start the game");
        document.getElementById("num").value = "";
        return;
    }
    attempt += 1;
    let raw = document.getElementById("num").value;

    if (raw === "") {
        document.getElementById("result").innerText = "Please enter a number!";
        return;
    }

    let user_input = Number(raw);
    if (user_input < 1 || user_input > 100) {
        document.getElementById("result").innerText = "Enter a number between 1 and 100!";
        return;
    }

    if (user_input == random_num) {
        document.getElementById("result").innerText = "Congratulations! You found the number. It is " + random_num;
        document.getElementById("attempt").innerText = "Total number of attempts: " + attempt;
        document.getElementById("result").style.color = "green";
        document.getElementById("timer").style.color = "black";
        document.getElementById("reset").style.display = "inline-block";
        document.querySelector("button[onclick='Check()']").disabled = true;
        document.getElementById("num").value = "";
        document.getElementById("num").disabled = true;
        gameOver = true;
        clearInterval(timerId);

    }
    else if (user_input < random_num) {
        document.getElementById("result").innerText = "Too low! Try a bigger number";
        document.getElementById("result").style.color = "red";
    }
    else {
        document.getElementById("result").innerText = "Too high! Try a smaller number";
        document.getElementById("result").style.color = "red";
    }
    document.getElementById("num").value = "";

}
function Start() {
    gameStart = true;
    document.getElementById("start").style.display = "none";
    if (timerSet) return;
    timerId = setInterval(function () {
        let count = Number(document.getElementById("timer").innerText);
        count -= 1;
        document.getElementById("timer").innerText = count;
        if (count == 0) {
            clearInterval(timerId);
            gameOver = true;
            document.getElementById("result").style.color = "red";
            document.getElementById("result").innerText = "Times up You Lost";
            document.getElementById("reset").style.display = "inline-block";
        }
        if (count <= 5) {
            document.getElementById("timer").style.color = "red";
        }
    }, 1000);
    timerSet = true;

}