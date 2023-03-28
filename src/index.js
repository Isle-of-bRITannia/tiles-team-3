import { Tile } from './tiles/api.js';

import { fireGirl, uh, bowtie, chimp, rainbowsuit, lightblue} from './tiles/imageTiles/index.js';
import { rasterize } from './tiles/observe/rasterize.js';
import { renderRaster } from './tiles/observe/renderRaster.js';

const width = 600,
      height = 600;

const canvas = document.querySelector('#canvas');
canvas.width = width;
canvas.height = height;

const ctx = canvas?.getContext('2d');

const rgbaStringToArray = (string) => (
  string.replaceAll(/rgba|\(|\)/g, '')
  .split(/, ?/)
);
const layer1 = Tile.above(lightblue,   Tile.pure('blue') );
const layer2 = Tile.behind((behind, front) => {
  debugger;
  const oneRGBA = rgbaStringToArray(behind);
  const twoRGBA = rgbaStringToArray(front);
  return `rgba(${(oneRGBA[0] + twoRGBA[0]) / 30}, ${(oneRGBA[1] + twoRGBA[1]) / 30}, ${(oneRGBA[2] + twoRGBA[2]) / 30}, ${(oneRGBA[3] + twoRGBA[3]) / 10})`;
})(rainbowsuit, bowtie);

const layer3 = Tile.behind((behind, front) => {
  debugger;
  const oneRGBA = rgbaStringToArray(behind);
  const twoRGBA = rgbaStringToArray(front);
  return `rgba(${(oneRGBA[0] + twoRGBA[0]) / 30}, ${(oneRGBA[1] + twoRGBA[1]) / 30}, ${(oneRGBA[2] + twoRGBA[2]) / 30}, ${(oneRGBA[3] + twoRGBA[3]) / 10})`;
})(layer1, layer2);



const raster = rasterize({width, height})(layer3);

renderRaster(raster)(ctx);

console.log('done');