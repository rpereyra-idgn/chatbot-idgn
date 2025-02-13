(() => {
    const chatbotButton = document.createElement("div");
    chatbotButton.innerHTML = "💬 Chat";
    chatbotButton.style.position = "fixed";
    chatbotButton.style.bottom = "20px";
    chatbotButton.style.right = "20px";
    chatbotButton.style.background = "#25D366";
    chatbotButton.style.color = "white";
    chatbotButton.style.padding = "10px 20px";
    chatbotButton.style.borderRadius = "20px";
    chatbotButton.style.cursor = "pointer";
    chatbotButton.style.fontSize = "16px";
    chatbotButton.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    
    document.body.appendChild(chatbotButton);
    
    const chatWindow = document.createElement("div");
    chatWindow.style.position = "fixed";
    chatWindow.style.bottom = "70px";
    chatWindow.style.right = "20px";
    chatWindow.style.background = "white";
    chatWindow.style.padding = "10px";
    chatWindow.style.borderRadius = "10px";
    chatWindow.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    chatWindow.style.display = "none";
    
    const questionList = [
        "📦 Estado de mi pedido",
        "💳 Métodos de pago",
        "🚚 Opciones de envío",
        "❓ Otra consulta"
    ];
    
    questionList.forEach(question => {
        const questionButton = document.createElement("div");
        questionButton.innerHTML = question;
        questionButton.style.padding = "8px";
        questionButton.style.cursor = "pointer";
        questionButton.style.borderBottom = "1px solid #ddd";
        questionButton.addEventListener("click", () => {
            window.open(`https://wa.me/3416663126?text=${encodeURIComponent(question)}`, "_blank");
        });
        chatWindow.appendChild(questionButton);
    });
    
    document.body.appendChild(chatWindow);
    
    chatbotButton.addEventListener("click", () => {
        chatWindow.style.display = chatWindow.style.display === "none" ? "block" : "none";
    });
})();
