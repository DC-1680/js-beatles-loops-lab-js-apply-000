function theBeatlesPlay(musicians, instruments){

  let newArr = [];

  for (let i = 0; i < musicians.length; i++){
    let memberInstrument = musicians[i] + " plays " + instruments[i];
    newArr.push(memberInstrument);
  }
  return newArr;
}


function johnLennonFacts(array){
  let newArr = [];

  while (counter < array.length){
    counter = 0;
    let currElement = lennonArr[counter] + "!!!";
    newArr.push(currElement);
    counter++
  }
  return newArr;
}
