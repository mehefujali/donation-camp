function getInputValueById(id) {
      const input = document.getElementById(id)
      const inputValue = parseFloat(input.value)
      return inputValue
}
function getInerTextValueById(id) {
      const input = document.getElementById(id)
      // const inputValue = parseFloat(input.innerText)
      return input
}
function addToHistory(title, amount, date) {
      const historys = document.getElementById('historys')
      const div = document.createElement('div')
      div.classList.add('border', 'border-gray-300', 'mb-8', 'rounded-xl', 'p-4', 'shadow-lg')
      div.innerHTML = ` <h1 class=" text-2xl font-bold mb-4 "> ${amount}  Taka is Donated for ${title}  </h1>
      <p> ${date} </p>
      
      `
      historys.appendChild(div)
}