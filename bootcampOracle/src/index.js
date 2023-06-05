const form = document.querySelector(".form");

const keys = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
}

const values = {
    enter:"e",
    imes:"i",
    ai:"a",
    ober:"o",
    ufat:"u"
}

function copyToClipboard() {
    let copyText = document.querySelector(".right-active").innerText;
    const copyButton = document.querySelector(".copyText-active");
    if (copyText) {
        navigator.clipboard.writeText(copyText).then(() => {
            console.log("text copied",copyButton);
            let newRule = ".copyText-active::before { content: '¡Copiado!'; position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); padding: 4px 8px; border-radius: 4px; background-color: #fffb9f; color: var(--Gray-500); font-size:14px; white-space: nowrap; opacity: 0; transition: all 0.2s ease-in-out; }";
            // Crear un nuevo elemento style y agregarlo al árbol DOM
            let styleElement = document.createElement("style");
            styleElement.textContent = newRule;
            document.head.appendChild(styleElement);
        });
        // let pseudoStyle = window.getComputedStyle(copyButton, "::before");
        // pseudoStyle.setProperty("content", "¡Copiado!");
    }
}


form.addEventListener("submit",function(event) {
    event.preventDefault();

    const textarea = document.querySelector(".l-text");
    const rightPanel = document.querySelector(".right") ?? document.querySelector(".right-active");
    const copyButton = document.querySelector(".copyText-active");
    
    const text = textarea.value;
    const regex = /^[a-z\s\n\`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]+$/g;
    const isLowercase = text.match(regex);
   
    if (text){
        if(isLowercase){
            const buttonPulsed = event.submitter;

            if (buttonPulsed.id === "l-cypher"){            
                var textEncrypted = text.replace(/a|e|i|o|u/g, function(matched){
                    return keys[matched];
                });
                console.log("es -minuscula y para encryptar ", textEncrypted);
            }else{
                var textEncrypted = text.replace(/enter|imes|ai|ober|ufat/g, function(matched){
                    return values[matched];
                });
                console.log("es minuscula y para decryptar ", textEncrypted);
            }

            
            rightPanel.classList.replace("right", "right-active");
            rightPanel.innerText = textEncrypted;
            rightPanel.style.overflow = "auto";
            copyButton.style.display = "block";
            
            
            // rightPanel.style.display = "block";
            // rightPanel.style.color = "#495057";
            // rightPanel.style.fontSize = "24px";
            // rightPanel.style.lineHeight = "150%";
            // rightPanel.style.wordWrap = "break-word";
            // rightPanel.style.paddingBlock = "32px";
            // rightPanel.style.paddingInline = "24px";
        }else{
            alert("El texto ingresado contiene caracteres no permitidos. Por favor, sólo utiliza letras minúsculas.");
        } 
    }else{
        console.log("panelRIGHT", parseInt(rightPanel.clientHeight));

        if (rightPanel.clientHeight < 200) {
            rightPanel.classList.replace("right-active", "right");
            rightPanel.innerHTML = 
            '<img src="../assets/imgs/Muñeco.svg" alt="image" style="display:none"> '+
                '<div class="r-message">'+
                    '<h1>Ningún mensaje fue encontrado</h1>'+
                    '<h2>Ingrese el texto que desees encriptar o desencriptar</h2>'+
                '</div>'
            copyButton.style.display = "none";
        }else{
            rightPanel.classList.replace("right-active", "right");
            rightPanel.innerHTML = 
            '<img src="../assets/imgs/Muñeco.svg" alt="image"> '+
                '<div class="r-message">'+
                    '<h1>Ningún mensaje fue encontrado</h1>'+
                    '<h2>Ingrese el texto que desees encriptar o desencriptar</h2>'+
                '</div>'
            copyButton.style.display = "none";
        }
        
    }

});
