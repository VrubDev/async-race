export function renderNavigation(): HTMLElement {
  const nav = document.createElement("nav");
  nav.className = "navigation";

  const garageButton: HTMLButtonElement = document.createElement("button");
  garageButton.className = "button nav-button";
  garageButton.textContent = "To garage";
  garageButton.addEventListener("click", (): void => {
    const garage = document.querySelector(".garage-view");
    const winners = document.querySelector(".winners-view");

    if (garage && winners) {
      garage.classList.remove("hidden");
      winners.classList.add("hidden");
    }
  });

  const winnersButton: HTMLButtonElement = document.createElement("button");
  winnersButton.className = "button nav-button";
  winnersButton.textContent = "To winners";
  winnersButton.addEventListener("click", (): void => {
    const garage = document.querySelector(".garage-view");
    const winners = document.querySelector(".winners-view");

    if (garage && winners) {
      garage.classList.add("hidden");
      winners.classList.remove("hidden");
    }
  });

  nav.append(garageButton, winnersButton);
  return nav;
}
