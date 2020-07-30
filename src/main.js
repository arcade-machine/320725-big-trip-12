'use strict';

function renderTemplate(container, template, where = `beforeend`, timesToRender = 1) {
  let fragment = ``;
  for (let i = 0; i < timesToRender; i++) {
    fragment += template;
  }
  container.insertAdjacentHTML(where, fragment);
}

const headerInfoMarkup = () => {
  return `
    <section class="trip-main__trip-info  trip-info">
    </section>
  `;
};

const tripMainContainerMarkup = () => {
  return `
    <div class="trip-main">
    </div>
  `;
};

const tripInfoMainMarkup = () => {
  return `
    <div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
    </div>
  `;
};

const tripCostMarkup = () => {
  return `
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
    </p>
  `;
};

const tripControlsMarkup = () => {
  return `
    <div class="trip-main__trip-controls  trip-controls">
    </div>
  `;
};

const tripMenuMarkup = () => {
  return `
    <h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>
  `;
};

const tripFilterMarkup = () => {
  return `
    <h2 class="visually-hidden">Filter events</h2>
    <form class="trip-filters" action="#" method="get">
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
        <label class="trip-filters__filter-label" for="filter-future">Future</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
        <label class="trip-filters__filter-label" for="filter-past">Past</label>
      </div>

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `;
};

const newEventButtonMarkup = () => {
  return `
    <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
  `;
};

const mainHeader = document.querySelector(`.page-header`);
const mainHeaderContainer = mainHeader.querySelector(`.page-header__container`);

renderTemplate(
    mainHeaderContainer,
    tripMainContainerMarkup()
);

const tripMainSection = mainHeader.querySelector(`.trip-main`);

renderTemplate(
    tripMainSection,
    headerInfoMarkup(),
    `afterbegin`
);

const tripInfoSection = tripMainSection.querySelector(`.trip-info`);

renderTemplate(
    tripInfoSection,
    tripInfoMainMarkup()
);
renderTemplate(
    tripInfoSection,
    tripCostMarkup()
);
renderTemplate(
    tripMainSection,
    tripControlsMarkup()
);

const tripControlsSection = tripMainSection.querySelector(`.trip-controls`);
renderTemplate(
    tripControlsSection,
    tripMenuMarkup()
);
renderTemplate(
    tripControlsSection,
    tripFilterMarkup()
);
renderTemplate(
    tripMainSection,
    newEventButtonMarkup()
);
