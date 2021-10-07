let motherBoard = {
  usbPortCount: 6,
  chipset: 'AMD X570',
  socket: 'AM3/AM4',
};

let cpu = {
  coreCount: 8,
  cpuManufacturer: 'AMD',
  socket: 'AM4',
};

let videoCard = {
  videoCardModel: 'NVidia GeForce RTX 3060',
  videoMemory: 12288,
};

let ram = {
  ramType: 'DDR4',
  ramVolume: 16384,
  ramFrequency: 3200,
};

let computer = {
  price: 150000,
  ...motherBoard,
  // свойство socket из объекта motherBoard будет заменено на такое же свойство из cpu
  ...cpu,
  ...videoCard,
  ...ram,
};

let computerWithAssign = Object.assign(
  // целевой объект, в который будут 'замешаны' следующие
  {
    price: 150000
  },
  // объекты, 'подмешиваемые' в первый
  motherBoard, cpu, videoCard, ram
);

console.log(computer);
console.log(computerWithAssign);
