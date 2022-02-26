function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
  
  let generator = generateSequence();
  
  let one = generator.next();
  let two = generator.next();
  let three = generator.next();
  let foor = generator.next();

console.log(foor);
