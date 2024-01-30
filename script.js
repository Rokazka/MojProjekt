const arrowOne = document.querySelector('.arrow-one');
const arrowTwo = document.querySelector('.arrow-two');
const boxes = document.querySelector('.boxes');
const box = document.querySelector('.box');
const boxOne = document.querySelector('.box-one');
const p = document.querySelectorAll('p');
const h = document.querySelectorAll('h1');
const text = document.querySelector('.text');
const boxTwo = document.querySelector('.box-two');
const boxEs = document.querySelectorAll('.box');
const boxThree = document.querySelector('.box-three');
const boxFour = document.querySelector('.box-four');
const boxFive = document.querySelector('.box-five');
const boxSix = document.querySelector('.box-six');
const mobileNumbers = document.querySelector('.mobile');
const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttonTwo");
const buttonThree = document.querySelector(".buttonThree");
const buttonFour = document.querySelector(".buttonFour");
const buttonFive = document.querySelector(".buttonFive");
const buttonSix = document.querySelector(".buttonSix");

function clientWidth() {
    // Get the dimensions of the viewport
    let okno = 700;
    let width = window.innerWidth;

    if (width <= okno) {
        text.classList.add('text-block');
        boxOne.classList.add('move');
        boxTwo.classList.add('displayNone');
        boxThree.classList.add('displayNone');
        boxFour.classList.add('displayNone');
        boxFive.classList.add('displayNone');
        boxSix.classList.add('displayNone');
    }
    // mobileNumbers.classList.toggle("mobileDisplay");
    console.log(width);
}

function ProjectsOpen() {
    boxes.classList.add('move');
    boxOne.classList.add('boxne');
    arrowTwo.classList.add('text-p');
    arrowOne.classList.add('displayNone');

    clientWidth();
    mobileNumbers.classList.add('mobileDisplay');
    buttonTwo.classList.remove('btnOne');
    buttonThree.classList.remove('btnOne');
    buttonFour.classList.remove('btnOne');
    buttonFive.classList.remove('btnOne');
    buttonSix.classList.remove('btnOne');

    buttonOne.classList.add('btnOne');

}

function Soll() {
    p.forEach((p) => {
        p.classList.remove('displayNone');
        p.classList.add('text-p');
        p.style.fontSize = 25 + 'px';
    });

    boxOne.classList.remove('boxne');
}

function ProjectsClose() {
    boxes.classList.remove('move');
    arrowTwo.classList.toggle('text-p');
    arrowOne.classList.toggle('displayNone');

    boxOne.classList.remove('boxne');


    p.forEach((p) => {
        p.classList.add('displayNone');
        p.classList.remove('text-p');
        p.style.fontSize = 0 + 'px';
    });
    text.classList.remove('text-block');
    boxOne.classList.remove('boxMovment');
    boxOne.classList.remove('displayNone');
    boxTwo.classList.remove('displayNone');
    boxTwo.classList.remove('boxMovment');
    boxThree.classList.remove('displayNone');
    boxThree.classList.remove('boxMovment');
    boxFour.classList.remove('displayNone');
    boxFour.classList.remove('boxMovment');
    boxFive.classList.remove('displayNone');
    boxFive.classList.remove('boxMovment');
    boxSix.classList.remove('displayNone');
    boxSix.classList.remove('boxMovment');

    mobileNumbers.classList.remove('mobileDisplay');
    boxOne.classList.remove('boxne');
    boxOne.classList.remove('move');
}

// function powieksz() {
//     // h.style.fontSize = 0 + "px";

//     boxEs.forEach(box => {
//         box.classList.toggle('boxne');
//         console.log(box)

//     });
//     box.classList.toggle('boxne');
// }



function displayProjekt() {
    boxOne.classList.toggle('displayNone');
    boxTwo.classList.add('displayNone');
    boxThree.classList.add('displayNone');
    boxFour.classList.add('displayNone');
    boxFive.classList.add('displayNone');
    boxSix.classList.add('displayNone');
    boxOne.classList.add("boxMovment");
    buttonOne.classList.add('btnOne');
    buttonTwo.classList.remove('btnOne');
    buttonThree.classList.remove('btnOne');
    buttonFour.classList.remove('btnOne');
    buttonFive.classList.remove('btnOne');
    buttonSix.classList.remove('btnOne');

}

