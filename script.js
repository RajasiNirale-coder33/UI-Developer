const loadtext = document.querySelector('.loadingSign')
const bg = document.querySelector('.bg_img')

let load = 0



function blurring(){
    load++
    const rajasi = 'rajasiNirale'
    if(load > 99){
        clearInterval(init)
    }
    
    loadtext.innerText = `${load}%`
    loadtext.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 13, 0)}px)`   

    
}
let init = setInterval(blurring, 30)
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}