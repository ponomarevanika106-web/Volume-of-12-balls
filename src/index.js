const THICKNESS = 0.01; // 10 мм
const OUTER_RADIUS_SMALLEST = 0.25; // 0.5 м діаметр

let totalVolume = 0;

for (let k = 1; k <= 12; k++) {
  const innerRadius =
    (OUTER_RADIUS_SMALLEST - THICKNESS) + (k - 1) * THICKNESS;

  const volume = (4 / 3) * Math.PI * Math.pow(innerRadius, 3);

  totalVolume += volume;
}

console.log("Сумарний внутрішній об’єм:", totalVolume.toFixed(6), "м³");