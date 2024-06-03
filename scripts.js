let entries = [];
let editIndex = -1;

function saveEntry() {
    const entryTitle = document.getElementById('journalTitle').value;
    const entryText = document.getElementById('journalEntry').value;

    if (entryTitle.trim() === "" || entryText.trim() === "") {
        alert("Please enter a title and some text.");
        return;
    }

    const entryDate = new Date().toLocaleDateString();

    const entry = {
        title: entryTitle,
        text: entryText,
        date: entryDate
    };

    if (editIndex === -1) {
        entries.push(entry);
    } else {
        entries[editIndex] = entry;
        editIndex = -1;
    }

    renderEntries();
    clearInputFields();
}

function renderEntries() {
    const entryList = document.getElementById('entryList');
    entryList.innerHTML = "";

    entries.forEach((entry, index) => {
        const entryItem = document.createElement('li');
        entryItem.innerHTML = `<strong>${entry.title}</strong> <em>(${entry.date})</em><br>${entry.text}
            <div class="entry-buttons">
                <button class="edit-button" onclick="editEntry(${index})">Edit</button>
                <button onclick="deleteEntry(${index})">Delete</button>
            </div>`;
        entryList.appendChild(entryItem);
    });
}

function clearInputFields() {
    document.getElementById('journalTitle').value = "";
    document.getElementById('journalEntry').value = "";
}

function editEntry(index) {
    const entry = entries[index];
    document.getElementById('journalTitle').value = entry.title;
    document.getElementById('journalEntry').value = entry.text;
    editIndex = index;
}

function deleteEntry(index) {
    entries.splice(index, 1);
    renderEntries();
}
