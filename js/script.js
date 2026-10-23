"use strict";

// Элементы уже найдены. Их НЕ нужно искать повторно.
const rocket = document.querySelector("#rocket");
const rocketIcon = document.querySelector("#rocket-icon");
const moveButton = document.querySelector("#move-button");
const colorButton = document.querySelector("#color-button");
const jumpButton = document.querySelector("#jump-button");
const resetButton = document.querySelector("#reset-button");
const status = document.querySelector("#status");

// ЗАДАНИЕ 1. Кнопка «Переместить».
moveButton.addEventListener("click", () => {
  // TODO 1: переключите у rocket класс "is-moved" методом classList.toggle().
  rocket.classList.toggle("is-moved");
  // TODO 2: измените текст status через textContent.
  status.textContent="Ракета переместилась";
});

// ЗАДАНИЕ 2. Кнопка «Сменить цвет».
colorButton.addEventListener("click", () => {
  // TODO 3: переключите у rocket класс "is-colored".
  rocket.classList.toggle("is-colored");
  // TODO 4: измените текст status.
  status.textContent="Цвет поменялся";
});

// ЗАДАНИЕ 3. Кнопка «Подпрыгнуть».
jumpButton.addEventListener("click", () => {
  rocketIcon.animate(
    [
     { transform: "translateY(0)" },
      { transform: "translateY(-25px)" },
       { transform: "translateY(0)" },
  ],
   { duration: 600, easing: "ease-in-out" }
);
  // TODO 5: вызовите rocketIcon.animate() с тремя кадрами:
  //   { transform: "translateY(0)" }
  
  //   { transform: "translateY(-45px)" }
 
  //   { transform: "translateY(0)" }
 
  // Параметры: { duration: 600, easing: "ease-in-out" }.
 
  // TODO 6: измените текст status.
  status.textContent="Ракета подпрыгнула";
  });
  

// ЗАДАНИЕ 4. Кнопка «Сбросить».
resetButton.addEventListener("click", () => {
  // TODO 7: удалите у rocket оба класса через classList.remove().
  rocket.classList.remove("is-moved");
  rocket.classList.remove("is-colored");
  // TODO 8: измените текст status на "Настройки сброшены.".
  status.textContent="Настройки сброшены";
});
