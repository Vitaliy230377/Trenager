//Логика тренажера
//Запреты на одкрытие инструментов розработчика
document.onkeydown = function (e) {
    if (event.keyCode === 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
        return false;
    }
}
// Конец запретов на одкрытие инструментов розработчика
//Приветствие тренажера
let logBtn = document.querySelector('.logBtn');
let helloBlock = document.querySelector('.helloBlock');
let taskBlock = document.querySelector('.taskBlock');
logBtn.addEventListener('click', () => {
    helloBlock.classList.remove("absolute");
    helloBlock.style.display = "none";
    taskBlock.classList.remove("hidden");
})
//Конец приветствия (Вывод условия задачи)
let counter = 0;// Переменная счетчик для счета блоков с вопросами
let startBtn = document.querySelector(".taskBlock__btn");//кнопка для перехода на первый вопрос
let helpTaskBtn = document.querySelector(".helpTask");
// console.log(helpTaskBtn);
//Функция которая выводит первый вопрос
startBtn.addEventListener('click', () => {
    taskBlock.classList.remove("absolute");
    taskBlock.style.display = "none";
    formArr[counter].classList.remove("passiveBlock");
    formArr[counter].classList.add("activeBlock");
    startBtn.style.display = "none";
    helpTaskBtn.classList.remove("hidden");
    helpTaskBtn.classList.add("visible");
})
let taskHero = document.querySelector(".taskHero");

//Функция показывает условие задачи при необходимости ее посмотреть
function showTask() {
    taskHero.classList.remove("hidden");
    taskHero.classList.add("visible");
    helpTaskBtn.classList.toggle("hidden");
    helpTaskBtn.classList.toggle("visible");
}

helpTaskBtn.addEventListener("click", showTask);
let continueWork = document.querySelector(".continueWork");

function removeHelpBlock() {
    taskHero.classList.toggle("hidden");
    taskHero.classList.toggle("visible");
    helpTaskBtn.classList.toggle("hidden");
    helpTaskBtn.classList.toggle("visible");
}

continueWork.addEventListener("click", removeHelpBlock);
//Начало роботы с формами
let form = document.querySelectorAll('.questionForm');
let formArr = Array.prototype.slice.call(form);//перевод с NodeList в Array
// console.log("FORM ARR LENGTH:"+formArr.length);
let radio = formArr[counter].querySelectorAll('input[type=radio]');
let radioArr = Array.prototype.slice.call(radio);//перевод с NodeList в Array

let label = formArr[counter].querySelectorAll("label");
let labelArr = Array.prototype.slice.call(label);

// Кнопки к всем вопросам
let questionBtn1 = document.getElementById("question1");
let questionBtn2 = document.getElementById("question2");
let questionBtn3 = document.getElementById("question3");
let questionBtn4 = document.getElementById("question4");
let questionBtn5 = document.getElementById("question5");
let questionBtn6 = document.getElementById("question6");
let questionBtn7 = document.getElementById("question7");
let questionBtn8 = document.getElementById("question8");
let questionBtn9 = document.getElementById("question9");
let questionBtn10 = document.getElementById("question10");
let questionBtn11 = document.getElementById("question11");
let questionBtn12 = document.getElementById("question12");
let questionBtn13 = document.getElementById("question13");
let questionBtn14 = document.getElementById("question14");
let questionBtn15 = document.getElementById("question15");
let questionBtn16 = document.getElementById("question16");
let questionBtn17 = document.getElementById("question17");
let questionBtn18 = document.getElementById("question18");
let questionBtn19 = document.getElementById("question19");
let questionBtn20 = document.getElementById("question20");
let questionBtn21 = document.getElementById("question21");
let questionBtn22 = document.getElementById("question22");
let questionBtn23 = document.getElementById("question23");
let reloadBtn = document.getElementById("reload");
let closeBtn = document.getElementById("close");

// Конец обьявления кнопок

//Переход на 13 вопрос

let question13 = document.querySelector(".questionExcelForm");

// Функция проверки ответов на правильность

