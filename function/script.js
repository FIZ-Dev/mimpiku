document.getElementById('postButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const dream = document.getElementById('dream').value;

    if (name === "" || dream === "") {
        alert("Silakan isi semua kolom!");
        return;
    }

    const comment = { name: name, dream: dream };
    saveComment(comment);
    displayComment(comment);

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('dream').value = '';
});

// Function to save comment to localStorage
function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Function to display comment
function displayComment(comment) {
    const commentsContainer = document.getElementById('commentsContainer');
    const commentCard = document.createElement('div');
    commentCard.classList.add('comment-card');
    commentCard.innerHTML = `<strong>${comment.name}</strong><p>${comment.dream}</p>`;
    
    commentsContainer.appendChild(commentCard);
}

// Function to load comments from