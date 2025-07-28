require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// 1. Initialize with your API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

async function main(prompt) {
  // 2. Access the model
  const model = genAI.getGenerativeModel({
     model: "gemini-1.5-flash",
    systemInstruction:`
    You are a code review who have an experties in development.
    You look for the code and find problems and suggest solution for the developer.
    
    You always try to find best and efficient solution for the developer.
    Give solution in few lines don't extend it more.
    `
   }); 

  // 3. Send a prompt
  const result = await model.generateContent(prompt);

  // 4. Get the response text
  const response = await result.response;
  console.log("✅ Gemini response generated");
  return(response.text());
}

module.exports=main;// function for send prompt to user
