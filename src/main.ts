import "./style.css";
import { renderNavigation } from "./navigation";
import { renderGarageView } from "./garage";
import { renderWinnersView } from "./winners";

const nav: HTMLElement = renderNavigation();
const garageView: HTMLElement = renderGarageView();
const winnersView: HTMLElement = renderWinnersView();

document.body.append(nav, garageView, winnersView);
