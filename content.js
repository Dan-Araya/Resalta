let selectedText = "";
let selectedRange = null;

/**/
document.addEventListener('selectionchange', () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
        const text = selection.toString().trim();
        if (text.length > 0) {
            selectedText = text;
            selectedRange = selection.getRangeAt(0).cloneRange();
        }
    }
});

document.addEventListener('mouseup', () => {
    if (selectedText && selectedRange) {
        console.log("[Resalta] Texto final seleccionado:", selectedText);
        // Aquí después iría: wrapWithHighlight(selectedRange)
    }
})