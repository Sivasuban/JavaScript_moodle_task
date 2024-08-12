let pEl = document.getElementById("para");
let para1El = document.getElementById("para1");
let para2El = document.getElementById("para2");
let para3El = document.getElementById("para3");
let dateEl = document.getElementById("date");
let p1El = document.getElementById("gen");
let resultForm = document.getElementById("resultForm"); 

function change() {
    let nameEl = document.getElementById("name").value;
    pEl.textContent = nameEl;

    let EmailEl = document.getElementById("mail").value;
    para1El.textContent = EmailEl;

    let Number = document.getElementById("num").value;
    para2El.textContent = Number;

    let Add = document.getElementById("add").value;
    para3El.textContent = Add;

    let dEl = document.getElementById("date1").value;
    dateEl.textContent = dEl;

    let gen2El = document.getElementById("gene").value;
    p1El.textContent = gen2El;

   
    document.body.style.backgroundImage = "url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148907303.jpg?w=2000')";
    document.body.style.backgroundSize = "cover";
    pEl.style.color = "red";
    pEl.style.textShadow = "5px 5px 5px red";


    resultForm.style.display = "block";
}
