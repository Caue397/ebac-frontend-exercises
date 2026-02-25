fetch('https://api.github.com/users/caue397')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.querySelector('.profile-avatar').src = data.avatar_url;
    document.querySelector('.profile-avatar').alt = data.name || data.login;
    document.querySelector('.profile-name').textContent = data.name || data.login;
    document.querySelector('.profile-username').textContent = '@' + data.login;
    document.querySelector('.profile-repos').textContent = data.public_repos;
    document.querySelector('.profile-followers').textContent = data.followers;
    document.querySelector('.profile-following').textContent = data.following;
    document.querySelector('.profile-link').href = data.html_url;
  })
  .catch((error) => {
    alert('Erro ao buscar usuário do GitHub');
    console.error('Erro ao buscar usuário do GitHub:', error);
  });
