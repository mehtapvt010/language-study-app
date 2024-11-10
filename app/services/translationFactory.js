import { TranslationService } from "./translationService";

export class TranslationFactory {
  constructor(){
    throw new Error("this is a factory")
  }

  static get(){
    return new TranslationService();
  }
}