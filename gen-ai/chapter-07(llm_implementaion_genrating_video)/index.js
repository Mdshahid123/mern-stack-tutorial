import openAi from "openAI"

let client =new openAI({apiKey:""})
client.audio.transcription.create