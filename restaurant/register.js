function formvalid(){
    let pass= document.getElementById('pass').value
    let namee= document.getElementById('namee').value
    if(pass=='12345' && namee=='praveen' ){
        window.location.href='restaurant.html'
    return false
    }
    else{
        namee.style.border
    return false
    }
}

let skip=document.getElementById('skip')
skip.addEventListener('click',function(){
    window.location.href='new_restaurant.html'
})


localStorage.setItem('one','a')
let one=localStorage.getItem('one')
console.log(one)