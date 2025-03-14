function toggleDropdown() {
  console.log("ngn tycker på knappen");
  let menu = document.getElementById("dropdown");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
function addItem(productName) //sätter namn till variablen productName 
{
  let menu = document.getElementById("dropdown");
  let newItem = document.createElement("li"); // skapar en ny lista
  newItem.textContent = productName; //sätter namn
  menu.appendChild(newItem); // Lägger till produkten i listan


let removeBtn = document.createElement("button");
removeBtn.innerHTML = '<i class="fa-solid fa-minus"></i>'; 
removeBtn.classList.add("remove-btn"); // När man klickar så tas det bort. 
removeBtn.addEventListener("click", function(event) {
    event.stopPropagation(); // Gör så inget fel sker och fel <li> ändras
    menu.removeChild(newItem);
});

// Lägger till button i list 
newItem.appendChild(removeBtn);
menu.appendChild(newItem); 
}

function addItem1() { addItem("Air Force 1"); }
function addItem2() { addItem("Dunk Lows"); }
function addItem3() { addItem("Defy all Day"); }
function addItem4() { addItem("V2K Run"); }
function addItem5() { addItem("Air Max 270"); }
function addItem6() { addItem("Motiva"); }