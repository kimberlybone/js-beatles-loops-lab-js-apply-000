function theBeatlesPlay(musicians, instruments){
  var newMusicians = []
  for (let allMusicians = 0; allMusicians < 10; allMusicians++) {
    console.log(`${musicians} + 'plays' + ${instruments}`);
  }
  console.log(newMusicians.push(allMusicians));
  return newMusicians;
}

function johnLennonFacts(facts){
  const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
let i = 0
while (i < facts.length) {
  console.log(facts[i] + '!!!');
  i++
  return johnLennonFacts;
}
}

function iLoveTheBeatles(n) {
  let array =[]
  do {
    array.push('I love the Beatles!'); n++
  } while (n < 15)
  return array
}