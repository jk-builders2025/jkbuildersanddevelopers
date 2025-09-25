// src/lib/hf.ts
export const getHFResponse = async (question: string) => {
  try {
    const res = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-small",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: question }),
      }
    );

    const data = await res.json();
    console.log("HF Response:", data); // <-- debug response

    // Check if model returned an error
    if (data.error) return `HF Error: ${data.error}`;

    // Some models return array with generated_text
    if (Array.isArray(data) && data[0]?.generated_text) {
      return data[0].generated_text;
    }

    // Fallback for text-only responses
    if (typeof data?.generated_text === "string") {
      return data.generated_text;
    }

    return "Sorry, I couldn't generate an answer.";
  } catch (err) {
    console.error("HF API Error:", err);
    return "Something went wrong.";
  }
};
