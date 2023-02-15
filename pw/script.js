'use strict';

{
    const btn = document.getElementById('btn')
    const slider = document.getElementById('slider')
    const res = document.getElementById('res')
    const len = document.getElementById('len')
    const num = document.getElementById('num')
    const symbol = document.getElementById('symbol')

    const a_z = String.fromCharCode(...Array.from({length: 26}, (_,i) => 'a'.charCodeAt(0) + i))
    const one_nine = [...Array(10)].map((_,i)=>i).join('')
    const both = a_z.concat(one_nine)
    const sym = '-_/*+.,!#$|%^'
    const sym2 = both.concat(sym)

    const flag = (v,name) =>{
        const text = [...Array(v)].map(()=>name[Math.floor(Math.random() * name.length)]).join('')
        return text
    }

    let result;
    
    btn.addEventListener('click',()=>{
        // const a = num.checked ? flag(v,both) : sym.checked ? flag(v,a_z.concat(sym)) :flag(v,a_z)
        const v = parseInt(slider.value)
        // const result = num.checked && symbol.checked ? flag(v,sym2) : num.checked ? flag(v,both) : flag(v,a_z)

        if (num.checked && symbol.checked){
            result = flag(v,sym2)
        }else if(!num.checked && symbol.checked){
            result = flag(v,a_z.concat(sym))
        }else if(num.checked && !symbol.checked){
            result = flag(v,both)
        }else{
            result = flag(v,a_z)
        }
        res.textContent = result
    });

    slider.addEventListener('change',()=>{
        len.innerHTML=slider.value
    });

}