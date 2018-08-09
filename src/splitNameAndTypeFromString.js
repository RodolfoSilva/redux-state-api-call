import memoize from 'lodash.memoize';
import { ASYNC_TYPE_PATTERN } from './constants';

/**
 * @param {String} type
 * @returns {Array}
 */
const splitNameAndTypeFromString = type =>
  type.match(ASYNC_TYPE_PATTERN).slice(1, 3);

export default memoize(splitNameAndTypeFromString);
