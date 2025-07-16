document.getElementById("contact-form").addEventListener("submit",function(e){
    e.preventDefault()
    document.getElementById("form-msg").textContent="thanks for your message!";
    this.requestFullscreen();
});