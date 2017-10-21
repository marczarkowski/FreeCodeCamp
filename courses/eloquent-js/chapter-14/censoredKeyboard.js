var field = document.querySelector("input");
field.addEventListener("input", (event) => {
  const shouldLastCharBeCensured = (fieldText) => {
    const censoredChars = ['Q', 'W', 'X'];
    const getLastTypedChar = (fieldText) => {
      return fieldText[fieldText.length - 1];
    }

    return censoredChars.includes(getLastTypedChar(fieldText));
  }

  field.value = 
    shouldLastCharBeCensured(field.value) ? field.value.slice(0, -1) : field.value;
});
