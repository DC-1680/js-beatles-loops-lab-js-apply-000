function theBeatlesPlay(musicians, instruments){

  let newArr = [];

  for (let i = 0; i < musicians.length; i++){
    let memberInstrument = musicians[i] + " plays " + instruments[i];
    newArr.push(memberInstrument);
  }
  return newArr;
}


function johnLennonFacts(lennonArr){
  let newArr = [];

  while (lennonArr >= 0){
    let currElement = lennonArr.pop() + "!!!";
    newArr.push(currElement);
  }
  return newArr; 
}
