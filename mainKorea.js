document.addEventListener('DOMContentLoaded', function () {
   let btn = document.getElementById('btn');

   btn.onclick = calculate;

   function calculate() {
      let comisia = Number(document.querySelector('.comisia').value);

      let priceAllKorea = function calculatePrice(priceKor) {

         if (priceKor > 1) {
            expensesKor = ((Number(document.querySelector('.price').value)) / 100 * 15);
         }
         return priceKor + expensesKor
      }
      console.log(priceAllKorea)
      let priceKorea = priceAllKorea(Number(document.querySelector('.price').value));
      console.log('в Y + расходы по Японии: ', priceKorea); // Сумма с расходами по Японии
      let priceRub = priceKorea * Number(document.querySelector('.kurs').value)
      console.log('в Рублях по введеному курсу + расходы по Японии: ', priceRub); // Сумма в рублях по введеному курсу


      let percentTamojn = (Number(document.querySelector('.tamojna').value)) + ((Number(document.querySelector('.tamojna').value)) / 100 * 1.5);
      console.log('Сумма таможни + 1,5%: ', percentTamojn); // Сумма таможни + 1,5%
      console.log('Сумма с учетом курса и таможни: ', priceRub + percentTamojn); // Сумма с учетом курса и таможни

      document.querySelector('.total').value = (priceRub + percentTamojn + comisia).toFixed(2); // Общая стоимость авто с учето м комисии 100,000р

      document.querySelector('.in-won').innerHTML = `${priceKorea} ₩`;
      document.querySelector('.in-rub').innerHTML = `${priceRub.toFixed(2)} &#8381`;
      document.querySelector('.tam').innerHTML = `${percentTamojn.toFixed(2)} &#8381`;
      document.querySelector('.kurs-tam').innerHTML = `${(priceRub + percentTamojn).toFixed(2)} &#8381`;
      document.querySelector('.all').innerHTML = `${(priceRub + percentTamojn + comisia).toFixed(2)} &#8381`;
   }
});
