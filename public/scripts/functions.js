export const functions = {
    getAdvice: async (adviceText, adviceID) => {
        try {
            const res = await axios.get('https://api.adviceslip.com/advice')
            adviceText.innerHTML = `"${res.data.slip.advice}"`
            adviceID.innerHTML = `Advice# ${res.data.slip.id}`
        } catch(err) {
            console.error(err)
        }
    },
    disable2sec: (element) => {
        element.disabled = true
        setTimeout(() => {element.disabled = false}, 2000)
    }
}
