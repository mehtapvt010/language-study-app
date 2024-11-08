export function fetch(endpoint, data){
  return new Promise((res, rej) => {
    switch(endpoint){
      case "/api/translate":
        setTimeout(() => res({json: () => ({translated: "hi"})}), 1000);
        break
      default:
        rej("not implemented")
    }
  })
}