'use strict';
    var login = prompt('Введите ответ yes/no','');
var pass = (login == 'yes') ? 'successful' :
  (login == 'YES') ? 'successful!' :
  (login == 'no') ? 'unsuccessful' :
  (login == 'NO') ? 'unsuccessful':
  'Не коректный ввод';

  alert(pass);