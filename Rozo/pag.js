// Values: rock, paper, scissors
const piedra = 1;
const papepapel = 2;
const tijera = 3;

// Selected Values
let userSelect = 0;
let cpuSelect = 0;

// Points for player
let userPoint = 0;
let cpuPoint = 0;


// Function: User option
btnRock.addEventListener('click', ()=> {
  imgSelected.src = "style/piedra.png";
  yoSelect = 1;
  turnCpu();
  calculatePoints();
  finalScore();   
});

btnPaper.addEventListener('click', ()=>{
  imgSelected.src = "style/papel.jpg";
  yoSelect = 2;
  turnCpu();
  calculatePoints(); 
  finalScore();  
}) 

btnScissors.addEventListener('click', ()=>{
  imgSelected.src = "style/tijera.png";
  yoSelect = 3;
  turnCpu();
  calculatePoints();
  finalScore();   
})

btnReload.addEventListener('click', ()=>{
  yoPoint = 0;
  computadoraPoint = 0;
  yoPoints.textContent = userPoint;
  computadoraPoints.textContent = cpuPoint;
  jueguito.textContent = "jueguito";
});

// Function: cpu Option
function turnCpu() {
  let turn = randomNum(1,3);
  if (turn === 1) {
    computadoraSelected.src = "style/piedra.png";
    computadoraSelect = 1;
  } else if (turn === 2) {
    computadoraSelected.src = "style/papel.jpg";
    computadoraSelect = 2;
  } else {
    computadoraSelected.src = "style/tijera.png";  
    computadoraSelect = 3;
  } 
}

// Function: Who is Winner?
function calculatePoints() {
  if (yoSelect === computadoraSelect) {
    jueguito.textContent = "Players tie!";    
  } else if( (yoSelect === 1 && computadoraSelect === 3) || (yoSelect === 2 && computadoraSelect === 1) || (yoSelect === 3 && computadoraSelect === 2)) {
    jueguito.textContent = "Yo gane!";    
    yoPoint++;
    yoPoints.textContent = userPoint;
  } else {
    jueguito.textContent = "Computadora Gana";    
    cpuPoint++;
    cpuPoints.textContent = cpuPoint;
  } 
}

function finalScore() {
 if (userPoint === 3) {
  Swal.fire('Yo Gane!');  
  return;
} else if(cpuPoint === 3) {
   Swal.fire('Computadora Gano!')   
   return;
 }
}