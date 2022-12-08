const btnOneEl = document.querySelector(".one");
const btnTwoEl = document.querySelector(".two");
const inputEl = document.querySelector(".input");
const medialEl = document.querySelector(".medial-con");

const todotasks = JSON.parse(localStorage.getItem("todotasks"));

todotasks.forEach((todot) => {
  creationTask(todot);
});

btnOneEl.addEventListener("click", () => {
  //the Element creation
  creationTask();
  // clear All tasks
  const AllnewTaskEl = document.querySelectorAll(".task");
  AllnewTaskEl.forEach((ts) => {
    btnTwoEl.addEventListener("click", () => {
      ts.remove();
      updatelocalStorage();
    });
  });
  // Add Tasks localStorage
  updatelocalStorage();
});

function creationTask(todotasks) {
  // if there is date in localStorage we can use it here instead of (((inputEl.value)))
  if (todotasks) {
    inputEl.value = todotasks.name;
  }
  const newTaskEl = document.createElement("div");
  newTaskEl.classList.add("task");
  //add task name from localStorage
  newTaskEl.innerHTML = inputEl.value;
  medialEl.appendChild(newTaskEl);
  inputEl.value = ``;
  // delete elelment one by one
  const trashEl = document.createElement("div");
  trashEl.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  newTaskEl.appendChild(trashEl);
  trashEl.addEventListener("click", () => {
    newTaskEl.remove();
    updatelocalStorage();
  });
}
// Store the date in the localStorage here
function updatelocalStorage() {
  const allTasks = document.querySelectorAll(".task");
  let todotasks = [];
  allTasks.forEach((tas) => {
    console.log(tas);
    todotasks.push({
      name: tas.innerText,
      info: "I'm From local Storage",
    });
  });
  // to change the date
  window.localStorage.setItem("todotasks", JSON.stringify(todotasks));
}
