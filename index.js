const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getHours());
x=now.getHours()
y = x.toString();
console.log(y);
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());


// Timestamps

const before = new Date('February 01 2015 18:00:00');
console.log(before.getTime());

let diff = now.getTime() - before.getTime();
console.log(diff/1000/60);


//timestamp to date object

const ts = new Date(1422801000000);
console.log(ts);


// Digital clock

const clock = document.querySelector('.clock');

const tick = () => {
   
    const now2 = new Date();
    let h = now2.getHours();
    let hs = h.toString();
    if(h<10){
        hs = `0${hs}`
    }
    let m = now2.getMinutes();
    let ms = m.toString();
    if(m<10){
        ms = `0${ms}`
    }
    let s = now2.getSeconds();
    let ss = s.toString();
    if(s<10){
        ss = `0${ss}`
    }

    const html = `
        <span>${hs}</span> : 
        <span>${ms}</span> : 
        <span>${ss}</span>
        `
    clock.innerHTML = html;

}

setInterval(tick, 1000);


const eyd = document.querySelector('.norooz');

const future = new Date('March 21 2021 00:00:00');
let F = () => {
    now3 = new Date();
    let norooz = future.getTime() - now3.getTime();
    let ms = norooz/1000;
    let xs = Math.floor(norooz/1000);
    let s = xs%60;
    let xm = Math.floor(xs/60);
    let m = xm%60;
    let xh = Math.floor(xm/60);
    let h = xh%24;
    let d = Math.floor(xh/24);

    

  console.log(`${d}:${h}:${m}:${s} ${ms}`);

  const html2 = `
        <span>${d}</span> : 
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>

        `
    norooz.innerHTML = html2;

}

setInterval(F, 1000);





