export var REQUEST = 'REQUEST';
export var FAILURE = 'FAILURE';
export var SUCCESS = 'SUCCESS';

export var ASYNC_TYPE_PATTERN = new RegExp(
  '(.*)_(' + REQUEST + '|' + FAILURE + '|' + SUCCESS + ')$'
);
