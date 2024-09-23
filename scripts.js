
document.getElementById('donate-1-btn').addEventListener('click', function (event) {
      const totalWantedFund = document.getElementById('total-w-fund')
      const totalWantedFundValue = parseFloat(totalWantedFund.innerText)
      const donateInput = getInputValueById('donate-1-input')
      const donateFund = parseFloat(getInerTextValueById('donate-fund-1').innerText)

      const newDonateFund = donateFund + donateInput
      getInerTextValueById('donate-fund-1').innerText = newDonateFund
      console.log(newDonateFund);
      const newTotalWantedFund = totalWantedFundValue - donateInput
      totalWantedFund.innerText = newTotalWantedFund




})
document.getElementById('donate-2-btn').addEventListener('click', function (event) {
      const totalWantedFund = document.getElementById('total-w-fund')
      const totalWantedFundValue = parseFloat(totalWantedFund.innerText)
      const donateInput = getInputValueById('donate-2-input')
      const donateFund = parseFloat(getInerTextValueById('donate-fund-2').innerText)

      const newDonateFund = donateFund + donateInput
      getInerTextValueById('donate-fund-2').innerText = newDonateFund
      console.log(newDonateFund);
      const newTotalWantedFund = totalWantedFundValue - donateInput
      totalWantedFund.innerText = newTotalWantedFund




})
document.getElementById('donate-3-btn').addEventListener('click', function (event) {
      const totalWantedFund = document.getElementById('total-w-fund')
      const totalWantedFundValue = parseFloat(totalWantedFund.innerText)
      const donateInput = getInputValueById('donate-3-input')
      const donateFund = parseFloat(getInerTextValueById('donate-fund-3').innerText)

      const newDonateFund = donateFund + donateInput
      getInerTextValueById('donate-fund-3').innerText = newDonateFund
      console.log(newDonateFund);
      const newTotalWantedFund = totalWantedFundValue - donateInput
      totalWantedFund.innerText = newTotalWantedFund




})