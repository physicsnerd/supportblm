function displayModal(modal, span) {//modal is id
    modal.style.display="block";
    span.onclick = function() {
        modal.style.display = "none";
    }
}