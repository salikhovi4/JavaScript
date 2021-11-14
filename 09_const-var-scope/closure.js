let name = 'Emma';

function closureGreetings() {
  console.log(name);
}

closureGreetings(); // Emma

name = 'John';
closureGreetings(); // John
