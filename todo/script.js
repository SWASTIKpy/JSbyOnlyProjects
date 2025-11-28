const taskInput = document.querySelector("#taskInput");
const btn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

btn.addEventListener('click', () => {
   const inVal = taskInput.value
   if(inVal.trim() === ""){
    alert("task toh daalde bhai")
    return;
   }
   const li = document.createElement("li")
   const dlt = document.createElement("button")
   li.textContent = inVal
   taskList.appendChild(li)
   li.appendChild(dlt)
   dlt.className = "delete-btn";
   dlt.textContent = "X";  
   taskInput.value = ""

   
})