// Проверяеть наличие выбраной радиокнопки на значение value === 1
function checkRadio() {
    for (let i = 0; i < labelArr.length; i++) {
        if (radioArr[i].value === "1" && radioArr[i].checked === true) {
            counter++;

            formArr[counter].classList.remove("passiveBlock");
            formArr[counter].classList.add("activeBlock");
            labelArr[i].classList.add("done");
            label = formArr[counter].querySelectorAll("label");
            labelArr = Array.prototype.slice.call(label);

            radio = formArr[counter].querySelectorAll('input[type=radio]');
            radioArr = Array.prototype.slice.call(radio);

        } else if (radioArr[i].value !== "1" && radioArr[i].checked === true) {
            labelArr[i].classList.add("error");
            errorHero.style.visibility = "visible";
            clearForm();
        }
    }
}

// Проверка ивента нажатия на кнопку и вызов функции проверки на правильность
questionBtn1.addEventListener('click', checkRadio);
questionBtn2.addEventListener('click', checkRadio);
questionBtn3.addEventListener('click', checkRadio);
questionBtn4.addEventListener('click', checkRadio);
questionBtn5.addEventListener('click', checkRadio);
questionBtn6.addEventListener('click', checkRadio);
questionBtn7.addEventListener('click', checkRadio);
questionBtn8.addEventListener('click', checkRadio);
questionBtn9.addEventListener('click', checkRadio);
questionBtn10.addEventListener('click', checkRadio);
questionBtn11.addEventListener('click', checkRadio);
questionBtn12.addEventListener('click', () => {
    for (let i = 0; i < labelArr.length; i++) {
        if (radioArr[i].value === "1" && radioArr[i].checked === true) {
            question13.classList.remove("passiveBlock");
            question13.classList.add("activeBlock");
        } else if (radioArr[i].value !== "1" && radioArr[i].checked === true) {
            labelArr[i].classList.add("error");
            errorHero.style.visibility = "visible";
            clearForm();
        }
    }
});
// questionBtn13.addEventListener("click", ()=>{
//
// })
//Конец проверки ивента нажатия на кнопку и вызов функции проверки на правильность

// Функция которая очищает форму при наличии ошибочного ответа
function clearForm() {
    formArr[counter].reset();
}

// Обьявление блока с ошибкой
let errorHero = document.querySelector(".errorHero");
let errorDivBtn = document.querySelector(".errorDiv__btn");
//Проверка на ивент нажатие на кнопку скрывает блок с ошибкой
errorDivBtn.addEventListener('click', function () {
    errorHero.style.visibility = "hidden";
    for (let i = 0; i < labelArr.length; i++) {
        if (labelArr[i].classList.contains("error")) {
            labelArr[i].classList.remove("error");
        }
    }
})
// Конец проверки на ивент нажатие на кнопку скрывает блок с ошибкой

let form14 = document.querySelector(".question14");
//Функция которая выводит 14 вопрос и проверяет на правильность данные с 13 вопроса
let question13InputValue = document.querySelectorAll(".question13__inputValue");
let question13InputSign = document.querySelectorAll(".question13__select");

let question13InputArr = Array.prototype.slice.call(question13InputValue);//перевод с NodeList в Array
let question13SignArr = Array.prototype.slice.call(question13InputSign);//перевод с NodeList в Array
// console.log(question13SignArr);
let question13TrueArr = ["45", "50", "20", "60", "1", "0", "3", "6", "120", "2", "3", "2", "0", "230"];

// console.log(question13InputValue);
// console.log(question13InputSign);

