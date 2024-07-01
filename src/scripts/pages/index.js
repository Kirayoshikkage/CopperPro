import common from '../common/_common.js';
import {
  bestSalesSlider,
  newItemSlider,
  recomendationSlider,
  discountsSlider,
  reviewsSlider,
} from '../helpers/configuresSliders.js';
import updateVarHeaderHeightForIndexHero from '../helpers/updateVarHeaderHeightForIndexHero.js';

common();

updateVarHeaderHeightForIndexHero();

bestSalesSlider();

newItemSlider();

recomendationSlider();

discountsSlider();

reviewsSlider();
