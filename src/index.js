// IMPORTS
// -------

import { SVG } from "@svgdotjs/svg.js";
import * as patterns from "svg-patterns";
import stringify from "virtual-dom-stringify";
import Chance from "chance";

// CONSTANTS
// ---------
let viewportSize = 1000;

// SETUP and INITIALIZATION
// ------------------------

let chance = new Chance();
let patternArray = [];
let draw = SVG()
  .addTo("body")
  .size("100%", "100%")
  .viewbox(0, 0, viewportSize, viewportSize);

// FUNCTIONS
// ---------

function buildPattern(pattern) {
  let stringifiedPattern = stringify(pattern);
  draw.defs().svg(stringifiedPattern);
  patternArray.push(pattern.url());
}

// PATTERN DEFINITIONS
// -------------------

buildPattern(
  patterns.lines({
    size: 8, // size of the pattern
    strokeWidth: 0.7,
    stroke: "#343434", // any SVG-compatible color
    background: null, // any SVG-compatible color
    orientations: [45] // can be any combination of 0, 45, -45, 90
  })
);

buildPattern(
  patterns.nylon({
    size: 25, // size of the pattern
    fill: "orange", // any SVG-compatible color
    strokeWidth: 0.5,
    stroke: "#343434", // any SVG-compatible color
    background: "red" // any SVG-compatible color
  })
);

buildPattern(
  patterns.caps({
    size: 19, // size of the pattern
    fill: "none", // any SVG-compatible color
    strokeWidth: 1,
    stroke: "#343434", // any SVG-compatible color
    background: null // any SVG-compatible color
  })
);

buildPattern(
  patterns.circles({
    size: 30, // size of the pattern
    radius: 5,
    complement: true,
    fill: "#FFFF00", // any SVG-compatible color
    strokeWidth: 2,
    stroke: "black", // any SVG-compatible color
    background: "#FF00AA" // any SVG-compatible color
  })
);

buildPattern(
  patterns.crosses({
    size: 40, // size of the pattern
    fill: "#FF00FF", // any SVG-compatible color
    strokeWidth: 4.8,
    stroke: "#FF00FF", // any SVG-compatible color
    background: "black" // any SVG-compatible color
  })
);

buildPattern(
  patterns.hexagons({
    size: 20, // size of the pattern
    fill: "#FFAAFF", // any SVG-compatible color
    strokeWidth: 1,
    stroke: "#FF00FF", // any SVG-compatible color
    background: "#FF77FF" // any SVG-compatible color
  })
);

let pattern = patterns.rhombic({
  size: 64, // size of the pattern
  fill: "none", // any SVG-compatible color
  strokeWidth: 7.9,
  stroke: "white", // any SVG-compatible color
  background: "#FF00FF" // any SVG-compatible color
});

buildPattern(
  patterns.rhombic3d({
    size: 44, // size of the pattern
    fill: "none", // any SVG-compatible color
    strokeWidth: 1,
    stroke: "#AA34AA", // any SVG-compatible color
    background: "black" // any SVG-compatible color
  })
);

buildPattern(
  patterns.squares({
    size: 100, // size of the pattern
    fill: "pink", // any SVG-compatible color
    strokeWidth: 30,
    stroke: "gray", // any SVG-compatible color
    background: "black" // any SVG-compatible color
  })
);

buildPattern(
  patterns.waves({
    size: 130, // size of the pattern
    fill: "pink", // any SVG-compatible color
    strokeWidth: 10.8,
    stroke: "#EEE", // any SVG-compatible color
    background: "black" // any SVG-compatible color
  })
);

buildPattern(
  patterns.woven({
    size: 19, // size of the pattern
    fill: "black", // any SVG-compatible color
    strokeWidth: 4,
    stroke: "pink", // any SVG-compatible color
    background: "black" // any SVG-compatible color
  })
);

let size = 200;
let numBoxes = Math.floor(viewportSize / size);

for (let i = 0; i < patternArray.length; i++) {
  let y = Math.floor(i / numBoxes);
  console.log(i, y);
  draw
    .rect(size, size)
    .move(size * (i % numBoxes), size * y)
    .opacity(1)
    .attr({ fill: patternArray[i] });
}
