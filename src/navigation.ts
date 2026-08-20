export function renderNavigation(): HTMLElement {
  const nav = document.createElement("nav");
  nav.className = "navigation";

  const garageButton: HTMLButtonElement = document.createElement("button");
  garageButton.className = "button nav-button";
  garageButton.textContent = "To garage";

  const winnersButton: HTMLButtonElement = document.createElement("button");
  winnersButton.className = "button nav-button";
  winnersButton.textContent = "To winners";

  nav.append(garageButton, winnersButton);
  return nav;
}
