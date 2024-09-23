const donateBtn = document.getElementById('donate-btn')
const historyBtn = document.getElementById('history-btn')
const donationPart = document.getElementById('donation-part')

historyBtn.addEventListener('click', function () {
      donateBtn.classList.remove('bg-primary-color')
      historyBtn.classList.add('bg-primary-color')
      donationPart.classList.add('hidden')

})
donateBtn.addEventListener('click', function () {
      donateBtn.classList.add('bg-primary-color')
      historyBtn.classList.remove('bg-primary-color')
      donationPart.classList.remove('hidden')


})

