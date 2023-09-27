function handleKeyPress(event) {
    const inputField = document.getElementById('inputField');
    const currentValue = inputField.value;
    const selectionStart = inputField.selectionStart;
    const selectionEnd = inputField.selectionEnd;
    
    if (event.keyCode === 32) {
      event.preventDefault();
      
      if (selectionStart !== selectionEnd) {
        const newValue =
          currentValue.substring(0, selectionStart) +
          currentValue.substring(selectionEnd);
        inputField.value = newValue;
        inputField.setSelectionRange(selectionStart, selectionStart);
      } else {
        if (selectionStart > 0) {
          const newValue =
            currentValue.substring(0, selectionStart - 1) +
            currentValue.substring(selectionStart);
          inputField.value = newValue;
          inputField.setSelectionRange(selectionStart - 1, selectionStart - 1);
        }
      }
    } else if (event.keyCode === 8) {
      event.preventDefault();
      
      const newValue =
        currentValue.substring(0, selectionStart) +
        ' ' +
        currentValue.substring(selectionStart);
      
      inputField.value = newValue;
      
      const newCursorPosition = selectionStart + 1;
      inputField.setSelectionRange(newCursorPosition, newCursorPosition);
    }
  }
