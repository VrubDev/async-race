const GARAGE_TEMPLATE = `
  <div class="garage-controls">
        <div class="control-panel create-panel">
          <input type="text" class="create-name-input" placeholder="Car name" />
          <input type="color" class="create-color-input" value="#e6e6e6" />
          <button type="button" class="button button-create">Create</button>
        </div>
        <div class="control-panel update-panel">
          <input
            type="text"
            class="update-name-input"
            placeholder="Car name"
            disabled
          />
          <input
            type="color"
            class="update-color-input"
            value="#e6e6e6"
            disabled
          />
          <button type="button" class="button button-update" disabled>
            Update
          </button>
        </div>
        <div class="race-actions">
          <button type="button" class="button button-race">Race</button>
          <button type="button" class="button button-reset">Reset</button>
          <button type="button" class="button button-generate">
            Generate cars
          </button>
        </div>
      </div>
      <div class="garage-title-block">
        <h2>Garage (<span class="cars-count">0</span>)</h2>
        <h3>Page #<span class="current-page">1</span></h3>
      </div>
      <div class="cars-track-list"></div>
      <div class="pagination">
        <button type="button" class="button button-prev" disabled>Prev</button>
        <button type="button" class="button button-next">Next</button>
      </div>
  `;

export function renderGarageView(): HTMLDivElement {
  const view: HTMLDivElement = document.createElement("div");
  view.className = "garage-view";
  view.innerHTML = GARAGE_TEMPLATE;
  return view;
}
