document.getElementById('postButton').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const dream = document.getElementById('dream').value;

    // Validasi agar nama dan mimpi tidak kosong
    if (name === '' || dream === '') {
        alert('Nama dan mimpi harus diisi!');
        return;
    }

    // Membuat komentar sebagai objek
    const comment = {
        name: name,
        dream: dream,
    };

    // Ambil data komentar dari localStorage
    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Tambahkan komentar baru ke array
    comments.push(comment);

    // Simpan kembali ke localStorage
    localStorage.setItem('comments', JSON.stringify(comments));

    // Tampilkan komentar di halaman
    addCommentToPage(comment);

    // Mengosongkan form input setelah posting
    document.getElementById('name').value = '';
    document.getElementById('dream').value = '';

    // Scroll otomatis ke komentar terbaru
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.scrollTop = commentsContainer.scrollHeight;
});

// Fungsi untuk menambahkan komentar ke halaman
function addCommentToPage(comment) {
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');

    const nameElement = document.createElement('h3');
    nameElement.textContent = comment.name;

    const dreamElement = document.createElement('p');
    dreamElement.textContent = comment.dream;

    commentContainer.appendChild(nameElement);
    commentContainer.appendChild(dreamElement);

    // Menambahkan komentar ke dalam container komentar
    document.getElementById('commentsContainer').appendChild(commentContainer);
}

// Fungsi untuk memuat komentar dari localStorage
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(addCommentToPage);
}

// Memuat komentar saat halaman dimuat
window.addEventListener('load', loadComments);
