document.addEventListener("DOMContentLoaded", () => {
  
    function displayPoem(response) {
        console.log("poem generated");
    
        const poemElement = document.querySelector("#poem");
        poemElement.style.display = "block"; // ensure it's visible
        poemElement.innerHTML = ""; // clear placeholder
    
        new Typewriter("#poem", {
            strings: [response.data.answer],
            autoStart: true,
            delay: 10,
            cursor: ""
        });
    }
    
  
    const generatePoem = (event) => {
      event.preventDefault();
  
      const instructionsInput = document.querySelector("#user-instructions");
      const apiKey = "0b0730393co7c0e96d521df6373adt84";
  
      // Proper context to prevent HTML wrappers
      const context =
        "Write a romantic short poem. Do NOT include HTML tags except <br /> for line breaks and <strong> for the signature. Do NOT start with <html>, <body>, <p>, <div>, or any other HTML wrapper. Start immediately with the poem text. No title. End with <strong>SheCodes AI</strong>.";
  
      const prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  
      const poemElement = document.querySelector("#poem");
      poemElement.classList.remove("hidden");
      poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value}...</div>`;
  
      console.log("Generating poem");
      console.log(`prompt: ${prompt}`);
      console.log(`context: ${context}`);
  
      // API request using GET (works with shecodes.io API)
      const apiUrl =
        "https://api.shecodes.io/ai/v1/generate?prompt=" +
        encodeURIComponent(prompt) +
        "&context=" +
        encodeURIComponent(context) +
        "&key=" +
        apiKey;
  
      axios
        .get(apiUrl)
        .then(displayPoem)
        .catch((err) => console.error("API error:", err));
    };
  
    const poemFormElement = document.querySelector("#poem-generator-form");
    poemFormElement.addEventListener("submit", generatePoem);
  
  });
  