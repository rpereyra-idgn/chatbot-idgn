(() => {
    const chatbotButton = document.createElement("div");
    chatbotButton.innerHTML = "💬 Chat";
    chatbotButton.style.position = "fixed";
    chatbotButton.style.bottom = "30px";
    chatbotButton.style.right = "20px";
    chatbotButton.style.background = "#0a0f66";
    chatbotButton.style.color = "white";
    chatbotButton.style.padding = "12px 22px";
    chatbotButton.style.borderRadius = "50px";
    chatbotButton.style.cursor = "pointer";
    chatbotButton.style.fontSize = "16px";
    chatbotButton.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    chatbotButton.style.zIndex = "1000";
    chatbotButton.style.transition = "all 0.3s ease-in-out";
    chatbotButton.style.display = "flex";
    chatbotButton.style.alignItems = "center";
    chatbotButton.style.justifyContent = "center";
    chatbotButton.style.maxWidth = "90px";
    chatbotButton.style.minWidth = "60px";
    chatbotButton.style.textAlign = "center";
    chatbotButton.style.fontWeight = "bold";
    chatbotButton.style.whiteSpace = "nowrap";
    chatbotButton.style.userSelect = "none";
    
    document.body.appendChild(chatbotButton);
    
    const chatWindow = document.createElement("div");
    chatWindow.style.position = "fixed";
    chatWindow.style.bottom = "90px";
    chatWindow.style.right = "10px";
    chatWindow.style.background = "white";
    chatWindow.style.padding = "10px";
    chatWindow.style.borderRadius = "10px";
    chatWindow.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    chatWindow.style.display = "none";
    chatWindow.style.width = "90%";
    chatWindow.style.maxWidth = "280px";
    chatWindow.style.zIndex = "999";
    
    const chatHeader = document.createElement("div");
    chatHeader.innerHTML = "🤖 Chatbot";
    chatHeader.style.background = "#0a0f66";
    chatHeader.style.color = "white";
    chatHeader.style.padding = "10px";
    chatHeader.style.textAlign = "center";
    chatHeader.style.borderRadius = "10px 10px 0 0";
    chatWindow.appendChild(chatHeader);
    
    const chatBody = document.createElement("div");
    chatBody.style.padding = "10px";
    chatBody.style.maxHeight = "200px";
    chatBody.style.overflowY = "auto";
    chatBody.innerHTML = "<p>¡Hola! ¿En qué puedo ayudarte?</p>";
    chatWindow.appendChild(chatBody);
    
    async function getChatbotResponse(question) {
        const response = await fetch("https://chatbot-backend-inky-three.vercel.app/chatbot", {  // <-- Agregamos "/chatbot"
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: question })
        });
        const data = await response.json();
        return data.response;
    }
    
    const questions = ["📦 Estado de mi pedido", "💳 Métodos de pago", "🚚 Opciones de envío", "❓ Otra consulta"];
    
    questions.forEach(question => {
        const questionButton = document.createElement("div");
        questionButton.innerHTML = question;
        questionButton.style.padding = "8px";
        questionButton.style.cursor = "pointer";
        questionButton.style.borderBottom = "1px solid #ddd";
        questionButton.addEventListener("click", async () => {
            chatBody.innerHTML += `<p><strong>Tú:</strong> ${question}</p>`;
            
            const botResponse = await getChatbotResponse(question);
            chatBody.innerHTML += `<p><strong>Chatbot:</strong> ${botResponse}</p>`;
            chatBody.scrollTop = chatBody.scrollHeight;
            
            if (question === "❓ Otra consulta") {
                setTimeout(() => {
                    window.open("https://wa.me/3416663126?text=Hola,%20necesito%20ayuda", "_blank");
                }, 2000);
            }
        });
        chatWindow.appendChild(questionButton);
    });
    
    document.body.appendChild(chatWindow);
    
    chatbotButton.addEventListener("click", () => {
        chatWindow.style.display = chatWindow.style.display === "none" ? "block" : "none";
    });
    
    window.addEventListener("resize", () => {
        if (window.innerWidth < 500) {
            chatbotButton.style.bottom = "60px";
            chatbotButton.style.right = "15px";
            chatWindow.style.right = "5px";
            chatWindow.style.bottom = "130px";
        }
    });
})();
