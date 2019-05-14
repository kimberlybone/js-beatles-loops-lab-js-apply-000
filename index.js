function theBeatlesPlay(musicians, instruments){
  var newMusicians = [];
  for (let i = 0; i < musicians.length; musicians++) {
    console.log(`${musicians} + 'plays' + ${instruments}`);
  }
  console.log(newMusicians.push(newMusicians));
  return newMusicians;
}

function johnLennonFacts(facts){
  const newFacts = ["He was the last Beatle to learn to drive", "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
let i = 0
while (i < newFacts.length) {
  console.log(newFacts[i] + '!!!');
  i++
  return newFacts;
}
}

function iLoveTheBeatles(n) {
  let array =[]
  do {
    array.push('I love the Beatles!'); n++
  } while (n < 15)
  return array
}