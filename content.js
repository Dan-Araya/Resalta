let selectedText = "";
let selectedRange = null;

/*HERE GOES THE DOCSTRINGS*/
document.addEventListener("selectionchange", () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
        const text = selection.toString().trim();
        if (text.length > 0) {
            selectedText = text;
            selectedRange = selection.getRangeAt(0).cloneRange();
        }
    }
});

document.addEventListener("mouseup", () => {
    if (selectedText && selectedRange) {
        console.log("[Resalta] Texto final seleccionado:", selectedText);
        wrapWithHighlight(selectedRange);
    }
})

function wrapWithHighlight(selectedRange) {
    const span = document.createElement("span");
    span.classList.add("yellow-highlight");
    selectedRange.surroundContents(span);
}