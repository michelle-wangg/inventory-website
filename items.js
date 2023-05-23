function displayObjectsAsList(items) {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';

  items.forEach(item => {
    const li = document.createElement('li');

    const nameDiv = document.createElement('div');
    nameDiv.textContent = `Name: ${item.itemName}`;
    li.appendChild(nameDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = `Description: ${item.description}`;
    li.appendChild(descriptionDiv);

    const priceDiv = document.createElement('div');
    priceDiv.textContent = `Price: $${item.price}`;
    li.appendChild(priceDiv);

    const urlDiv = document.createElement('div');
    urlDiv.innerHTML = `<img src="${item.imageURL}">`;
    li.appendChild(urlDiv);

    const deleteDiv = document.createElement('div');
    deleteDiv.innerHTML = `<button type="reset" id="deleteCard">Delete</button>`;
    li.appendChild(deleteDiv)

    itemList.appendChild(li);
  });
  resetDeleteButtons();
}

function addItemToList(event) {
  event.preventDefault();

  const nameInput = document.querySelector("#nameInput");
  const descriptionInput = document.querySelector("#descriptionInput");
  const priceInput = document.querySelector("#priceInput");
  const urlInput = document.querySelector("#urlInput");

  const newItem = {
    itemName: nameInput.value,
    description: descriptionInput.value,
    price: parseFloat(priceInput.value),
    imageURL: urlInput.value
  };

  items.push(newItem);
  displayObjectsAsList(items);

  resetForm();
}

function resetForm() {
  nameInput.value = '';
  descriptionInput.value = '';
  priceInput.value = '';
  urlInput.value = '';
}

function resetList() {
    items = [];
    displayObjectsAsList(items);
}

function deleteCard(event) {
  const index = Array.from(deleteCardButtons).indexOf(event.target);
  console.log("deleteButton pressed: "+index);
  // button pressed is not delete button: -1
  if (index != -1) {
    items.splice(index, 1);
    displayObjectsAsList(items);
  }
}

const jsonString = `[
  {
    "itemName": "apple",
    "description": "cold and crunchy",
    "price": 5,
    "imageURL": "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png"
  },
  {
    "itemName": "pear",
    "description": "tasty and sweet",
    "price": 6,
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/440px-Pears.jpg"
  },
  {
    "itemName": "strawberry",
    "description": "taste of summer",
    "price": 2,
    "imageURL": "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432670258-strawberry-facts2.jpg?resize=980:*"
  }
]`;

var items = JSON.parse(jsonString);

const itemForm = document.getElementById('itemForm');
itemForm.addEventListener('submit', addItemToList);

const resetListButton = document.querySelector("#displayItems > button");
resetListButton.addEventListener('click', resetList);

var deleteCardButtons;

function resetDeleteButtons() {
  deleteCardButtons = document.querySelectorAll("#deleteCard");
  deleteCardButtons.forEach(deleteButton => {
    addEventListener('click', deleteCard, deleteButton);
  });
}

displayObjectsAsList(items);
