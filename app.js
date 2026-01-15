const ADMIN = { username: 'admin', password: 'admin123' };
const fileGrid = document.getElementById('fileGrid');

document.getElementById('loginForm').onsubmit = e => {
  e.preventDefault();
  const u = username.value.trim();
  const p = password.value.trim();
  if(u===ADMIN.username && p===ADMIN.password){
    login();
  } else {
    alert('Invalid login');
  }
};

function login(){
  document.getElementById('login-page').style.display='none';
  document.getElementById('dashboard').style.display='block';
}

function logout(){
  location.reload();
}

document.getElementById('fileInput').onchange = e => {
  [...e.target.files].forEach(f=>{
    const d = document.createElement('div');
    d.textContent = f.name;
    fileGrid.appendChild(d);
  });
};
