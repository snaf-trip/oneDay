function titleValidation(title) {

  if (title.length !== 0) {
    for (let i = 0; i < title.length; i++) {
      if (title[i] !== ' ') {
        return true;
      }
    }
  } else {
    return 0;
  }

}

export default titleValidation;