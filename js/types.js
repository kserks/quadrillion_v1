const TYPES = {
  'A': {
    pointer: {
      // default                 flipH         flipV          flipHV
      0: [ { x: 0, y: 3 }, { x: 3, y: 3 }, { x: 0, y: 0 }, { x: 3, y: 0 } ],
      1: [ { x: 0, y: 0 }, { x: 3, y: 0 }, { x: 0, y: 3 }, { x: 3, y: 3 } ],
      2: [ { x: 3, y: 0 }, { x: 0, y: 0 }, { x: 3, y: 3 }, { x: 0, y: 3 } ],
      3: [ { x: 3, y: 3 }, { x: 0, y: 3 }, { x: 3, y: 0 }, { x: 0, y: 0 } ]
    },
    color: 'yellow',
    shape: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [1, 1, 1, 1],
    ]
  },
  
  'B': {
    pointer: {
      // default                 flipH         flipV          flipHV
      0: [ { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 1 }, { x: 2, y: 1 } ],
      1: [ { x: 1, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 1, y: 2 } ],
      2: [ { x: 2, y: 1 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 1 } ],
      3: [ { x: 1, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 0 }, { x: 1, y: 0 } ]
    },
    color: 'gold',
    shape: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 1, 0],
    ]
  },

  'C': {
    pointer: {
      // default                 flipH         flipV          flipHV
      0: [ { x: 0, y: 0 }, { x: 3, y: 0 }, { x: 0, y: 3 }, { x: 3, y: 3 } ],
      1: [ { x: 3, y: 0 }, { x: 0, y: 0 }, { x: 3, y: 3 }, { x: 0, y: 3 } ],
      2: [ { x: 3, y: 3 }, { x: 0, y: 3 }, { x: 3, y: 0 }, { x: 0, y: 0 } ],
      3: [ { x: 0, y: 3 }, { x: 3, y: 3 }, { x: 0, y: 0 }, { x: 3, y: 0 } ]
    },
    color: 'crimson',
    shape: [
      [1, 1, 1, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
  },
  'D': {
    pointer: {
      // default                 flipH         flipV          flipHV
      0: [ { x: 0, y: 2 }, { x: 2, y: 2 }, { x: 0, y: 0 }, { x: 2, y: 0 } ],
      1: [ { x: 0, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 2 }, { x: 2, y: 2 } ],
      2: [ { x: 2, y: 0 }, { x: 0, y: 0 }, { x: 2, y: 2 }, { x: 0, y: 2 } ],
      3: [ { x: 2, y: 2 }, { x: 0, y: 2 }, { x: 2, y: 0 }, { x: 0, y: 0 } ]
    },
    color: 'brown',
    shape: [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ]
  },
  'E': {
    pointer: {
      // default                 flipH         flipV          flipHV
      0: [ { x: 0, y: 0 }, { x: 3, y: 0 }, { x: 0, y: 3 }, { x: 3, y: 3 } ],
      1: [ { x: 3, y: 0 }, { x: 0, y: 0 }, { x: 3, y: 3 }, { x: 0, y: 3 } ],
      2: [ { x: 3, y: 3 }, { x: 0, y: 3 }, { x: 3, y: 0 }, { x: 0, y: 0 } ],
      3: [ { x: 0, y: 3 }, { x: 3, y: 3 }, { x: 0, y: 0 }, { x: 3, y: 0 } ]
    },
    color: 'pink',
    shape: [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
    ]
  },
  'F': {
    pointer: {
      // default                 flipH         flipV          flipHV
      0: [ { x: 0, y: 2 }, { x: 2, y: 2 }, { x: 0, y: 0 }, { x: 2, y: 0 } ],
      1: [ { x: 0, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 2 }, { x: 2, y: 2 } ],
      2: [ { x: 2, y: 0 }, { x: 0, y: 0 }, { x: 2, y: 2 }, { x: 0, y: 2 } ],
      3: [ { x: 2, y: 2 }, { x: 0, y: 2 }, { x: 2, y: 0 }, { x: 0, y: 0 } ]
    },
    color: 'magenta',
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [1, 0, 0],
    ]
  },
  'G': {
    pointer: {
      // default                 flipH         flipV          flipHV
      0: [ { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 1 }, { x: 2, y: 1 } ],
      1: [ { x: 1, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 1, y: 2 } ],
      2: [ { x: 2, y: 1 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 1 } ],
      3: [ { x: 1, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 0 }, { x: 1, y: 0 } ]
    },
    color: 'deepskyblue',
    shape: [
      [1, 1, 1],
      [1, 0, 0],
      [0, 0, 0],
    ]
  },
  'H': {
    pointer: {
      // default                 flipH         flipV          flipHV
      0: [ { x: 0, y: 2 }, { x: 2, y: 2 }, { x: 0, y: 0 }, { x: 2, y: 0 } ],
      1: [ { x: 0, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 2 }, { x: 2, y: 2 } ],
      2: [ { x: 2, y: 0 }, { x: 0, y: 0 }, { x: 2, y: 2 }, { x: 0, y: 2 } ],
      3: [ { x: 2, y: 2 }, { x: 0, y: 2 }, { x: 2, y: 0 }, { x: 0, y: 0 } ]
    },
    color: 'cyan',
    shape: [
      [0, 0, 1],
      [0, 0, 1],
      [1, 1, 1],
    ]
  },
  'I': {
    pointer: {
      // default                 flipH         flipV          flipHV
      0: [ { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 } ],
      1: [ { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 } ],
      2: [ { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 0, y: 0 } ],
      3: [ { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 } ]
    },
    color: 'skyblue',
    shape: [
      [1, 1],
      [0, 1],
    ]
  },/*
  'J': {
    pointerX: 0,
    pointerY: 0,
    pointer: {
      default: [0, 3],
      flipV: [0, 1],
      flipH: [4, 2],
      pos_1: [0, 2], // rotate
    },
    color: 'aquamarine',
    shape: [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ]
  },
  'K': {
    pointerX: 0,
    pointerY: 0,
    pointer: {
      default: [0, 3],
      flipV: [0, 1],
      flipH: [4, 2],
      pos_1: [0, 2], // rotate
    },
    color: 'green',
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ]
  },
  'L': {
    pointerX: 1,
    pointerY: 0,
    pointer: {
      default: [0, 3],
      flipV: [0, 1],
      flipH: [4, 2],
      pos_1: [0, 2], // rotate
    },
    color: 'lightgreen',
    shape: [
      [0, 1, 1],
      [0, 0, 1],
      [0, 1, 1]
    ]
  },*/

}

export default TYPES;


