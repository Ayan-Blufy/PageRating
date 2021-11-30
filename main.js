let image = document.getElementById('image');
let btn = document.getElementById('btn');
let msg = document.getElementById('msg');
let star = document.querySelectorAll('.fas');

let img = document.createElement('img');
image.appendChild(img);


function show() {
    let i = Math.floor(Math.random() * 20);

    img.src = "https://picsum.photos/400/200?random=${i}"
}

show();


function load(ele) {
    let type = ele.type;
    let starvalue = this.starValue;

    star.forEach((val, i) => {
        if (type == 'click') {
            if (i < starvalue) {
                val.classList.add('orange');
                msg.innerHTML = `You have rated ${starvalue} stars`;
            } else {
                val.classList.remove('orange');
            }
        }


        if (type == 'mouseover') {
            if (i < starvalue) {
                val.classList.add('yellow');
            }
        }
        if (type == 'mouseout') {
            if (i < starvalue) {
                val.classList.remove('yellow');
            }
        }
    })



}





for (let i = 0; i < star.length; i++) {
    star[i].starValue = (i + 1);

    ['click', 'mouseover', 'mouseout'].forEach((ele) => {
        star[i].addEventListener(ele, load);

    });
}


btn.addEventListener('click', () => {

    window.location.reload();


});