questionBtn13.addEventListener('click', () => {
    let counter = 0;
    for (let i = 0; i < question13InputArr.length; i++) {
        if (question13InputArr[i].value === question13TrueArr[i]) {
            question13InputArr[i].style.border = "1px solid green";
            counter++;
        } else if (question13InputArr[i].value !== question13TrueArr[i]) {
            question13InputArr[i].style.border = "2px solid red";
        }
    }
    for (let j = 0; j < question13SignArr.length; j++) {
        if (question13SignArr[j].value === "1") {
            question13SignArr[j].style.border = "1px solid green";
            counter++
        } else if (question13SignArr[j].value !== "1") {
            question13SignArr[j].style.border = "2px solid red";
        }
    }
    if (counter === 17) {
        form14.classList.remove("passiveBlock");
        form14.classList.add("activeBlock");
    }
})
//Обьявление блока с 15 вопросом для дальнейшего его показа
let question15Form = document.querySelector(".question15");
//Масив с ответами на 14 вопрос
let question14 = ["1", "0", "3", "6", "120", "2", "3", "2", "0", "230", "45", "50", "20", "60"];
let question14Form = document.querySelector(".question14");
let question14Node = question14Form.getElementsByClassName("inputValue");
// console.log(question14Node);
let question14Arr = Array.prototype.slice.call(question14Node);//перевод с NodeList в Array

//Проверка 14 вопроса на правильность ввода данных
questionBtn14.addEventListener('click', () => {
    let counter = 0;
    for (let i = 0; i < question14Arr.length; i++) {
        if (question14Arr[i].value === question14[i]) {
            counter++;
            question14Arr[i].style.border = "1px solid green";
            // console.log(question14Arr[i].value + " = " + question14[i]);
            if (counter === question14Arr.length) {
                question15Form.classList.remove("passiveBlock");
                question15Form.classList.add("activeBlock");
            }
        } else if (question14Arr[i].value !== question14[i]) {
            question14Arr[i].style.border = "2px solid red";
            counter--;
        }
    }
});


//Масив с ответами на 15 вопрос
let question15 = ["0", "0", "0", "0"];
// console.log(question15Form);
let question15Node = question15Form.getElementsByClassName("inputValue");
let question15Arr = Array.prototype.slice.call(question15Node);//перевод с NodeList в Array
let question16 = document.querySelector(".question16");
// console.log(question16);
// Проверка 15 вопроса на правильность ввода данных
questionBtn15.addEventListener('click', () => {
    let counter = 0;
    for (let i = 0; i < question15Arr.length; i++) {
        if (question15Arr[i].value === question15[i]) {
            counter++;
            question15Arr[i].style.border = "1px solid green";
            // console.log(question15Arr[i].value + " = " + question15[i]);
            if (counter === question15Arr.length) {
                question16.classList.remove("passiveBlock");
                question16.classList.add("activeBlock");
            }
        } else if (question15Arr[i].value !== question15[i]) {
            question15Arr[i].style.border = "2px solid red";
            counter--;
        }
    }
})
let question16Input = document.getElementsByClassName("question16__input");
let question16Arr = Array.prototype.slice.call(question16Input);//перевод с NodeList в Array
let question16True = ["=B4*B8+C4*C8+D4*D8+E4*E8"]//Відповідь на 16 питання

// console.log(question16Input);
// console.log(question16Arr);
questionBtn16.addEventListener("click", () => {
    for (let i = 0; i < question16Arr.length; i++) {
        if (question16Arr[i].value === question16True[i]) {
            question16Arr[i].style.border = "1px solid green";
            question17.classList.remove("passiveBlock");
            question17.classList.add("activeBlock");
        } else if (question16Arr[i].value !== question16True[i]) {
            question16Arr[i].style.border = "2px solid red";
        }
    }
})

let question17 = document.querySelector(".questionExcelForm--17");
let question18 = document.querySelector(".question18");
// console.log(question18);
questionBtn17.addEventListener("click", () => {
    question18.classList.remove("passiveBlock");
})

