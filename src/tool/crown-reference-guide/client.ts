interface CrownPos {
  id: number;
  title: string;
  desc: string;
  detail: string;
  winding: string;
  hack: string;
  note?: string;
}

interface Movement {
  id: string;
  name: string;
  maker: string;
  positions: CrownPos[];
  posCount: number;
}

const mainEl = document.querySelector('.tool-main-card') as HTMLElement;
const ui = mainEl ? JSON.parse(mainEl.dataset.ui || '{}') : {};

let currentMovementId = 'eta-2824';

const movements: Movement[] = [
  {
    id: 'eta-2824', name: 'ETA 2824-2 / Sellita SW200', maker: 'ETA / Sellita', posCount: 3,
    positions: [
      { id: 0, title: ui.position0Title || 'Resting', desc: ui.position0Desc || 'Crown is pushed in. Watch runs normally.', detail: ui.position0Detail || 'No winding or setting functions are engaged.', winding: '\u2014', hack: '\u2014' },
      { id: 1, title: ui.position1Title || 'Manual Winding', desc: ui.position1Desc || 'Turn the crown clockwise to wind the mainspring.', detail: ui.position1Detail || 'About 30\u201340 full rotations from a dead stop.', winding: 'CW', hack: '\u2014' },
      { id: 2, title: ui.position2Title || 'Date Quick-Set', desc: ui.position2Desc || 'Turn the crown clockwise to advance the date.', detail: ui.position2Detail || 'AVOID quick-setting between 9pm and 3am.', winding: '\u2014', hack: '\u2014', note: 'Avoid quick-set date between 9pm\u20133am' },
      { id: 3, title: ui.position3Title || 'Time Setting', desc: ui.position3Desc || 'Turn the crown in either direction to move the hands.', detail: ui.position3Detail || 'Pull to position 3 and rotate to set time.', winding: '\u2014', hack: ui.hasHack || 'Yes' },
    ],
  },
  {
    id: 'eta-2892', name: 'ETA 2892-A2 / Sellita SW300', maker: 'ETA / Sellita', posCount: 3,
    positions: [
      { id: 0, title: ui.position0Title || 'Resting', desc: ui.position0Desc || 'Crown pushed in. Thin movement running normally.', detail: ui.position0Detail || 'Slim profile and efficient automatic winding.', winding: '\u2014', hack: '\u2014' },
      { id: 1, title: ui.position1Title || 'Manual Winding', desc: ui.position1Desc || 'Turn clockwise to wind.', detail: ui.position1Detail || 'About 40 turns from dead stop.', winding: 'CW', hack: '\u2014' },
      { id: 2, title: ui.position2Title || 'Date Quick-Set', desc: ui.position2Desc || 'Turn clockwise to advance the date.', detail: ui.position2Detail || 'Avoid quick-set between 9pm and 3am.', winding: '\u2014', hack: '\u2014', note: 'Avoid quick-set date between 9pm\u20133am' },
      { id: 3, title: ui.position3Title || 'Time Setting', desc: ui.position3Desc || 'Rotate freely. Hacking seconds stop.', detail: ui.position3Detail || 'Use a time reference for perfect sync.', winding: '\u2014', hack: ui.hasHack || 'Yes' },
    ],
  },
  {
    id: 'valjoux-7750', name: 'Valjoux 7750 / Sellita SW500', maker: 'ETA / Sellita', posCount: 3,
    positions: [
      { id: 0, title: ui.position0Title || 'Resting', desc: ui.position0Desc || 'Crown pushed in. Chronograph runs independently.', detail: ui.position0Detail || 'Cam-switched chronograph mechanism.', winding: '\u2014', hack: '\u2014' },
      { id: 1, title: ui.position1Title || 'Manual Winding', desc: ui.position1Desc || 'Turn clockwise to wind.', detail: ui.position1Detail || 'Ball bearing rotor. About 40 turns.', winding: 'CW', hack: '\u2014' },
      { id: 2, title: ui.position2Title || 'Date Quick-Set', desc: ui.position2Desc || 'Turn clockwise to advance the date.', detail: ui.position2Detail || 'Day is linked to hour hand, no quick-set.', winding: '\u2014', hack: '\u2014', note: 'Day advances with time only' },
      { id: 3, title: ui.position3Title || 'Time Setting', desc: ui.position3Desc || 'Rotate freely. Seconds hack.', detail: ui.position3Detail || 'Stop chronograph before setting time.', winding: '\u2014', hack: ui.hasHack || 'Yes' },
    ],
  },
  {
    id: 'miyota-8215', name: 'Miyota 8215 / 8315', maker: 'Citizen Miyota', posCount: 2,
    positions: [
      { id: 0, title: ui.position0Title || 'Resting', desc: ui.position0Desc || 'Crown pushed in. Automatic winding.', detail: ui.position0Detail || 'Does not hack. Unidirectional rotor.', winding: '\u2014', hack: '\u2014' },
      { id: 1, title: ui.position1Title || 'Manual Winding', desc: ui.position1Desc || 'Turn clockwise to wind.', detail: ui.position1Detail || 'Unidirectional rotor. No date quick-set on base model.', winding: 'CW', hack: ui.noHack || 'No' },
      { id: 2, title: '\u2014', desc: '\u2014', detail: '\u2014', winding: '\u2014', hack: '\u2014' },
      { id: 3, title: ui.position3Title || 'Time Setting', desc: ui.position3Desc || 'Rotate to set hands. No hacking.', detail: ui.position3Detail || 'No hack. Rotate past desired time then back.', winding: '\u2014', hack: ui.noHack || 'No' },
    ],
  },
  {
    id: 'miyota-9015', name: 'Miyota 9015', maker: 'Citizen Miyota', posCount: 3,
    positions: [
      { id: 0, title: ui.position0Title || 'Resting', desc: ui.position0Desc || 'Crown pushed in. 28,800 vph high-beat.', detail: ui.position0Detail || 'Slim. Direct competitor to ETA 2892.', winding: '\u2014', hack: '\u2014' },
      { id: 1, title: ui.position1Title || 'Manual Winding', desc: ui.position1Desc || 'Turn clockwise. Quiet, smooth winding.', detail: ui.position1Detail || 'Bidirectional rotor. About 35 turns.', winding: 'CW', hack: '\u2014' },
      { id: 2, title: ui.position2Title || 'Date Quick-Set', desc: ui.position2Desc || 'Turn clockwise to advance date.', detail: ui.position2Detail || 'Avoid quick-set between 9pm and 4am.', winding: '\u2014', hack: '\u2014', note: 'Avoid quick-set date between 9pm\u20134am' },
      { id: 3, title: ui.position3Title || 'Time Setting', desc: ui.position3Desc || 'Rotate freely. Hacking stops seconds.', detail: ui.position3Detail || 'Smooth hand movement.', winding: '\u2014', hack: ui.hasHack || 'Yes' },
    ],
  },
  {
    id: 'seiko-nh35', name: 'Seiko NH35 / 4R35', maker: 'Seiko Instruments', posCount: 3,
    positions: [
      { id: 0, title: ui.position0Title || 'Resting', desc: ui.position0Desc || 'Crown pushed in. Magic Lever winding.', detail: ui.position0Detail || 'Efficient winding with minimal rotor movement.', winding: '\u2014', hack: '\u2014' },
      { id: 1, title: ui.position1Title || 'Manual Winding', desc: ui.position1Desc || 'Turn clockwise. Notched winding feel.', detail: ui.position1Detail || 'About 40\u201350 turns from dead.', winding: 'CW', hack: '\u2014' },
      { id: 2, title: ui.position2Title || 'Date Quick-Set', desc: ui.position2Desc || 'Turn clockwise to advance date.', detail: ui.position2Detail || 'Avoid 9pm\u20133am. Day-date versions quick-set both.', winding: '\u2014', hack: '\u2014', note: 'Avoid quick-set date between 9pm\u20133am' },
      { id: 3, title: ui.position3Title || 'Time Setting', desc: ui.position3Desc || 'Rotate freely. Hacking stops seconds.', detail: ui.position3Detail || '3Hz sweep. Set and push crown back.', winding: '\u2014', hack: ui.hasHack || 'Yes' },
    ],
  },
  {
    id: 'seiko-6r35', name: 'Seiko 6R35', maker: 'Seiko', posCount: 3,
    positions: [
      { id: 0, title: ui.position0Title || 'Resting', desc: ui.position0Desc || 'Crown pushed in. 70h power reserve.', detail: ui.position0Detail || 'Improved regulation over 4R series.', winding: '\u2014', hack: '\u2014' },
      { id: 1, title: ui.position1Title || 'Manual Winding', desc: ui.position1Desc || 'Turn clockwise. Extended mainspring.', detail: ui.position1Detail || 'About 50\u201360 turns from dead.', winding: 'CW', hack: '\u2014' },
      { id: 2, title: ui.position2Title || 'Date Quick-Set', desc: ui.position2Desc || 'Turn clockwise to advance date.', detail: ui.position2Detail || 'Avoid 9pm\u20133am. Instant date change.', winding: '\u2014', hack: '\u2014', note: 'Avoid quick-set date between 9pm\u20133am' },
      { id: 3, title: ui.position3Title || 'Time Setting', desc: ui.position3Desc || 'Rotate freely. Hacking.', detail: ui.position3Detail || '70h reserve means less frequent winding.', winding: '\u2014', hack: ui.hasHack || 'Yes' },
    ],
  },
  {
    id: 'unitas-6498', name: 'Unitas 6497 / 6498', maker: 'ETA / Unitas', posCount: 1,
    positions: [
      { id: 0, title: ui.position0Title || 'Resting', desc: ui.position0Desc || 'Crown pushed in. Hand-wound, small seconds.', detail: ui.position0Detail || 'Classic pocket watch caliber. No date.', winding: '\u2014', hack: '\u2014' },
      { id: 1, title: ui.position1Title || 'Manual Winding', desc: ui.position1Desc || 'Turn clockwise. 18,000 vph (2.5 Hz).', detail: ui.position1Detail || 'About 30\u201335 turns. Vintage character.', winding: 'CW', hack: '\u2014' },
      { id: 2, title: '\u2014', desc: '\u2014', detail: '\u2014', winding: '\u2014', hack: '\u2014' },
      { id: 3, title: ui.position3Title || 'Time Setting', desc: ui.position3Desc || 'Pull to set. Rotate freely.', detail: ui.position3Detail || 'No hacking. Large crown for easy setting.', winding: '\u2014', hack: ui.noHack || 'No' },
    ],
  },
];

