const {TranslationServiceClient} = require('@google-cloud/translate');

// Instantiates a client
const projectId = 'language-app-441022';
const location = 'global';
const text = 'Hello, world!';

process.env.GOOGLE_APPLICATION_CREDENTIALS='/home/alex/language-app-441022-ace7a8d5f77c.json'
const translationClient = new TranslationServiceClient();


async function translateText() {
  // Construct request
  const request = {
      parent: `projects/${projectId}/locations/${location}`,
      contents: [text],
      mimeType: 'text/plain', // mime types: text/plain, text/html
      sourceLanguageCode: 'en',
      targetLanguageCode: 'es',
  };

  // Run request
  const [response] = await translationClient.translateText(request);

  for (const translation of response.translations) {
      console.log(`Translation: ${translation.translatedText}`);
  }
}

translateText();
