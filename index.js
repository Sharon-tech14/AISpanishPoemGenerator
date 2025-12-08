function displayPoem(response) {
    console.log("poem generated");

    document.querySelector("#poem").innerHTML = "";

    new Typewriter("#poem", {
        strings: [response.data.answer],
        autoStart: true,
        delay: 10,
        cursor: ""
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "0b0730393co7c0e96d521df6373adt84";

    let context =
    "Write a romantic short poem. Do NOT include HTML tags except <br /> for line breaks and <strong> for the signature. Do NOT start with <html>, <body>, <p>, <div>, or any other HTML wrapper. Start immediately with the poem text. No title. End with <strong>SheCodes AI</strong>.";
  

    let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;

    console.log("Generating poem");
    console.log(`prompt: ${prompt}`);
    console.log(`context: ${context}`);

    // ✅ CORRECT API REQUEST
    let apiUrl =
        "https://api.shecodes.io/ai/v1/generate?prompt=" +
        encodeURIComponent(prompt) +
        "&context=" +
        encodeURIComponent(context) +
        "&key=" +
        apiKey;

    axios.get(apiUrl)
        .then(displayPoem)
        .catch(err => console.error("API error:", err));
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
