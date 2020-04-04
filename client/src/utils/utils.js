export const has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

export const provinceExtraction = data => {
  let provinces = {};
  data.forEach(
    chunk => {
      if (!chunk.province) return;
      const [city, province] = chunk.province.split(' ');
      if (province === '' || province === null || province === undefined) return;
      if (!has(provinces, province)) {
        provinces = {
          ...provinces,
          [province]: true
        }
      }
    }
  );
  return Object.keys(provinces);
};

export const searchByProvince = (data, province) => {
  if (province.toLowerCase() === 'all') return data;
  const result = data.map(
    chunk => {
      let chunkPr = chunk.province;
      if (chunkPr) {
        const splt = chunkPr.split(' ');
        if (splt.length === 2 && splt[1] === province) return chunk;
        return false;
      }
      return false;
    }
  );

  return result.filter(Boolean);
};
