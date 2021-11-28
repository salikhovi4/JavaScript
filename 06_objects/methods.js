let me = {
  birthdate: { year: 1995, month: 4, day: 20 },
  age: 26,
  getAge: function () {
    let now = new Date();
    let born = new Date(
      this.birthdate.year,
      this.birthdate.month + 1,
      this.birthdate.day
    );
    let diffInMilliseconds = now.getTime() - born.getTime();
    return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25);
  }
  // ... другие свойства
};

console.log(me.getAge()); // сейчас мне 26
