function generateSingleStanza(number) {
  let result = [];
  if ( number == 2 ||
    number == 3 ||
    number == 4 ||
    number == 22 ||
    number == 23 ||
    number == 24 ||
    number == 32 ||
    number == 33 ||
    number == 34 ||
    number == 42 ||
    number == 43 ||
    number == 44 ||
    number == 52 ||
    number == 53 ||
    number == 54 ||
    number == 62 ||
    number == 63 ||
    number == 64 ||
    number == 72 ||
    number == 73 ||
    number == 74 ||
    number == 82 ||
    number == 83 ||
    number == 84 ||
    number == 92 ||
    number == 93 ||
    number == 94
  ) {
    result.push(`${number} бутылки пива на стене, ${number} бутылки пива на стене 
Возьми одну, пусти по кругу, ${number - 1} бутылка пива на стене!`);
  } else if (
    number == 1 ||
    number == 21 ||
    number == 31 ||
    number == 41 ||
    number == 51 ||
    number == 61 ||
    number == 71 ||
    number == 81 ||
    number == 91
  ) {
    result.push(`${number} бутылка пива на стене, ${number} бутылка пива на стене 
Возьми одну, пусти по кругу, нет бутылок пива на стене!`);
  } else {
    result.push(`${number} бутылок пива на стене, ${number} бутылок пива на стене  
Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене!`);
  }
  return result.join()
}

function generateSongText() {
  for (let i = 99; i > 0; i--) {
    console.log(generateSingleStanza(i));
  }
}
generateSongText();