function displayProjektTwo() {
    boxTwo.classList.remove('displayNone');
    boxOne.classList.add('displayNone');
    boxThree.classList.add('displayNone');
    boxFour.classList.add('displayNone');
    boxFive.classList.add('displayNone');
    boxSix.classList.add('displayNone');

    buttonOne.classList.remove('btnOne');
    boxTwo.classList.add("boxMovment");

    buttonThree.classList.remove('btnOne');
    buttonFour.classList.remove('btnOne');
    buttonFive.classList.remove('btnOne');
    buttonSix.classList.remove('btnOne');
    buttonTwo.classList.add('btnOne');

}

function displayProjektThree() {
    boxThree.classList.remove('displayNone');
    boxOne.classList.add('displayNone');
    boxTwo.classList.add('displayNone');
    boxFour.classList.add('displayNone');
    boxFive.classList.add('displayNone');
    boxSix.classList.add('displayNone');

    boxThree.classList.add("boxMovment");
    buttonOne.classList.remove('btnOne');
    buttonTwo.classList.remove('btnOne');
    buttonFour.classList.remove('btnOne');
    buttonFive.classList.remove('btnOne');
    buttonSix.classList.remove('btnOne');
    buttonThree.classList.add('btnOne');

}

function displayProjektFour() {
    boxFour.classList.remove('displayNone');
    boxOne.classList.add('displayNone');
    boxTwo.classList.add('displayNone');
    boxThree.classList.add('displayNone');
    boxFive.classList.add('displayNone');
    boxSix.classList.add('displayNone');

    boxFour.classList.add("boxMovment");
    buttonOne.classList.remove('btnOne');
    buttonTwo.classList.remove('btnOne');
    buttonThree.classList.remove('btnOne');
    buttonFive.classList.remove('btnOne');
    buttonSix.classList.remove('btnOne');
    buttonFour.classList.add('btnOne');

}

function displayProjektFive() {
    boxFive.classList.remove('displayNone');
    boxOne.classList.add('displayNone');
    boxTwo.classList.add('displayNone');
    boxThree.classList.add('displayNone');
    boxFour.classList.add('displayNone');
    boxSix.classList.add('displayNone');

    boxFive.classList.add("boxMovment");
    buttonOne.classList.remove('btnOne');
    buttonTwo.classList.remove('btnOne');
    buttonThree.classList.remove('btnOne');
    buttonFour.classList.remove('btnOne');
    buttonSix.classList.remove('btnOne');
    buttonFive.classList.add('btnOne');

}

function displayProjektSix() {
    boxSix.classList.remove('displayNone');
    boxOne.classList.add('displayNone');
    boxTwo.classList.add('displayNone');
    boxThree.classList.add('displayNone');
    boxFour.classList.add('displayNone');
    boxFive.classList.add('displayNone');

    boxSix.classList.add("boxMovment");
    buttonOne.classList.remove('btnOne');
    buttonTwo.classList.remove('btnOne');
    buttonThree.classList.remove('btnOne');
    buttonFour.classList.remove('btnOne');
    buttonFive.classList.remove('btnOne');
    buttonSix.classList.add('btnOne');

}

function BoxMoving() {
    boxOne.classList.remove('boxne');

}


//funkcjonalnosc mobilan
buttonOne.addEventListener('click', displayProjekt);
buttonTwo.addEventListener('click', displayProjektTwo);
buttonThree.addEventListener('click', displayProjektThree);
buttonFour.addEventListener('click', displayProjektFour);
buttonFive.addEventListener('click', displayProjektFive);
buttonSix.addEventListener('click', displayProjektSix);
// Laptop View
arrowOne.addEventListener('click', Soll);
arrowOne.addEventListener('click', ProjectsOpen);
// arrowTwo.addEventListener('click', ProjectsOpen);
arrowTwo.addEventListener('click', ProjectsClose);
boxTwo.addEventListener('mouseover', BoxMoving);