const allbtns = document.querySelector('.allbtns')
const display = document.querySelector('.display-msg')
const ac = document.querySelector('.ac')
const x = allbtns.children
let value = "" ;

// console.log(x[0])
for(let i of x){
    i.addEventListener('click',(btn)=>{
        let num = btn.target.innerText
        if(num === '='){
            console.log('hi')
            console.log(eval(value))
            value = eval(value)

            display.innerHTML = eval(value)
            
        }else{
            value += btn.target.innerText

            console.log(value)
            display.innerHTML = value
        }
     
             

        
  
    
       
       })
}


// console.log(allbtns)
const equal = document.querySelector('.a')





ac.addEventListener('click',()=>{
    value = ""
    display.innerText = ''

})