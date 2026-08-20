import "./style.css";
import { renderNavigation } from "./navigation";
import { renderGarageView } from "./garage";

const nav: HTMLElement = renderNavigation();
const garageView: HTMLElement = renderGarageView();

document.body.append(nav, garageView);
