//створюємо кактуси
const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")
var buttonId=document.getElementById('x');
buttonId.addEventListener('click', function(){
    Sit ()
});

var buttonId=document.getElementById('y');
buttonId.addEventListener('click', function(){
    jump ()
});

document.addEventListener("keydown", function(event) {
    jump();
})

// Створимо текстовий напис для рахунку 
this.score = 0;
this.labelScore = this.add.text(20, 20, "0", { fontSize: 24, color: "green" });
this.Author = this.add.text(5, 5, "DIMA KRUTOI SOZDATEL IGR", { fontSize: 20, color: "green" });

document.addEventListener("Click", function(event) {
    Sit();
})
// створимо нову функцію jump
function jump () {
    if(dino.classList !="jump") {
      dino.classList.add("jump")  
    }
    setTimeout ( function() {
dino.classList.remove("jump")
    }, 300)
}

function Sit () {
    if (dino.classList != "Sit") {
        dino.classList.add("Sit")
    }
    setTimeout ( function() {
        dino.classList.remove("Sit")
    }, 300)
}

function Dead () {
    (dino.classList != "") 
    {
        dino.classList.add("")
    }
    setTimeout (function(){
        dino.classList.remove("")
    },300)
}
