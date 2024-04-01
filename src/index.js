function generatePoem(event) {
    event.preventDefault();


    new Typewriter("#poem", {
        strings: "I hunger for your sleek laugh, your hands the color of a savage harvest",
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);