import { Service } from "./service.js";
import { Events } from "../eventhub/Events.js";
import { fetch } from "../fetch.js";

export class TranslationService extends Service {
  constructor() {
    super();
  }

  async translate(data) {
    // const input = inputElem.value;
    // const inputLang = inputLangElem.value;
    // const outputLang = outputLangElem.value;

    const translatedResp = await fetch("/api/translate", {
      body: data,//{ inLang: inputLang, outLang: outputLang, text: input },
    });

    const translatedObj = await translatedResp.json();

    // outputElem.value = translatedObj.translated;
    if(translatedObj.success){
      this.publish(Events.TranslateSuccess, translatedObj);
    }else{
      this.publish(Events.TranslateFailure, translatedObj);
    }
  }

  addSubscriptions() {
    this.subscribe(Events.Translate, (data) => {
      this.translate(data)
    });
  }
}
