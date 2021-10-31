function titleValidation(title) {

  if (title.length !== 0) {
    for (let i = 0; i < title.length; i++) {
      console.log(title[i]);
      if (title[i] !== ' ') {
        console.log('заебись вода');
        return true;
      }
    }
  } else {
    return 0;
  }

}

export default titleValidation;