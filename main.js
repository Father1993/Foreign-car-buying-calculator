document.addEventListener('DOMContentLoaded', function () {
   let btn = document.getElementById('btn');

   btn.onclick = calculate;

   function calculate() {
      let comisia = Number(document.querySelector('.comisia').value);

      let priceAllJapan = function calculatePrice(priceJp) {


         if (priceJp < 2000000) {
            expensesJp = 350000;
         }
         if (priceJp >= 2000000 && priceJp < 3500000) {
            expensesJp = 400000;
         }
         if (priceJp >= 3500000 && priceJp < 5000000) {
            expensesJp = 450000;
         }
         if (priceJp < 500000) {
            expensesJp = 350000;
         }
         return priceJp + expensesJp
      }
      console.log(priceAllJapan)
      let priceJapan = priceAllJapan(Number(document.querySelector('.price').value));
      console.log('в Y + расходы по Японии: ', priceJapan); // Сумма с расходами по Японии
      let priceRub = priceJapan * Number(document.querySelector('.kurs').value)
      console.log('в Рублях по введеному курсу + расходы по Японии: ', priceRub); // Сумма в рублях по введеному курсу


      let percentTamojn = (Number(document.querySelector('.tamojna').value)) + ((Number(document.querySelector('.tamojna').value)) / 100 * 1.5);
      console.log('Сумма таможни + 1,5%: ', percentTamojn); // Сумма таможни + 1,5%
      console.log('Сумма с учетом курса и таможни: ', priceRub + percentTamojn); // Сумма с учетом курса и таможни

      document.querySelector('.total').value = (priceRub + percentTamojn + comisia).toFixed(2); // Общая стоимость авто с учето м комисии 100,000р

      document.querySelector('.in-yen').innerHTML = `${priceJapan} ¥`;
      document.querySelector('.in-rub').innerHTML = `${priceRub.toFixed(2)} &#8381`;
      document.querySelector('.tam').innerHTML = `${percentTamojn.toFixed(2)} &#8381`;
      document.querySelector('.kurs-tam').innerHTML = `${(priceRub + percentTamojn).toFixed(2)} &#8381`;
      document.querySelector('.all').innerHTML = `${(priceRub + percentTamojn + comisia).toFixed(2)} &#8381`;
   }
});
