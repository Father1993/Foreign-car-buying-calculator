document.addEventListener('DOMContentLoaded', function () {
   let btn = document.getElementById('btn');

   btn.onclick = calculateRev;

   function calculateRev() {
      let comisia = Number(document.querySelector('.comisia').value);

      let budget = Number(document.querySelector('.budget').value);

      let percentTamojn = (Number(document.querySelector('.tamojna').value)) + ((Number(document.querySelector('.tamojna').value)) / 100 * 1.5);

      let a = (budget - percentTamojn - comisia).toFixed(2);

      document.querySelector('.total').value = (a / Number(document.querySelector('.kurs').value)).toFixed(2);

      let b = a / Number(document.querySelector('.kurs').value);

      let ex;

      if (b <= 2000000) {
         ex = 350000
      }
      if (b > 2000000 && b <= 3500000) {
         ex = 400000
      }
      if (b >= 3500000 && b <= 5000000) {
         ex = 450000
      }
      if (b > 5000000) {
         ex = 550000
      }

      document.querySelector('.stat').innerHTML = `(!Проверь!) С минусом рассходов по Японии = ` + (b - ex).toFixed(2);

   }
});

