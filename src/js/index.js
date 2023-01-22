
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const LinkdoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
     alternarModal();
     video.setAttribute("src", LinkdoVideo);
});

botaoFecharModal.addEventListener("click", () => {
     alternarModal();
      video.setAttribute("src", "");
});