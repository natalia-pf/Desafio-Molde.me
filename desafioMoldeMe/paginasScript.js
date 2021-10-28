const myForm = document.getElementById("myForm")
var nome = document.getElementById("name")
var email = document.getElementById("email")
var aniversario = document.getElementById("birthday")
var telefone = document.getElementById("number")
var mensagem = document.getElementById("message")
var arquivo = document.getElementById("labelFile")

function openModal(){
    modalContainer.style.opacity = "1";
    modalContainer.style.pointerEvents = "auto";

}

function closeModal(){
    modalContainer.style.opacity = "0";
    modalContainer.style.pointerEvents = "none";
    location.reload();
}

myForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    openModal()
})