const crownStem = document.querySelector('.crown-stem') as SVGElement;
const crownHead = document.querySelector('.crown-head') as SVGElement;
const posChips = document.querySelectorAll('.pos-chip') as NodeListOf<HTMLButtonElement>;

const positionBadge = document.getElementById('position-badge') as HTMLElement;
const positionName = document.getElementById('position-name') as HTMLElement;
const panelDesc = document.getElementById('panel-desc') as HTMLElement;
const panelDetail = document.getElementById('panel-detail') as HTMLElement;
const panelNote = document.getElementById('panel-note') as HTMLElement;
const panelNoteText = document.getElementById('panel-note-text') as HTMLElement;
const attrWindingValue = document.getElementById('attr-winding-value') as HTMLElement;
const attrHackValue = document.getElementById('attr-hack-value') as HTMLElement;
const movementSelect = document.getElementById('movement-select') as HTMLSelectElement;
const pullBtn = document.getElementById('pull-btn') as HTMLButtonElement;
const arrowCw = document.querySelector('.arrow-cw') as SVGElement;
const arrowCcw = document.querySelector('.arrow-ccw') as SVGElement;

function getMovement(id: string): Movement {
  return movements.find((m) => m.id === id) || movements[0];
}

function getEffectivePositions(movement: Movement): CrownPos[] {
  return movement.positions.filter((p) => p.title !== '\u2014');
}

