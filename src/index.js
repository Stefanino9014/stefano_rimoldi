const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");
const resetCounterButton = document.getElementById("reset-counter");
const addValueButton = document.getElementById("addValueButton");
const counterElement = document.getElementById("counter");
const counterTitle = document.getElementById("counterTitle");
//* const editIcon = document.getElementById("edit-icon");
const initialValueInput = document.getElementById("initialValue");
//* new counters
const addCounterButton = document.getElementById("addCounterButton");
const countersContainer = document.getElementById("countersContainer");

let counter = 0;

incrementButton.addEventListener("click", () => {
  counter++;
  counterElement.textContent = counter;
});

decrementButton.addEventListener("click", () => {
  counter--;
  counterElement.textContent = counter;
});

resetCounterButton.addEventListener("click", () => {
  counter = 0;
  counterElement.textContent = counter;
});

addValueButton.addEventListener("click", () => {
  const valueToAdd = parseInt(prompt("Inserisci il valore da aggiungere:"));

  if (!isNaN(valueToAdd)) {
    counter += valueToAdd;
    counterElement.textContent = counter;
  }
});

// Inserisce il nuovo counter
addCounterButton.addEventListener("click", () => {
  // Creare un nuovo elemento div per il contatore
  const newCounterDiv = document.createElement("div");

  // Creare la struttura del counter all'interno del div
  newCounterDiv.innerHTML = `
    <div>
      <div class='counter-title'>
        <h2 id="counterTitle" class='title' contenteditable="true">Counter Name</h2>
        <button id="addValueButton">Add Value</button>
        <button id="reset-counter">Reset</button>
        <button id='deleteButton'>Delete</button>
        <input type="text" id="initialValue" style="display: none">
      </div>
      <div class="center-box">
        <div id="counter" contenteditable="true">0</div>
      </div>
    </div>
    <div class='button-base'>
      <button id='incrementButton'>+</button>
      <button id='decrementButton'>-</button>
    </div>
  `;

  // Aggiungi il nuovo contatore al contenitore
  countersContainer.appendChild(newCounterDiv);

  // Aggiungi eventi e funzionalità ai pulsanti del nuovo contatore se necessario
  const incrementButton = newCounterDiv.querySelector("#incrementButton");
  const decrementButton = newCounterDiv.querySelector("#decrementButton");
  const addValueButton = newCounterDiv.querySelector("#addValueButton");
  const resetCounterButton = newCounterDiv.querySelector("#reset-counter");
  const counterElement = newCounterDiv.querySelector("#counter");
  const deleteButton = newCounterDiv.querySelector("#deleteButton");

  incrementButton.addEventListener("click", () => {
    const counterElement = newCounterDiv.querySelector("#counter");
    let currentValue = parseInt(counterElement.textContent);
    if (isNaN(currentValue)) {
      currentValue = 0;
    }
    currentValue++;
    counterElement.textContent = currentValue;
  });

  decrementButton.addEventListener("click", () => {
    const counterElement = newCounterDiv.querySelector("#counter");
    let currentValue = parseInt(counterElement.textContent);
    if (isNaN(currentValue)) {
      currentValue = 0;
    }
    currentValue--;
    counterElement.textContent = currentValue;
  });

  addValueButton.addEventListener("click", () => {
    const valueToAdd = parseInt(prompt("Inserisci il valore da aggiungere:"));

    if (!isNaN(valueToAdd)) {
      counter += valueToAdd;
      counterElement.textContent = counter;
    }
  });

  resetCounterButton.addEventListener("click", () => {
    counter = 0;
    counterElement.textContent = counter;
  });

  deleteButton.addEventListener("click", () => {
    // Rimuovi il contatore selezionato
    countersContainer.removeChild(newCounterDiv);
  });

  // Aggiungi un gestore di eventi "keydown" all'elemento del contatore
  newCounterDiv.addEventListener("keydown", (event) => {
    if (event.key === "Delete" || event.keyCode === 46) {
      // Rimuovi il contatore quando viene premuto il tasto "Delete"
      countersContainer.removeChild(newCounterDiv);
    }
  });
});
