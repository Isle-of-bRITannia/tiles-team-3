import {Alg} from '../algebra.js';

const inThisDir = (imagePath) => (
  new URL(imagePath, 'http://localhost/src/tiles/imageTiles/').pathname
);

const imgTile = (imgSrc) => {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = function() {
        resolve(Alg.fromImage(img));
    };
    img.src = inThisDir(imgSrc);
  });
}

export const uh = await imgTile('./uh.png');
export const fireGirl = await imgTile('./fireGirl.jpg');
export const bowtie = await imgTile('./bowtie.jpg');
export const chimp = await imgTile('./chimp.jpg');
export const rainbowsuit = await imgTile('./rainbowsuit.jpg');
export const lightblue = await imgTile('./lightblue.png');