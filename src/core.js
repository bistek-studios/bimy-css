/* bimy css */
// despite what the title say, it's actually ~~mostly~~ entirely javascript


{
    // scope to minimize interference with user code
    document.querySelectorAll("*").forEach((element)=>{
        element.classList.forEach((classe)=>{
            if (classe && classe.startsWith("--")) {
                let bimy = classe.slice(2).split("-");
                for (let i = 1; i < bimy.length - 1; i++) {
                    bimy[i] = bimy[i].charAt(0).toUpperCase() + bimy[i].slice(1);
                };
                let value = bimy.pop();
                element.style[bimy.join("")] = value;
            };
        });
    });
}