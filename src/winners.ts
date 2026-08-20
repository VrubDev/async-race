const WINNERS_TEMPLATE = `
  <div class="winners-title-block">
    <h2>Winners (<span class="winners-count">0</span>)</h2>
    <h3>Page #<span class="winners-page">1</span></h3>
  </div>

  <table class="winners-table">
    <thead>
      <tr>
        <th>Number</th>
        <th>Car</th>
        <th>Name</th>
        <th class="table-sort sort-wins">Wins</th>
        <th class="table-sort sort-time">Best time (seconds)</th>
      </tr>
    </thead>
    <tbody class="winners-table-body">
    </tbody>
  </table>

  <div class="pagination">
    <button type="button" class="button button-prev" disabled>Prev</button>
    <button type="button" class="button button-next" disabled>Next</button>
  </div>
`;

export function renderWinnersView(): HTMLDivElement {
  const view = document.createElement("div");
  view.className = "winners-view hidden";
  view.innerHTML = WINNERS_TEMPLATE;
  return view;
}
