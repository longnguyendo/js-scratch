
const recEle = document.querySelector('.nav');

console.log(recEle.getBoundingClientRect());

let boundingRec = recEle.getBoundingClientRect();

let start;

let vantoc = 0;

let y = 0;

function step(timestamp) {

  if (start === undefined) {
    start = timestamp;
  }

  y += vantoc;  
  vantoc+= 0.2;
  console.log("vt", vantoc);
  
  recEle.style.transform = `translateY(${y}px)`;

//   if (y < window.innerHeight-boundingRec.height) {
//     requestAnimationFrame(step);
//   }
  requestAnimationFrame(step);
}

addEventListener('keydown', (e) => {
  if(e.code === 'Space') {
    vantoc= -5;
  }
})

requestAnimationFrame((timestamp) => step(timestamp, 0));

// dong goi 2 nguoi, bat dau ket thuc;
