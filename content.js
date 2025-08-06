let selectedText = ""

document.addEventListener('selectionchange', () => {
    let text = window.getSelection().toString().trim();
    if (!text) {
        console.log("no selection");
    }
    selectedText = text;
})

document.addEventListener('mouseup', () => {
    if (selectedText.length > 0) {
        console.log(selectedText);
    }
    else {
        console.log("no selection");
    }
})
