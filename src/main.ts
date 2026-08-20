import "./style.css";
import { renderNavigation } from "./navigation";

const nav: HTMLElement = renderNavigation();

document.body.append(nav);
