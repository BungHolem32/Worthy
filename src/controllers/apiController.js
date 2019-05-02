import {validationResult} from 'express-validator/check';
import calculatePrice from '../libararies/price-calculator';
import getResponseByType from '../libararies/get-response-by-type.js';
import resolveConfigurationByJewelryType
  from '../libararies/resolve-configuration-by-jewelry-type';

class ApiController {
  /**
   * Calculate Endpoint flow is:
   *  1. check validation.
   *  2. get params for needed for the calculation
   *   - request params -> jewelery rates
   *   - get relative data according to jewelry type
   *  4. pass params into calculation lib
   *  5. return result to the user.
   *
   * @param req
   * @param res
   * @returns {Promise<Json | * | Promise<any>>}
   */
  static async calculate(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
       return res.status(422).json(getResponseByType('unprocessable entity', errors.array()));
    }

    let jewelryData = req.body;
    let configurations = await resolveConfigurationByJewelryType(
        jewelryData.type);

    if (configurations.error) {
      return res.status(202).json(getResponseByType('no found', configurations));
    }

    let price = await calculatePrice(jewelryData, configurations);

    res.json(getResponseByType('success', price));
  }
}

export default ApiController;