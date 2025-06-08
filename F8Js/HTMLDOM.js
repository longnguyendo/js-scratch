// Hoc hanh theo dang he thong, tai sao cai nao o truoc o sau, phai theo thu tu, hoc so1, so2, so3,
// ren luyen cach lam viec dung tien do hon

// 1. element: id, class, tag, css selector, html collection
// 2. attribute
// 3. text

//13/14/15/16


// console.log(document.form.testFrom); // this's possible 
// console.log(document.form.form-1); // this's not possible
// fix last get form ->
// console.log(document.forms['form-1']); // this will work when name like this
// --> then u will understand and how 
// tag a --> anchor; access html collection

// class ele giong nhu 1 casi mang
// css selector ; querySelector, truy can duoc chon ;
// html collection; image, a , form ...

// console.log(document);\

// toi nay phai phan biet duoc cai nao lay html collection, node tag, element 

var productsListElement = document.querySelector(".products-list");
var firstProductElement = document.querySelector(".product");
var buttonElements = document.querySelectorAll('button');

let productsElement = document.querySelectorAll(".product");
console.log(productsElement);

// console.log();


productsElement.forEach((product) => {
    // console.log(product);
    
    // product.style.color = "red";
})


// console.log(firstProductElement);

// console.log(productsListElement, firstProductElement, buttonElements);

// 1.getElementById
// 2.getElementsByClassName
// 3.getElementsByTagName --> use can use document.forms // .h1 , .anchors, . ... 
// 4.querySelector
// 5.querySelectorAll

// 6.HTML collection

// 7.Document.write

// --> only 2 method get element are 1,4; --> 1 element;
// --> 2,3,5,6 return node list (array); they are array, u can use array method;

// II. Attribute , text;
// example: <h1 class(attribute)="a" id(attribute)="a">this is text</h1>

// edit attribute; 

// firstProductElement.title = 'heading';
// firstProductElement.className = 'heading'; // setter;

const a = document.querySelector('a');
// a.href = 'fullstack.edu.vn';
// innerHTML --> Overwrite inside tag, and outnerHMTL overwrite the tag

const box = document.querySelector('.box');
// box.outerHTML = "<span>Heading</span>";
// box.innerHTML = "<h1>Heading</h1>";
// box.innerHTML still remember old content when u use outerHTML above;

// but in box.innerHTML ->> 

console.log(box);
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    const ul = document.querySelector('ul');
    return ul.innerHTML = courses.map((val, idx) => {
        return `<li>${val}</li>`
    }).join("");
}
console.log("course", render(courses));

// Node properties;
// 1. element;
// 2. attribute
// 3. text
// doc qua tung method, cua element, vi du nhu contenteditawble="";
// --> nghia la co the edit khi nhan vao trong the day,(ke ca con no);

// let boxElement = document.querySelector('.box');
// console.log([boxElement]);
// // log ra cac properties node va prototype, sau nay co the se su dung
 
// // DOM CSs
// console.log(boxElement.style); // will log properties of style to use it;
// // style = object;
// // we can use Object.assign(boxEle)  / gan 
// Object.assign(boxElement.style, {
//     width: '200px',
//     height: '100px',
// })
// boxElement.style.color = 'red';

// 148 classlist property
// add
// contain
// remove
// toggle

// console.log(boxElement.classList); // so luong class

// 154 dom events;
// const button = document.querySelector('button');

// button.onclick = function(e) {
//     console.log('abc', e);
//     button.style.backgroundColor='#fff';
//     // button.classList.toggle('#fff')
// }

// 157 input / select 
// key up / down 

// const inputElement = document.querySelector('input[type="text"]');
// console.log(inputElement);

// onchange , oninput,  onkeyup, onkeydown, onkeypress (esc not in this method),
// which is code of char on keyboard;
// inputElement.onkeyup = function(e) {
//     console.log(e.which);

//     switch(e.which) {
//         case 27: 
//             console.log("exit");
//             break;
//         case 13:
//             console.log("enter");
//             break;
//     }
// }

// inputElement.addEventListener('copy', (e)=> {
//     alert('copy is not allowed');
//     e.preventDefault();
//     const selectText = window.getSelection().toString();
//     console.log("you copied", selectText);
    
// })
// block copy paste

document.addEventListener('copy', (e) => {
    // alert('copy is not allowed here');
    e.preventDefault();
    console.log("user copied smt!");

    const selectText = window.getSelection().toString();
    console.log('text copied', selectText);
    
})

document.addEventListener('paste', (e) => {
    // alert('copy is not allowed here');
    e.preventDefault();
    console.log("user copied smt!");

    const selectText = window.getSelection().toString();
    console.log('text copied', selectText);
    
})

// 158 PreventDefault / stopPropagation
// preventDefault hanh vi mat dinh cua site;
// stop su kien noi bot // stop bubble behavior 
// anchors - get a tag when they have name attribute;
// document.links; --> html  Collection;
// presearch log 
// prevent default ngan chan moi hanh vi mat dinh ma no tao ra trong html

// preventDefault -> tra ve hanh vi mat dinh cua site
let links = document.links;
for(let i = 0 ;  i < links.length; i ++) {
    let link = links[i];
    link.onclick = function(e) {
        if (!e.target.href.startsWith('https://google.com')) {
            e.preventDefault();
        }
    }  
}
let ulElement = document.querySelector('ul');

ulElement.onmousedown = (e) => {
    e.preventDefault();
}

ulElement.onclick = (e) => {
    console.log(e.target);
}
// stopPropagation -> chan noi bot 
stopDivEle = document.querySelector('.divStopPropagation');
stopBoxEle = document.querySelector('.stopPropagation');

stopDivEle.onclick=(e) => {
    console.log('DIV');
}
stopBoxEle.onclick=(e)=> {
    e.stopPropagation();
    console.log('Box');
}

// 159 EvenListener
// 1.Even Listener
// 2.JSON
// 3.Fetch
// 4.DOM location
// 5.Local storage
// 6.Session storage
// 7.Coding convention
// 8.Best Practices
// 9.Mistakes
// 10.Performance;

// 1. handle many task after 1 event happen
// 2. Listen/ cancel listening
// example, u can ask user that do u want to reload page
