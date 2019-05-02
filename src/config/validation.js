'use strict';
const {check} = require('express-validator/check');

/**
 *  Validation process
 *
 *  in order to interact with the api,
 *  all params must be very specific,
 *  so i created validation rule for each param
 *  + error message in case there's validation error
 *
 * @type {{cut: {options: string[], message: string}, color: {options: string[], message: string}, clarity: {options: string[], message: string}, weight: {message: string}, type: {options: string[], message: string}}}
 */
let rules = {
  color: {
    options: [
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ],
    errorMessage: 'color value must  be one of the following: d-z',
  },
  clarity: {
    options: [
      'fl',
      'if',
      'vvs1',
      'vvs2',
      'vs1',
      'vs2',
      'si1',
      'si2',
      'si3',
      'i1',
      'i2',
      'i3',
    ],
    errorMessage: 'clarity value must be one of the following characters: fl,if,vvs1,vvs2,vs1,vs2,si1,si2,si3,i1,i2,i3',
  },
  cut: {
    options: [
      'ideal',
      'poor',
      'fair',
      'very good',
      'good',
    ],
    errorMessage: 'cut value must one of these options: ideal,poor,fair,very good,good',
  },
  weight: {
    errorMessage: 'weight value must be numeric',
  },
  type: {
    errorMessage: 'you must choose one of the following types:diamond',
    options: ['diamond', 'bracelet'],
  },
};

/*Pass all rules into validate-express package */
const validation = [
  check('weight', rules.weight.errorMessage).isNumeric(),
  check('cut', rules.cut.errorMessage).isIn(rules.cut.options),
  check('color', rules.color.errorMessage).
      isIn(rules.color.options),
  check('clarity', rules.clarity.errorMessage).
      isIn(rules.clarity.options),
  check('type', rules.type.errorMessage).isIn(rules.type.options),
];

export default validation;