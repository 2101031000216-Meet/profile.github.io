// let str = "";
// let btns = document.querySelectorAll(".cal_btn");
// Array.from(btns).forEach((cal_btn)=>{
//     cal_btn.addEventListener('click', (e)=>{
//         if(e.target.innerHTML == '='){
//            str = eval(str);
//             document.querySelector('.cal_screen').value = str;
//         }
//         else{
//             console.log(e.target)
//             str = str + e.target.innerHTML;
//             document.querySelector('.cal_screen').value = str;
//         }
//     })
// })

function appendToResult(value) {
    document.getElementsByClassName('cal_screen')[0].value += value;
}

function clearResult() {
    document.getElementsByClassName('cal_screen')[0].value = '';
}

function calculateResult() {
    var result = document.getElementsByClassName('cal_screen')[0].value;
    var calculation = eval(result);
    document.getElementsByClassName('cal_screen')[0].value = calculation;
}

