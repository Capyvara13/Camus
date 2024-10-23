//Altera o valor do input "senha" para mostrar ou ocultar o valor.
function mostrarSenha() {
    var senhaInput = document.getElementById("password");
    var tipoInput = senhaInput.getAttribute("type");
    let ShowPassword = document.getElementById("ShowPassword");
    if (tipoInput === "password") {
      senhaInput.setAttribute("type", "text");
      ShowPassword.style.backgroundImage = 'url("../img/LoginPage/Olho\ aberto.png")';
    } else {
      senhaInput.setAttribute("type", "password");
      ShowPassword.style.backgroundImage = 'url("../img/LoginPage/olho\ fechado.png")';
    }
  };