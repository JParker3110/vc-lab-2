let buttonOne=document.getElementById("btn1")
  buttonOne.addEventListener("click",() => {
  let myh1 =document.querySelector("h1")
    // console.log(myh1.textContent)
    let current=myh1.textContent
    let lower=myh1.textContent.toLowerCase()
    if(current===lower){
      current=current.toUpperCase()
      myh1.textContent=current
      }else{
    current=current.toLowerCase() 
      console.log(current)
       myh1.textContent=current
    }
  })

let list = ["git add", "git commit", "git push", "git status"]

let buttonTwo = document.getElementById("btn2");
buttonTwo.addEventListener("click", () => {
for(let i = 0; i < list.length; i++) {
  let li = document.createElement("li");
  li.textContent = list[i];
    uList.appendChild(li);
  

}


})

let uList = document.querySelector("ul");
console.log(uList)
