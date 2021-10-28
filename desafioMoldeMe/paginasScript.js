const myForm = document.getElementById("myForm")
const modalContainer = document.getElementById("modalContainer")

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

