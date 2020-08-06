import {headerInfoMarkup} from "./view/header";
import {tripMainContainerMarkup} from "./view/tripContainer";
import {tripInfoMainMarkup} from "./view/tripInfo";
import {tripCostMarkup} from "./view/tripCost";
import {tripControlsMarkup} from "./view/tripControls";
import {tripMenuMarkup} from "./view/tripMenu";
import {tripFilterMarkup} from "./view/tripFilter";
import {newEventButtonMarkup} from "./view/newEventButton";
import {tripEventsSectionMarkup} from "./view/tripEventsSection";
import {tripSortingMarkup} from "./view/tripSorting";
import {addingTripMarkup} from "./view/addingTrip";
import {tripListMarkup} from "./view/tripList";
import {tripDayMarkup} from "./view/tripDay";
import {tripEventMarkup} from "./view/tripEvent";

function renderTemplate(container, template, where = `beforeend`, timesToRender = 1) {
  let fragment = ``;
  for (let i = 0; i < timesToRender; i++) {
    fragment += template;
  }
  container.insertAdjacentHTML(where, fragment);
}

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

const mainPageSection = document.querySelector(`.page-main`);
const mainPageContainer = mainPageSection.querySelector(`.page-body__container`);

renderTemplate(
    mainPageContainer,
    tripEventsSectionMarkup()
);

const tripEventsSection = mainPageSection.querySelector(`.trip-events`);
renderTemplate(
    tripEventsSection,
    tripSortingMarkup()
);
renderTemplate(
    tripEventsSection,
    addingTripMarkup()
);
renderTemplate(
    tripEventsSection,
    tripListMarkup()
);

const tripDayList = mainPageSection.querySelector(`.trip-days`);
renderTemplate(
    tripDayList,
    tripDayMarkup()
);

const tripList = tripDayList.querySelector(`.trip-events__list`);
renderTemplate(
    tripList,
    tripEventMarkup(),
    `beforeend`,
    3
);
