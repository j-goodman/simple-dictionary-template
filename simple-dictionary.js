getDefinitionAndThen("cantaloupe", definition => {
    console.log(definition[0].meanings[0].definitions[0].definition)
})

const inputBox = document.getElementById("input-box")
const submitButton = document.getElementById("submit-button")
const definitionBox = document.getElementById("definition-box")

submitButton.addEventListener("click", () => {
    console.log("The button has been clicked!")
})