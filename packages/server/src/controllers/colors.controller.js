const express = require('express');
const colorsResource = require('../resources/colors.json');
const router = express.Router();

const [hexMap, rgbMap] = Object.values(colorsResource).reduce(
  (acc, { hex, name, rgb }) => {
    const [hexMap, rgbMap] = acc;
    const hexKey = hex.substring(1);
    const rgbKey = rgb.join(',');

    hexMap.set(hexKey, { name, rgb });
    rgbMap.set(rgbKey, { name, hex });
    return [hexMap, rgbMap];
  },
  [new Map(), new Map()]
);

// handlers
const searchHexCode = (req, res) => {
  let color = {};
  const { hexCode } = req.params;
  if (hexMap.has(hexCode)) {
    color = hexMap.get(hexCode);
  }

  res.json({ [hexCode]: { ...color } });
};

const searchRGB = (req, res) => {
  let color;
  const { rgbCode } = req.params;
  if (rgbMap.has(rgbCode)) {
    color = rgbMap.get(rgbCode);
  }

  res.json({ [rgbCode]: { ...color } });
};

// routes
router.get('/hex/:hexCode', searchHexCode);
router.get('/rgb/:rgbCode', searchRGB);

module.exports = router;
