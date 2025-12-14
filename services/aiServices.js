const Groq = require("groq-sdk");

const client = new Groq({ apiKey: process.env.AI_KEY});

module.exports.getApiResponse = async (message) => {
  try {
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content:
            "You are a Movie Recommendation AI. Always return exactly 10 movie titles ONLY, separated by the symbol ' | '. No descriptions. No numbering. No newlines. No bullets. Just a single string.If something asked rather than movie just reply i am a movie ai or something like that"
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    return response.choices[0].message.content;

  } catch (err) {
    console.error("GROQ ERROR:", err);
    return "Error calling AI service.";
  }
};
