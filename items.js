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

    const unitsRemainingDiv = document.createElement('div');
    unitsRemainingDiv.textContent = `Units Remaining: ${item.unitsRemaining}`;
    li.appendChild(unitsRemainingDiv);

    const urlDiv = document.createElement('div');
    urlDiv.innerHTML = `<img src="${item.imageURL}">`;
    li.appendChild(urlDiv);

    const deleteDiv = document.createElement('div');
    deleteDiv.innerHTML = `<button type="reset" id="deleteCard">Delete</button>`;

    const subtractDiv = document.createElement('div');
    subtractDiv.innerHTML = `<button type="button" id="subtract"> - </button>`;

    const addDiv = document.createElement('div');
    addDiv.innerHTML = `<button type="button" id="add"> + </button>`;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('id', 'card-buttons');
    buttonsDiv.appendChild(subtractDiv);
    buttonsDiv.appendChild(deleteDiv);
    buttonsDiv.appendChild(addDiv);
    li.appendChild(buttonsDiv);

    itemList.appendChild(li);
  });
  resetCardButtons();
}

function addItemToList(event) {
  event.preventDefault();

  const nameInput = document.querySelector("#nameInput");
  const descriptionInput = document.querySelector("#descriptionInput");
  const priceInput = document.querySelector("#priceInput");
  const unitsRemainingInput = document.querySelector("#unitsRemainingInput");
  const urlInput = document.querySelector("#urlInput");

  const newItem = {
    itemName: nameInput.value,
    description: descriptionInput.value,
    price: parseFloat(priceInput.value),
    unitsRemaining: parseFloat(unitsRemainingInput.value),
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
  unitsRemainingInput.value = '';
  urlInput.value = '';
}

function resetList() {
    items = [];
    displayObjectsAsList(items);
}

const jsonString = `[
  {
    "itemName": "apple",
    "description": "cold and crunchy",
    "price": 5,
    "unitsRemaining": 5,
    "imageURL": "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png"
  },
  {
    "itemName": "pear",
    "description": "tasty and sweet",
    "price": 6,
    "unitsRemaining": 55,
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/440px-Pears.jpg"
  },
  {
    "itemName": "strawberry",
    "description": "taste of summer",
    "price": 2,
    "unitsRemaining": 1,
    "imageURL": "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432670258-strawberry-facts2.jpg?resize=980:*"
  }
]`;

var items = JSON.parse(jsonString);

var deleteButtons;
var subtractButtons;
var addButtons;

function resetCardButtons() {

  deleteButtons = document.querySelectorAll("#deleteCard");
  deleteButtons.forEach(deleteButton => {
    addEventListener('click', deleteCard, deleteButton);
  });

  subtractButtons = document.querySelectorAll("#subtract");
  subtractButtons.forEach(subtractButton => {
    addEventListener('click', subtractUnit, subtractButton);
  });

  addButtons = document.querySelectorAll("#add");
  addButtons.forEach(addButton => {
    addEventListener('click', addUnit, addButton);
  });
}


function deleteCard(event) {
  const index = Array.from(deleteButtons).indexOf(event.target);
  console.log("deleteButton pressed: "+index);
  // button pressed is not delete button: -1
  if (index != -1) {
    items.splice(index, 1);
    displayObjectsAsList(items);
  }
}

function subtractUnit(event) {
  const index = Array.from(subtractButtons).indexOf(event.target);
  console.log("subtractButton pressed: "+index);
  // button pressed is not delete button: -1
  if (index != -1) {
    items[index].unitsRemaining--;

    if (items[index].unitsRemaining === 0) {
      items.splice(index, 1);
    }
    displayObjectsAsList(items);
  }
}

function addUnit(event) {
  const index = Array.from(addButtons).indexOf(event.target);
  console.log("addButton pressed: "+index);
  // button pressed is not delete button: -1
  if (index != -1) {
    items[index].unitsRemaining++;
    displayObjectsAsList(items);
  }
}


const itemForm = document.getElementById('itemForm');
itemForm.addEventListener('submit', addItemToList);

const resetListButton = document.querySelector("#displayItems > button");
resetListButton.addEventListener('click', resetList);

displayObjectsAsList(items);
