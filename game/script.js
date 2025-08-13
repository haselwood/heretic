const MIN_INTERVAL = 2000;
const MAX_INTERVAL = 9000;
const SAD_INTERVAL = 500;
const EVIL_INTERVAL = 2000;
const PURE_INTERVAL = 1500;
let purity = 0;
let isGameWon = false;


const getInterval = () =>
  Date.now() + MIN_INTERVAL + Math.floor(Math.random() * MAX_INTERVAL);
const getSadInterval = () => Date.now() + SAD_INTERVAL;
const getUberStatus = () => Math.random() > 0.8;
const getEvilInterval = () => Date.now() + EVIL_INTERVAL;
const getPureInterval = () => Date.now() + PURE_INTERVAL;


const PURITY_TARGET = 20; 
const purityFillEl = document.querySelector('.purity-fill');
const winEls = Array.from(document.querySelectorAll('.win'));

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const updatePurity = (delta) => {
  purity = clamp(purity + delta, 0, PURITY_TARGET);
  if (purityFillEl) {
    const percent = (purity / PURITY_TARGET) * 100;
    purityFillEl.style.width = `${percent}%`;
    if (percent >= 100) {
      purityFillEl.classList.add('full');
    } else {
      purityFillEl.classList.remove('full');
    }
  }
  if (purity >= PURITY_TARGET && !isGameWon) {
    // Show win screen and stop the game loop/clicks
    isGameWon = true;
    winEls.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.display = 'block';
      }
    });
    const board = document.querySelector('.board');
    if (board instanceof HTMLElement) {
      board.style.display = 'none';
    }
    const titleEl = document.querySelector('.purity-title');
    if (titleEl instanceof HTMLElement) {
      titleEl.textContent = "You've purified all the demons!";
    }
  }
};

const setPortalType = (demon) => {
  const portalEl = demon.node; // container div
  if (!portalEl) return;
  portalEl.classList.remove("portal", "uber-portal", "pure", "uber-pure");
  portalEl.classList.add(demon.uber ? "uber-portal" : "portal");
};

const setPortalAppearance = (demon, appearance) => {
  const portalEl = demon.node;
  if (!portalEl) return;
  portalEl.classList.remove("portal", "uber-portal", "pure", "uber-pure");
  portalEl.classList.add(appearance);
};

const setPortalState = (demon, state) => {
  const portalEl = demon.node;
  if (!portalEl) return;
  portalEl.classList.remove(
    "state-evil",
    "state-sad",
    "state-leaving",
    "state-gone",
    "state-pure"
  );
  portalEl.classList.add(`state-${state}`);
};

const setDemonImage = (demon, mood) => {
  const imgEl = demon.node?.children?.[0];
  if (!imgEl) return;
  const prefix = demon.uber ? "img/uber-demon" : "img/demon";
  switch (mood) {
    case "evil":
      imgEl.src = demon.uber ? "img/uber-demon-evil.png" : "img/demon-evil.png";
      break;
    case "leaving":
      imgEl.src = demon.uber ? "img/uber-demon-leaving.png" : "img/demon-leaving.png";
      break;
    case "sad":
      imgEl.src = demon.uber ? "img/uber-demon-sad.png" : "img/demon-sad.png";
      break;
    case "pure":
      imgEl.src = demon.uber ? "img/uber-demon-pure.png" : "img/demon-pure.png";
      break;
  }
};

const showDemon = (demon, show) => {
  const imgEl = demon.node?.children?.[0];
  if (!imgEl) return;
  // Force a reflow when transitioning from hidden to visible to ensure CSS transitions fire
  if (show) {
    // prepare for fade-in
    imgEl.classList.add("gone");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    imgEl.offsetHeight; // reflow
  }
  imgEl.classList.toggle("gone", !show);
};

const demons = Array.from({ length: 12 }, (_, idx) => ({
  status: "gone",
  next: Date.now() + 500 + Math.floor(Math.random() * 5000),
  uber: false,
  node: document.getElementById(`portal-${idx}`),
}));

const spawnDemon = (demon) => {
  demon.uber = getUberStatus();
  setPortalType(demon);
  setDemonImage(demon, "evil");
  setPortalState(demon, "evil");
  showDemon(demon, true);
  demon.status = "evil";
  demon.next = getEvilInterval();
};

const getNextStatus = (demon) => {
  switch (demon.status) {
    case "gone":
      spawnDemon(demon);
      break;
    case "evil":
      // Transition to sad briefly
      setDemonImage(demon, "sad");
      setPortalState(demon, "sad");
      demon.status = "sad";
      demon.next = getSadInterval();
      break;
    case "sad":
      // Start leaving animation then disappear
      setDemonImage(demon, "leaving");
      setPortalAppearance(demon, demon.uber ? "uber-portal" : "portal");
      setPortalState(demon, "leaving");
      demon.status = "leaving";
      demon.next = getSadInterval();
      break;
    case "pure":
      // Pure should fade to gone directly and restart, no leaving phase
      showDemon(demon, false);
      demon.uber = false;
      setPortalAppearance(demon, "portal");
      setPortalState(demon, "gone");
      demon.status = "gone";
      demon.next = getInterval();
      break;
    case "leaving":
      // Hide for a random interval, then respawn as either uber or regular
      showDemon(demon, false);
      // Once gone, hole should be a regular portal
      demon.uber = false;
      setPortalType(demon);
      setPortalState(demon, "gone");
      demon.status = "gone";
      demon.next = getInterval();
      break;
  }
};

// Ensure portals start hidden and staggered
const initializePortals = () => {
  for (let i = 0; i < demons.length; i++) {
    const demon = demons[i];
    demon.status = "gone";
    demon.uber = false;
    setPortalType(demon);
    setPortalState(demon, "gone");
    showDemon(demon, false);
    demon.next = Date.now() + 500 + Math.floor(Math.random() * 5000);
  }
};

const nextFrame = () => {
    if (isGameWon) return;
    const now = Date.now();
    for (let i = 0; i < demons.length; i++) {
      if (demons[i].next < now) {
        getNextStatus(demons[i]);
      }
    }
    requestAnimationFrame(nextFrame);
  };
initializePortals();
requestAnimationFrame(nextFrame);

// Click-to-purify: evil or sad → pure immediately
const boardEl = document.querySelector('.board');
if (boardEl) {
  boardEl.addEventListener('click', (event) => {
    const imgEl = event.target instanceof Element ? event.target.closest('img.demon') : null;
    if (!imgEl) return;
    const indexAttr = imgEl.getAttribute('data-index');
    const index = indexAttr ? parseInt(indexAttr, 10) : NaN;
    if (Number.isNaN(index)) return;
    const demon = demons[index];
    if (!demon) return;
    if (demon.status === 'evil' || demon.status === 'sad') {
      setDemonImage(demon, 'pure');
      setPortalState(demon, 'pure');
      setPortalAppearance(demon, demon.uber ? 'uber-pure' : 'pure');
      updatePurity(demon.uber ? 2 : 1);
      demon.status = 'pure';
      demon.next = getPureInterval();
    }
  });
}


