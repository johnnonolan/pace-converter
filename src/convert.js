const time2float = require('./time-2-float');
const float2time = require('./float-2-time');
const { minkm2kmh, minkm2minmi, minkm2mih } = require('./converters');
const units = require('./units');

const convert = (pace, unit) => {
  if (unit === units.MINKM) {
    const minkm = time2float(pace);
    return {
      minkm: pace,
      kmh: minkm2kmh(minkm),
      minmi: float2time(minkm2minmi(minkm)),
      mih: minkm2mih(minkm)
    };
  }
  throw new Error('unknown unit');
};

module.exports = convert;
