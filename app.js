let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");



btn.addEventListener("click",function()
{
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";
    let db=document.createElement("button");
    db.innerText="delete";
    db.classList.add("del");
    item.appendChild(db)
    
    })
  
ul.addEventListener("click",function(event){
    
    if(event.target.nodeName=="BUTTON")
{
    let listitem=event.target.parentElement;
    listitem.remove();
}
} )

