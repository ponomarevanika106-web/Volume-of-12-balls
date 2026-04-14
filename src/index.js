const thickness = 0.01; // 10 мм
const r_outer_smallest = 0.25; // 0.5 м діаметр

let totalVolume = 0;

for (let k = 1; k <= 12; k++) {
  let r_inner = (r_outer_smallest - thickness) + (k - 1) * thickness;
  let volume = (4 / 3) * Math.PI * Math.pow(r_inner, 3);
  totalVolume += volume;
}

console.log("Сумарний внутрішній об’єм:", totalVolume.toFixed(6), "м³");