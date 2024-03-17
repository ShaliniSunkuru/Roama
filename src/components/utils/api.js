import { API_KEY } from './keyConfig';

// Function to fetch translations from the API
export async function fetchTranslations(fixedTexts) {    
    const url = 'https://swift-translate.p.rapidapi.com/translate';
  
    // Object to store translated texts
    const translatedTextsCopy = {};
  
    // Loop through each fixed text
    for (const text of fixedTexts) {
        // Options for the fetch request
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'swift-translate.p.rapidapi.com'
            },
            body: JSON.stringify({
                text: text,
                sourceLang: 'en',
                targetLang: 'es'
            })
        };
  
        try {
            // Log Request URL
            // console.log("Request URL:", url);

            // Log Request Options
            // console.log("Request Options:", options);

            // Fetch translation from the API
            const response = await fetch(url, options);

            // Log Response Status
            // console.log("Response Status:", response.status);

            const result = await response.json();

            // Log Translated Text
            // console.log("Translated Text:", result.translatedText);

            // Store translated text in the copied object
            translatedTextsCopy[text] = result.translatedText;
        } catch (error) {
            // Log Error Message
            console.error("Error:", error.message);
        }
    }
  
    return translatedTextsCopy;
}