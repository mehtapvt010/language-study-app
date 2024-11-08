import { fetch } from "./fetch.js"

const inputLangElem = document.getElementById("input_lang")
const inputElem = document.getElementById("input")
const outputLangElem = document.getElementById("output_lang")
const outputElem = document.getElementById("output")
const translateButton = document.getElementById("translate")

translateButton.addEventListener("click", translate);

async function translate(){
  const input = inputElem.value;
  const inputLang = inputLangElem.value
  const outputLang = outputLangElem.value

  const translatedResp = await fetch("/api/translate", {body: {inLang: inputLang, outLang: outputLang, text: input}});

  const translatedObj = await translatedResp.json()

  outputElem.value = translatedObj.translated;
}