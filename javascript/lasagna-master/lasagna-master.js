/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus (timer) {
  if (timer === 0) {
    return 'Lasagna is done.'
  } else if (timer === undefined) {
    return 'You forgot to set the timer.'
  } else {
    return 'Not done, please wait.'
  }
}

export function preparationTime(layers, timer = 2) {
  return layers.length * timer;
}

export function quantities(layers) {
  const quants = {
    noodles: 0,
    sauce: 0
  } 

  for (let layer of layers) {
    if (layer === 'noodles') {
      quants[layer] += 50;
    } else if (layer === 'sauce') {
      quants[layer] += 0.2;
    }
  }
  return quants;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  const scaled = {...recipe};
  const scaler = portions / 2; 

  for (let layer in scaled) {
    scaled[layer] *= scaler;
  }
  return scaled;
}


