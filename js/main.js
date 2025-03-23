let Btn12 = document.getElementById("12Btn");
let Btn18 = document.getElementById("18Btn");
let Btn24 = document.getElementById("24Btn");
let buttons = Array.from(document.querySelectorAll(".buttons"));
let lengthBtns = document.getElementById("buttons");

let ownBtn = document.getElementById("ownBtn");
let generateBtn = document.getElementById("generateBtn");
let lengthOwn = document.getElementById("pwdInput");

let len = null;
let pwd = null;

// BUTTONS 12, 18, 24
buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "12":
                len = 12;
                break;
            case "18":
                len = 18;
                break;
            case "24":
                len = 24;
                break;     
        }
    });
});

// BUTTON TO TURN ON OWN LENTGH OF PASSWORD
ownBtn.addEventListener("click", () => {
    if (lengthBtns.style.display === "flex"){
        lengthBtns.style.display = "none";
        lengthOwn.style.display = "flex";
    } else {
        lengthBtns.style.display = "flex";
        lengthOwn.style.display = "none"; 
    }
});


// BUTTON TO GENERADE PASSWORD
generateBtn.addEventListener("click", () => {
    let resultPwd = ascii(len);
    if (lengthOwn.style.display === "flex") {
        len = lengthOwn.value;
    } else if (len === null) {
        result1.innerHTML = "ERROR! THE LENGTH OF PASSWORD HASN'T CHOSEN"
    } else {
        let content = document.getElementById("content");

        // CREATING THE RESULT WINDOW
        let res = document.createElement("div");
        res.id = "resultWin";
        res.className = "resultWin";
        content.appendChild(res);

        // CREATING TEXT IN WINDOW
        let resText1 = document.createElement("p");
        resText1.textContent = "Your password:";
        res.appendChild(resText1);

        // CREATING RESULT TEXT IN WINDOW
        let resText2 = document.createElement("p");
        resText2.textContent = resultPwd;
        res.appendChild(resText2);
    }
});

// MAIN GENERATION FUNCTION
function ascii(num) {
    let password = [];
    let text = "";
    for(let i = 0 ; i < num ; i++) {
        let random = Math.floor((Math.random()*(4-0)) + 0);
        switch (random) {
            case 0:
                let big = Math.floor((Math.random()*(90-65)) + 65);
                password.push(big);
                break;
            case 1:
                let small = Math.floor((Math.random()*(122-97)) + 97);
                password.push(small);
                break;
            case 2:
                let numbers = Math.floor((Math.random()*(57-48)) + 48);
                password.push(numbers);
                break;
            case 3:
                let specific = Math.floor((Math.random()*(38-33)) + 33);
                password.push(specific);
                break;
        }
        console.log(random);
    }
    for(let i = 0; i < password.length; i++) {
        text += String.fromCharCode(password[i]);
    }
    console.log(password);
    console.log(text);
    return text;
}
