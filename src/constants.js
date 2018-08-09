export const REQUEST = 'REQUEST';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';

export const ASYNC_TYPE_PATTERN = new RegExp(
  `(.*)_(${REQUEST}|${FAILURE}|${SUCCESS})$`,
);