//Переход на 18 вопрос
let question18Node = document.querySelectorAll(".question18__inputValue");//Поле где будет введен ответ
let question18Arr = Array.prototype.slice.call(question18Node);//перевод с NodeList в Array
let question19 = document.querySelector(".question19");//Блок з 19 питанням
//Ответ на 18 вопрос
let question18True = "=B3*B8+C3*C8+D3*D8+E3*E8";
questionBtn18.addEventListener("click", () => {
    for (let i = 0; i < question18Arr.length; i++) {
        if (question18Arr[i].value === question18True) {
            question18Arr[i].style.border = "1px solid green";
            question19.classList.toggle("passiveBlock");
            question19.classList.toggle("activeBlock");
            break;
        } else if (question18Arr[i].value !== question18True) {
            question18Arr[i].style.border = "2px solid red"
        }
    }
})
let question19Input = document.querySelector(".question19__inputValue");
let question19True = "$B$9";
let question19Help = document.querySelector(".question19Help");
let question19HelpBtn = document.querySelector(".question19Help__btn");
let question20 = document.querySelector(".question20");
questionBtn19.addEventListener("click", () => {
    if (question19Input.value === question19True) {
        question19Input.style.border = "1px solid green";
        question20.classList.remove("passiveBlock");
        question20.classList.add("activeBlock");
    } else if (question19Input.value !== question19True) {
        question19Input.style.border = "2px solid red";
        question19Help.classList.toggle("passiveBlock");
        question19Help.classList.toggle("hidden");

    }
})
question19HelpBtn.addEventListener("click", () => {
    question19Help.classList.toggle("passiveBlock");
    question19Help.classList.toggle("hidden");
})
let question20Input = document.querySelector(".question20__inputValue");
let question20True = "$B$8:$E$8";
let question20Help = document.querySelector(".question20Help");
let question20HelpBtn = document.querySelector(".question20Help__btn");
let question21 = document.querySelector(".question21");
// let question20 = document.querySelector(".question20");
questionBtn20.addEventListener("click", () => {
    if (question20Input.value === question20True) {
        question20Input.style.border = "1px solid green";
        question21.classList.remove("passiveBlock");
        question21.classList.add("activeBlock");
    } else if (question20Input.value !== question20True) {
        question20Input.style.border = "2px solid red";
        question20Help.classList.toggle("passiveBlock");
        question20Help.classList.toggle("hidden");

    }
})
question20HelpBtn.addEventListener("click", () => {
    question20Help.classList.toggle("passiveBlock");
    question20Help.classList.toggle("hidden");
})
let question22 = document.querySelector(".question22");
questionBtn21.addEventListener("click", () => {
    question22.classList.remove("passiveBlock");
    question22.classList.add("activeBlock");
})
let question22Input = document.querySelectorAll(".question22__inputValue");
let question22Arr = Array.prototype.slice.call(question22Input);//перевод с NodeList в Array
// console.log(question22Arr);
let question22True = ["$G$3","=$F$3"];
let question22Sign = document.querySelector(".question22__select");
let question23 = document.querySelector(".question23");
// console.log(question22Sign);
questionBtn22.addEventListener("click", () => {
    let counter = 0;
    if (question22Sign.value === "1"){
        question22Sign.style.border = "1px solid green";
        counter++;
    }else{
        question22Sign.style.border = "2px solid red";
        counter--;
    }
    for (let i = 0; i < question22Arr.length; i++) {
        if (question22Arr[i].value === question22True[i]) {
            question22Arr[i].style.border = "1px solid green";
            counter++;
        } else if (question22Arr[i].value !== question22True[i]) {
            question22Arr[i].style.border = "2px solid red";
            counter--;
        }
    }
    if (counter === 3){
        question23.classList.remove("passiveBlock");
    }
})
let question24 = document.querySelector(".question24");
questionBtn23.addEventListener("click",()=>{
    question24.classList.remove("passiveBlock");
})
let finalBlock = document.querySelector(".finalHero");
let finishBtn = document.getElementById("question24");
finishBtn.addEventListener("click", ()=>{
finalBlock.classList.remove("hidden");
})
reloadBtn.addEventListener("click",()=>{
    document.location.reload();
    finalBlock.classList.add("hidden");
})
closeBtn.addEventListener("click", close);

// finishBtn.addEventListener("click",close)
// finishBtn.addEventListener("click",()=>{
//     document.location.reload();
// })