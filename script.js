function changeText() {
    const intro = document.getElementById("intro");
    intro.textContent = "The paragraph text has been updated!";
  }
  
  function toggleStyle() {
    const title = document.getElementById("main-title");
    title.classList.toggle("highlight");
  }
  
  function addItem() {
    const ul = document.getElementById("item-list");
    const newItem = document.createElement("li");
    newItem.textContent = "New item added!";
    ul.appendChild(newItem);
  }
  
  function removeItem() {
    const ul = document.getElementById("item-list");
    if (ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
    }
  }
  