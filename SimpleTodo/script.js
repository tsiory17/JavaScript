// the element that we need from the dom 
const btnAdd = document.querySelector(" body form button");
const table = document.querySelector("#table_todo tbody");
const allTable = document.querySelector("#table_todo")

//where we get the input 
let nameEntered = document.querySelector("#Name");
let description = document.querySelector("#Description");
let date = document.querySelector("#Date");

//let s get all Td and when one is selected we gonna put the class on the parent elemet 
 let allTd = document.querySelectorAll("#table_todo td");
 

// HERE IS TO ADD A NEW TODO TO THE TABLE 

btnAdd.addEventListener("click",function(event){
  
  event.preventDefault();
  if (nameEntered.value.length === 0|| description.value.length === 0 || date.value.length === 0){
    return; 
   }
   else{
  //create row 
  const row = document.createElement('tr');
  //apend row to the table 
  //create 5 td and append them to the row 
  let datas = [] ; // table to hold the td to better assign the data
  console.log(datas)
  for (let i = 0 ; i < 5 ; i++){
    const column = document.createElement('td');
    datas.push(column);
    row.appendChild(column);
  }
  
  //adding the different values 
  datas[0].innerHTML = nameEntered.value;
  datas[1].innerHTML = description.value;
  datas[2].innerHTML = date.value
  datas[3].innerHTML = "Ajout"
  datas[4].innerHTML = "supprimer"
 
  table.appendChild(row)
  allTd = document.querySelectorAll("#table_todo td")
}

})

//UPDATE 
 // by clicking an element it will get that element 
 //I click the table to have all the element and to update the tds
 //I add class to the parentElement tr so that I can add them to the textbox 
 //finally I need to update the thing 
table.addEventListener("click", function(){
  //updating all the td 
  allTd = document.querySelectorAll("#table_todo td")
  console.log(allTd.length)
// add an event listener to td
  for (td of allTd){
    td.addEventListener('click', function(event){
      const allTr = document.querySelectorAll("#table_todo tr")
// Remove all className from tr to avoid repetition
      for (tr of allTr){
        tr.removeAttribute("class")
      }
      console.log(allTr)
      // target the specific td which triggered the event
      let element = event.target;
      let parentTr = element.parentElement;
      //add className.clicked Tr to the tr
      parentTr.className = "clickedTr"

      // use the tr to take the value and put in the input box 

    })
   }
   
})


 
///// Just a function to update realtime not necessary in the project 

 let nameModify = []
 nameEntered.addEventListener('keydown', function(e){
    if(e.key != "Backspace"){
    nameModify.push(e.key)
     
    }
    else{
      nameModify.pop()
    }
    console.log(nameModify)
    
 })
 let inputNumber = ""; // Initialize an empty string to hold the number

////////////////////////////////////