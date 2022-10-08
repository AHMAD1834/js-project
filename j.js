let tag = document.getElementById("element");
// tag.style.backgroundColor= "red";
let bt = document.getElementById('btnblub')
let bulb = document.getElementById('blub')
bt.addEventListener('click',bulb1)
function bulb1(e) {
    if(bt.textContent.includes('on')){
        bulb.src="light-bulib-isolated-on-black-600w-645107569.webp";
        bt.textContent = "turn off";
    }
    else{
        bulb.src = "electric-light-bulb-on-black-600w-1009339444.webp"
        bt.textContent = "turn on"
    }

}
