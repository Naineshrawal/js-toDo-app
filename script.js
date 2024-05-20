const input = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const button = document.querySelector("button")
const span = document.querySelector('span')

button.addEventListener("click" , ()=>{
    if(input.value === ''){
        alert("please write something in task!")
    }else{
        let li = document.createElement('li')
        li.innerHTML = input.value
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        
    }
    input.value= ""
    saveData()
})

listContainer.addEventListener( 'click', (e)=>{
    
    console.log(e.target.tagName);
    if(e.target.tagName === 'LI'){
        console.log(e.target);
        e.target.classList.toggle('checked')
        saveData()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    saveData()
} )


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showList(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showList()