function setCrownPull(pos: number) {
  const offset = pos * 8;
  crownStem.setAttribute('width', String(28 + offset));
  crownHead.setAttribute('x', String(158 + offset));
}

function setPosHighlight(pos: number) {
  posChips.forEach((chip) => {
    chip.classList.toggle('active', parseInt(chip.dataset.pos || '0', 10) === pos);
  });
}

function setArrows(pos: number, movement: Movement) {
  const p = movement.positions[pos];
  arrowCw.style.opacity = '0';
  arrowCcw.style.opacity = '0';
  if (p && p.winding === 'CW') arrowCw.style.opacity = '0.8';
  else if (p && p.winding === 'CCW') arrowCcw.style.opacity = '0.8';
}

function setPanel(pos: number, movement: Movement) {
  const p = movement.positions[pos];
  if (!p || p.title === '\u2014') {
    const eff = getEffectivePositions(movement);
    const nearest = eff.reduce((a, b) => Math.abs(a.id - pos) < Math.abs(b.id - pos) ? a : b);
    setPanel(nearest.id, movement);
    return;
  }
  positionBadge.textContent = String(p.id);
  positionName.textContent = p.title;
  panelDesc.textContent = p.desc;
  panelDetail.textContent = p.detail;
  attrWindingValue.textContent = p.winding;
  attrHackValue.textContent = p.hack;
  panelNote.style.display = p.note ? 'flex' : 'none';
  if (p.note) panelNoteText.textContent = p.note;
}


function selectPosition(pos: number, movement: Movement) {
  const eff = getEffectivePositions(movement);
  const exists = eff.some((p) => p.id === pos);
  const target = exists ? pos : eff.reduce((a, b) => Math.abs(a.id - pos) < Math.abs(b.id - pos) ? a : b).id;
  setCrownPull(target);
  setPosHighlight(target);
  setArrows(target, movement);
  setPanel(target, movement);

}

function loadMovement(id: string) {
  currentMovementId = id;
  selectPosition(0, getMovement(id));
}

posChips.forEach((chip) => {
  chip.addEventListener('click', () => selectPosition(parseInt(chip.dataset.pos || '0', 10), getMovement(currentMovementId)));
});


movementSelect.addEventListener('change', () => loadMovement(movementSelect.value));

let pullStep = 0;
pullBtn.addEventListener('click', () => {
  const eff = getEffectivePositions(getMovement(currentMovementId));
  pullStep = (pullStep + 1) % eff.length;
  selectPosition(eff[pullStep].id, getMovement(currentMovementId));
});

loadMovement(currentMovementId);
