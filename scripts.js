function saveEntry() {
    const entryTitle = document.getElementById('journalTitle').value;
    const entryText = document.getElementById('journalEntry').value;

    if (entryTitle.trim() === "" || entryText.trim() === "") {
        alert("Please enter a title and some text.");
        return;
    }

    const entryList = document.getElementById('entryList');
    const newEntry = document.createElement('li');
    const entryDate = new Date().toLocaleDateString();

    newEntry.innerHTML = `<strong>${entryTitle}</strong> <em>(${entryDate})</em><br>${entryText}`;
    entryList.appendChild(newEntry);

    document.getElementById('journalTitle').value = "";
    document.getElementById('journalEntry').value = "";
}
