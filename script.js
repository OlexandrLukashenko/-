// --- створюємо об'єкти для суперників ---
const pokemon1 = { name: "Покемон 1", hp: 100 };
const pokemon2 = { name: "Покемон 2", hp: 100 };

// --- функція для оновлення стану ---
function updateBars() {
  document.getElementById("hp1").textContent = pokemon1.hp;
  document.getElementById("hp2").textContent = pokemon2.hp;

  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  bar1.style.width = pokemon1.hp + "%";
  bar2.style.width = pokemon2.hp + "%";

  bar1.style.background = pokemon1.hp > 50 ? "green" : pokemon1.hp > 20 ? "orange" : "red";
  bar2.style.background = pokemon2.hp > 50 ? "green" : pokemon2.hp > 20 ? "orange" : "red";
}

// --- функція для нанесення удару ---
function attack(type) {
  if (pokemon1.hp <= 0 || pokemon2.hp <= 0) {
    alert("Гра завершена! Почніть спочатку.");
    return;
  }

  let damage1, damage2;
  if (type === 'normal') {
    damage1 = Math.floor(Math.random() * 10) + 5;  // 5–15
    damage2 = Math.floor(Math.random() * 10) + 5;
  } else if (type === 'strong') {
    damage1 = Math.floor(Math.random() * 20) + 10; // 10–30
    damage2 = Math.floor(Math.random() * 20) + 10;
  }

  pokemon1.hp = Math.max(0, pokemon1.hp - damage2);
  pokemon2.hp = Math.max(0, pokemon2.hp - damage1);

  updateBars();

  if (pokemon1.hp === 0 && pokemon2.hp === 0) {
    alert("Нічия!");
  } else if (pokemon1.hp === 0) {
    alert(pokemon2.name + " переміг!");
  } else if (pokemon2.hp === 0) {
    alert(pokemon1.name + " переміг!");
  }
}

// --- стартова ініціалізація ---
updateBars();
