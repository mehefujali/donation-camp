// const modal = document.getElementById('modal')
// document.getElementById('close-modal').addEventListener('click', function () {
//       modal.classList.add('hidden')
// })
document.getElementById('donate-1-btn').addEventListener('click', function (event) {
      const totalWantedFund = document.getElementById('total-w-fund')
      const totalWantedFundValue = parseFloat(totalWantedFund.innerText)
      const donateInput = getInputValueById('donate-1-input')
      const donateFund = parseFloat(getInerTextValueById('donate-fund-1').innerText)


      if (donateInput < 0 || typeof (donateInput) !== "number" || isNaN(donateInput) === true) {
            alert('Invalid Input')
            return
      }
      if (totalWantedFundValue < donateInput) {
            alert('insufficient funds')
            return
      }
      const newDonateFund = donateFund + donateInput
      getInerTextValueById('donate-fund-1').innerText = newDonateFund
      const newTotalWantedFund = totalWantedFundValue - donateInput
      totalWantedFund.innerText = newTotalWantedFund
      const title = document.getElementById('title-1').innerText
      const date = new Date();
      addToHistory(title, donateInput, date)
      // modal.classList.remove('hidden')
      my_modal_1.showModal()
      document.getElementById('donate-1-input').value = ''
})
document.getElementById('donate-2-btn').addEventListener('click', function (event) {
      const totalWantedFund = document.getElementById('total-w-fund')
      const totalWantedFundValue = parseFloat(totalWantedFund.innerText)
      const donateInput = getInputValueById('donate-2-input')
      const donateFund = parseFloat(getInerTextValueById('donate-fund-2').innerText)
      if (donateInput < 0 || typeof (donateInput) !== "number" || isNaN(donateInput) === true) {
            alert('Invalid Input')
            return
      }

      if (totalWantedFundValue < donateInput) {
            alert('insufficient funds')
            return
      }
      const newDonateFund = donateFund + donateInput
      getInerTextValueById('donate-fund-2').innerText = newDonateFund
      console.log(newDonateFund);
      const newTotalWantedFund = totalWantedFundValue - donateInput
      totalWantedFund.innerText = newTotalWantedFund
      const title = document.getElementById('title-2').innerText

      const date = new Date();
      addToHistory(title, donateInput, date)
      my_modal_1.showModal()
      // modal.classList.remove('hidden')
      document.getElementById('donate-2-input').value = ''
})
document.getElementById('donate-3-btn').addEventListener('click', function (event) {
      const totalWantedFund = document.getElementById('total-w-fund')
      const totalWantedFundValue = parseFloat(totalWantedFund.innerText)
      const donateInput = getInputValueById('donate-3-input')
      const donateFund = parseFloat(getInerTextValueById('donate-fund-3').innerText)
      if (donateInput < 0 || typeof (donateInput) !== "number" || isNaN(donateInput) === true) {
            alert('Invalid Input')
            return
      }
      if (totalWantedFundValue < donateInput) {
            alert('insufficient funds')
            return
      }
      const newDonateFund = donateFund + donateInput
      getInerTextValueById('donate-fund-3').innerText = newDonateFund
      console.log(newDonateFund);
      const newTotalWantedFund = totalWantedFundValue - donateInput
      totalWantedFund.innerText = newTotalWantedFund
      const title = document.getElementById('title-3').innerText

      const date = new Date();
      addToHistory(title, donateInput, date)
      my_modal_1.showModal()
      // modal.classList.remove('hidden')
      document.getElementById('donate-3-input').value = ''

})


