function theBeatlesPlay(musicians, instruments){

  let newArr = [];

  for (let i = 0; i < musicians.length; i++){
    let memberInstrument = musicians[i] + " plays " + instruments[i] + ".";
    newArr.push(memberInstrument);
  }
}
