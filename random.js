const Container=document.querySelector('.Container')
const btn=document.querySelector('button')
const h1=document.querySelector('h1')
// console.log(Container)
// console.log(btn)

const ColorChange=(e)=>{
    let random=Math.floor(Math.random()*16777215)
    console.log(random)
    let randomCode="#"+random.toString(16)
    Container.style.background=randomCode
    // Container.style.background=`rgb(${e.clientX},${e.clientY},123)`
    h1.innerText="Sumit Tiwar"
    // console.log(e.clientY, e.clientY)
}

Container.addEventListener("paste",ColorChange);

