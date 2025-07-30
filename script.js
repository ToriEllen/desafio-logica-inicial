    let heroi = "";
    let experiencia = 0;
    let resultado  = "";

    function avaliar() {
      heroi = document.getElementById("nome").value.trim(); 
      experiencia = parseInt(document.getElementById("xp").value);

      if (!heroi || isNaN(experiencia)) {
        alert("Por favor, preencha o nome e selecione o tipo.");
        return;
      }

    if(experiencia < 1000){
      resultado = "Ferro 🪓"
    } else if(experiencia >= 1001 && experiencia <= 2000){
      resultado =  "Bronze 🛡️"
    }else if(experiencia >= 2001 && experiencia <= 5000){
      resultado = "Prata ⚔️"
    }else if(experiencia >= 5001 && experiencia <= 7000){
      resultado = "Ouro 🏅"
    }else if(experiencia >= 7001 && experiencia <= 8000){
      resultado = "Platina 💠"
    }else if(experiencia >= 8001 && experiencia <= 9000){
      resultado = "Ascendente 🔮"
    }else if(experiencia >= 9001 && experiencia <= 10000){
      resultado = "Imortal 🧙‍♂️"
    }else if(experiencia >= 10001 ){
      resultado = "Radiante 🌟"
    }else {
      alert("Experiência inválida. Por favor, insira um número válido.");
      return;
    }

   
  document.getElementById("resultado").innerText =
    `O Herói de nome ${heroi} está no nível de ${resultado}`;
}