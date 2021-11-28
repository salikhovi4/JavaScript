let computer = {
  price: 150000,
  usbPortCount: 6,
  chipset: 'AMD X570',
  socket: 'AM4',
  coreCount: 8,
  cpuManufacturer: 'AMD',
  videoCardModel: 'NVidia GeForce RTX 3060',
  videoMemory: 12288,
  ramType: 'DDR4',
  ramVolume: 16384,
  ramFrequency: 3200
};

let keys = Object.keys(computer);
let values = Object.values(computer);
let entries = Object.entries(computer);

console.log('VALUES\n');

for (let val of values) {
  console.log(val);
}

console.log('\n\nKEYS\n');

for (let key of keys) {
  console.log(key, ':', computer[key]);
}

console.log('\n\nENTRIES\n');

for (let entry of entries) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

console.log('\n\nENTRIES WITH DESTRUCTING\n');

// то же, но более читаемо
for (let [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
