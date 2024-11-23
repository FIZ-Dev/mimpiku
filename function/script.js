document.getElementById('postButton').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const dream = document.getElementById('dream').value;
  
    // Validasi agar nama dan mimpi tidak kosong
    if (name === '' || dream === '') {
      alert('Nama dan mimpi harus diisi!');
      return;
    }
  
    // Membuat elemen komentar baru
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');
    
    const nameElement = document.createElement('h3');
    nameElement.textContent = name;
  
    const dreamElement = document.createElement('p');
    dreamElement.textContent = dream;
  
    commentContainer.appendChild(nameElement);
    commentContainer.appendChild(dreamElement);
  
    // Menambahkan komentar ke dalam container komentar
    document.getElementById('commentsContainer').appendChild(commentContainer);
  
    // Mengosongkan form input setelah posting
    document.getElementById('name').value = '';
    document.getElementById('dream').value = '';
  
    // Scroll otomatis ke komentar terbaru
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.scrollTop = commentsContainer.scrollHeight;
  });
  
