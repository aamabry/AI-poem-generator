function displayPoem(response) {
console.log("poem generating");
    new Typewriter("#poem", {
        strings: response.data.answer ,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

    
}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");

    let apiKey ="1b509431b344bbaa8c5fo44ef08bca6t";
    let prompt = `User instructions are ${instructionsInput.value} `;
    let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with `SheCodes AI` inside a <strong> element at the end under the poem";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayPoem);


  

}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);