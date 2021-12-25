export const ACTIONS = {
  FETCH_COLOR_BY_HEX: 'NTC/FETCH_COLOR_BY_HEX',
  FETCH_COLOR_BY_RGB: 'NTC/FETCH_COLOR_BY_RGB',
  UPDATE_COLOR_DETAILS: 'NTC/UPDATE_COLOR_DETAILS',
};

export const fetchColorByHex = (hexCode) => ({
  type: ACTIONS.FETCH_COLOR_BY_HEX,
  hexCode,
});

export const fetchColorByRgb = (rgbCode) => ({
  type: ACTIONS.FETCH_COLOR_BY_RGB,
  rgbCode,
});

export const updateColorDetails = (colorDetails) => ({
  type: ACTIONS.UPDATE_COLOR_DETAILS,
  colorDetails,
});
