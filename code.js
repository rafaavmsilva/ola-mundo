document.addEventListener("DOMContentLoaded",()=>{
    const texto=document.body.guerySelector("#texto");
    texto.addEventListener("click",()=>{
        if(texto.textContent==="Olá Mundo");
        texto.textContent="Hello World";
        else
        texto.textContent="Olá Mundo";
    });
});
