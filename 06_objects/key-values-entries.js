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

console.log(Object.keys(computer));
console.log(Object.values(computer));
console.log(Object.entries(computer));
