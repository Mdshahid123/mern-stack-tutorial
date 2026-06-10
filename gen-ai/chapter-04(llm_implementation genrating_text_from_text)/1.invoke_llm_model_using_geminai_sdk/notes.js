
//--------------------------------------------------------INVKING LLM MODELl----------------------------------------------------------------


//Invoking LLM model means  we are going to call the third party  llm model from our application 

//these model are hosted on the server of the company like openai,deepseek, meta,goggle gemini,grok cloud,Anthropic Claude,Groq,OpenRouter,Together AI,Fireworks AI, etc. and we make api call from our application and get the response from their model and use it in our application.

//for example, if we want to use the gpt model of openai, then we can call their api and get the response from their model and use it in our application. we can use this response to create a chatbot, virtual assistant,language translation, etc. in our application.




//----------------------------------------------------------------what sdk-------------------------------------------------------------------

// To use an LLM, we send API requests to the provider's endpoint or url or routes
// We can do this directly using fetch() or axios.

// Another easiest option is to use an SDK (Software Development Kit)
// provided by the company. SDKs wrap API calls and make  authentication, error handling, streaming, and other tasks easier.

// Many providers expose OpenAI-compatible APIs, so they can be used
// with the OpenAI SDK. Examples:
//
// - DeepSeek
// - Groq
// - OpenRouter
// - Together AI
// - Fireworks AI
//
// For these providers, we usually only need to change the API key
// and baseURL while keeping most of the code the same.

// Some providers have their own API formats and official SDKs:
//
// - Google Gemini
// - Anthropic Claude
//
// These can be used through their own SDKs or by making direct
// HTTP requests to their APIs.



// -----------------------------------------------------------------APIKEY---------------------------------------------------------------------//

//To call the llm model from our application, we need to have an api key from the company whose model we want to use. for example, if we want to use the gpt model from openai, then we need to have an api key from openai. and then we can use this api key to make api call and get the response from their model and use it in our application.


//---------------------------------------------------------------------WHY WE NEED A API KEY -----------------------------------------------------

//api key ki zarurat isliye hoti hai taki company user ko track kar sake like ki kaun unke model ko use kar raha hain, free version or paid version liya hain,free version main aap ko km api call milega and paid main aap ko jyada api call akr sake te hain 



//aur agar koi user unke model ko misuse karta hai ya unke model ke terms and conditions ko violate karta hai, to company us user ke api key ko block kar sakti hai aur us user ko unke model ka access nahi de sakti hai. isse company apne model ke security ko maintain kar sakti hai aur apne model ke misuse ko rok sakti hai. isliye api key ki zarurat hoti hai jab hum third party llm model ko apne application me use karte hain.




//-------------------------------------------------------------APPLICATION OF LLM MODEL-----------------------------------------------------------

//LLM models ka use chatbots, virtual assistants, language translation, aur bahut sare applications me hota hai.


//in this chapter we will invoke the llm model of Googlee gemini but you can invoke the llm model of any company like google, meta, gemini,open ai etc. the process is same for all the companies, you just need to have an api key from the company whose model you want to use and then you can call their api and get the response from their model and use it in your application.