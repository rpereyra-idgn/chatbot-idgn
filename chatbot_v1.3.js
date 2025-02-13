(() => {
    const chatbotButton = document.createElement("div");
    chatbotButton.innerHTML = "💬 Chat";
    chatbotButton.style.position = "fixed";
    chatbotButton.style.bottom = "20px";
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
    chatWindow.style.bottom = "80px";
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
    chatHeader.style.background = "#25D366";
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
    
    const responses = {
        "📦 Estado de mi pedido": "Puedes rastrear tu pedido ingresando tu número de orden en nuestra página de seguimiento.",
        "💳 Métodos de pago": "Aceptamos tarjetas de crédito, débito y pagos por transferencia bancaria.",
        "🚚 Opciones de envío": "Realizamos envíos a todo el país con tiempos de entrega de 3 a 7 días hábiles.",
        "❓ Otra consulta": "Si necesitas más ayuda, contáctanos por WhatsApp."
    };
    
    Object.keys(responses).forEach(question => {
        const questionButton = document.createElement("div");
        questionButton.innerHTML = question;
        questionButton.style.padding = "8px";
        questionButton.style.cursor = "pointer";
        questionButton.style.borderBottom = "1px solid #ddd";
        questionButton.addEventListener("click", () => {
            chatBody.innerHTML += `<p><strong>Tú:</strong> ${question}</p>`;
            chatBody.innerHTML += `<p><strong>Chatbot:</strong> ${responses[question]}</p>`;
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
            chatbotButton.style.bottom = "15px";
            chatbotButton.style.right = "15px";
            chatWindow.style.right = "5px";
            chatWindow.style.bottom = "75px";
        }
    });
})();