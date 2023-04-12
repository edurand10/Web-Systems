const items = [];

const listItems = document.querySelector("#list-items");

const updateItemsList = () => {
  console.log(listItems);
  if (items.length === 0) {
    listItems.innerHTML = "You have no items in your list";
  } else {
    const itemCount = items.length;
    listItems.innerHTML = `You have ${
      items.length
    } item(s) in your list. <br/>${items.join(", ")}`;
    console.log(items);
  }
};

const handleClick = (e) => {
  const id = e.target.dataset.id;
  items.push(id);
  updateItemsList();
};

window.onload = () => {
  const x = document.querySelector("li#example");
  x.style.display = "none";
};

const itemButtons = document.querySelectorAll(".item-button");

for (let i = 0; i < itemButtons.length; i++) {
  const button = itemButtons[i];
  button.addEventListener("click", handleClick);
}
