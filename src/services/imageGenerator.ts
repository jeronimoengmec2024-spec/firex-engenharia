import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImages() {
  const prompts = [
    {
      id: "hero",
      prompt: "Professional high-quality wide landscape shot of an industrial district at night, dramatic dark atmosphere with deep red and charcoal gray tones, illuminated warehouse and factory silhouettes, engineering elements, cinematic lighting, premium industrial style, 16:9 aspect ratio."
    },
    {
      id: "services",
      prompt: "Professional high-quality wide landscape texture of dark brushed metal and polished concrete, subtle industrial grid pattern, dark graphite and black tones, premium architectural finish, 16:9 aspect ratio."
    },
    {
      id: "segments",
      prompt: "Professional high-quality wide landscape perspective shot of a technical industrial corridor with red fire hydrant panels and sprinkler systems, dark moody atmosphere, cinematic lighting, deep red and black tones, premium engineering aesthetic, 16:9 aspect ratio."
    },
    {
      id: "cta",
      prompt: "Professional high-quality wide landscape shot of dramatic glowing embers and intense dark red flames, high contrast, dark moody background, premium cinematic style, 16:9 aspect ratio."
    }
  ];

  const results: Record<string, string> = {};

  for (const item of prompts) {
    console.log(`Generating ${item.id}...`);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: item.prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        results[item.id] = `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  }

  return results;
}

export { generateImages };
