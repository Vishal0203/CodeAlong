export const ACTIONS = {
  FETCH_COLOR_BY_HEX: 'NTC/FETCH_COLOR_BY_HEX',
  FETCH_COLOR_BY_HEX_SUCCESS: 'NTC/FETCH_COLOR_BY_HEX_SUCCESS',
  FETCH_COLOR_BY_RGB: 'NTC/FETCH_COLOR_BY_RGB',
  FETCH_COLOR_BY_RGB_SUCCESS: 'NTC/FETCH_COLOR_BY_RGB_SUCCESS',
};

export const fetchColorByHex = (hexCode) => ({
  type: ACTIONS.FETCH_COLOR_BY_HEX,
  hexCode,
});

export const fetchColorByHexSuccess = (colorData) => ({
  type: ACTIONS.FETCH_COLOR_BY_HEX_SUCCESS,
  colorData,
});

export const fetchColorByRgb = (rgbCode) => ({
  type: ACTIONS.FETCH_COLOR_BY_RGB,
  rgbCode,
});

export const fetchColorByRgbSuccess = (colorData) => ({
  type: ACTIONS.FETCH_COLOR_BY_RGB_SUCCESS,
  colorData,
});
