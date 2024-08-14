import gameState, { handleUserAction } from "/src/gameState.js";

 import { TICK_RATE } from "/src/constants.js";
import initButtons from "/src//buttons.js";
import { toggleIcons } from "../ui.js";

// not use setinterval

function init() {
  toggleIcons(false);
  initButtons(handleUserAction);

  let newtTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (newtTimeToTick <= now) {
      gameState.tick();
      newtTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame); // first call
  // nextAnimationFrame()); // first call
}

init();
 