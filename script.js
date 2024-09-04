function showRegister(){
    document.getElementById('register').classList.remove('hidden');
    document.getElementById('login').classList.add('hidden');
}
function showLogin(){
    document.getElementById('register').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
}