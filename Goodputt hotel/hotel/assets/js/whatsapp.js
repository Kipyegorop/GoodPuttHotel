

  // Function to open or close WhatsApp chat window
function toggleWhatsAppChat() {
    var whatsappChat = document.getElementById("whatsapp-chat");
    if (whatsappChat.style.display === "block") {
      whatsappChat.style.display = "none";
    } else {
      whatsappChat.style.display = "block";
    }
  }
  
  // Function to handle clicks on document
  function handleClickOutside(event) {
    var whatsappButton = document.querySelector(".whatsapp-button");
    var whatsappChat = document.getElementById("whatsapp-chat");
    if (!whatsappButton.contains(event.target) && !whatsappChat.contains(event.target)) {
      whatsappChat.style.display = "none";
    }
  }
  
  // Add event listener to document
  document.addEventListener("click", handleClickOutside);
  
  // Function to handle clicks on WhatsApp button
  function handleWhatsAppButtonClick() {
    toggleWhatsAppChat();
  }
  
  // Add event listener to WhatsApp button
  document.querySelector(".whatsapp-button").addEventListener("click", handleWhatsAppButtonClick);
  
  // Event listener for scrolling
window.addEventListener("scroll", function() {
    var whatsappChat = document.getElementById("whatsapp-chat");
    whatsappChat.style.display = "none";
  });