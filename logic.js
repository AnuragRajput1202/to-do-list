let inputBox = document.querySelector("#input-box");
let addBtn = document.querySelector("#add-btn");
let listContainer = document.querySelector(".list-container");

addBtn.addEventListener("click",()=>{
    if(inputBox.value===""){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
});

inputBox.addEventListener("keypress",(evt)=>{
    if(evt.key==="Enter"){
        if(inputBox.value===""){
            alert("You must write something!");
        }else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value="";
        saveData();
    }
});

listContainer.addEventListener("click", function(x){
    if(x.target.tagName==="LI"){
        x.target.classList.toggle("checked");
        saveData();
    }
    else if(x.target.tagName==="SPAN"){
        x.target.parentElement.remove();
        saveData();
    }
});

const saveData = ()=>{
    localStorage.setItem("data",listContainer.innerHTML);
}
const showData = ()=>{
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();

