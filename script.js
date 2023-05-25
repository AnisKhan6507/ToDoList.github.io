let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let clear = document.querySelector('.clear');
let container =  document.querySelector('.container')

btn.addEventListener('click', () =>{
    let val = input.value
    const box = document.createElement("div");
    const cancel = document.createElement("span")
    const li = document.createElement("li")

    console.log(val)
    input.value = "";
 
    if(val == ""){
        alert('Insert something')
    }

    else{
        box.id = "box";
        document.querySelector('.container').append(box);
        li.innerHTML = val;
        cancel.innerHTML = 'X'
        box.appendChild(li)
        box.appendChild(cancel)

       box.addEventListener('click', (e) => {
           if(e.target.tagName == "LI"){
              e.target.classList.toggle("checked")
           }
           else if(e.target.tagName == "SPAN"){
            e.target.parentElement.remove()
           }
        })
    }
})


