import humans from './products.js';

// Фон страницы меняет цвет рандомно
// const colors = ['teal', 'pink', 'grey', 'yellow', 'skyblue', 'red', 'orange'];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// Сравнение строк - сравниваются посимвольно 1ый с 1ым, если равны, то 2ой с 2ым...
// console.log('Bob' > 'Alice');
// console.log('2'>'12');
// console.log('Bob'.charCodeAt(0));
// console.log('Alice'.charCodeAt(0));

// Возведение в степень по запросу юзера
// const base = prompt('Введи число');
// const power = prompt('Введи степень');
// // const result = Math.pow(base, power);
// // console.log(result);
// const result = alert(`Результат: ${Math.pow(base, power)}`)

// Приведение букв к 1 размеру кроме первой
// let brand = prompt('Введіть бренд');
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// Поиск спам-слов
// const blacklistedWord1 = 'спам';
// let subject1 = 'Привет, это не СПАМ';
// let subject2 = 'Деловое предложение';
// console.log(subject1.toLocaleLowerCase().includes(blacklistedWord1));
// console.log(subject2.toLocaleLowerCase().includes(blacklistedWord1));

// Открыть чат, если друг онлайн, если он друг и без режима "Не беспокоить"
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат?', canOpenChat);

// Доступ к коненту в зависимости от подписки
// const sub = 'vip';
// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Есть доступ к контенту?', canAccessContent);

// Запрос пин-кода в банкомате - использовать do-while:
// сначала запрос пин-кода, потом проверка и повтор каждый раз, пока вводится неправильный пароль

// Задача1: разрешить или запретить транзакцию в зависимости от наличия доступных средств
// let balance = 10000;
// const payment = 30000;
// let message = alert(`Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету`);
// if (payment <= balance) {
//     balance -= payment;
//     message = alert(`Все хорошо, снимаем деньги. На счету осталось ${balance} кредитов. спасибо за покупку!`);
// } else {
//     message = alert(`На счету недостаточно средств для проведения операции!`);
// };
// const finalMessage = alert('Операция завершена');

// Задача 2: высчитать скидку в зависимости от потраченной суммы и посчитать сумму покупки со скидкой
// let totalSpent = 3000;
// const payment = 500;
// let discount = 0;
// let message = '';
// if (totalSpent <= 100) {
//     message = alert(`У Вас еще нет партнерской скидки`);
// } else if (totalSpent > 100 && totalSpent <= 1000) {
//     discount = 0.02;
//     message = alert(`Вы бронзовый партнер, Ваша скидка 2%`);
// } else if (totalSpent > 1000 && totalSpent <= 5000) {
//     discount = 0.05;
//     message = alert(`Вы серебрянный партнер, Ваша скидка 5%`);
// } else {
//     discount = 0.1;
//     message = alert(`Вы золотой партнер, Ваша скидка 10%`);
// };
// const discountedPayment = payment - payment * discount;
// totalSpent += discountedPayment;
// const orderMessage = alert(`Оформляем заказ на сумму ${discountedPayment} со скидкой ${discount*100}%`)

// Задача 3: посчитать сумму зп работников, если зп каждого - рандомная
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 5;
// let salary;
// let totalSalary = 0;
// for (let i = 0; i <= employees; i+=1) {
//     salary = Number((Math.random() * (maxSalary - minSalary) + minSalary).toFixed(2));
//     totalSalary += salary;
//     console.log(salary);
// }
// console.log('Сумма зарплат:', Number(totalSalary.toFixed(2)));

// Задача 4: посчитать сумму всех четных и нечетных чисел в диапазоне от мин и до макс
// const min = 0;
// const max = 10;
// let total = 0;
// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//         console.log(i);
//         total += i;
// }
// console.log('Общая сумма', total);

// Задача 5: прибавлять значение при клике по кнопке
// const addBtn = document.querySelector('button[data-add]');
// const resetBtn = document.querySelector('button[data-reset]');
// const valueInput = document.querySelector('input[data-value]');
// const outputEl = document.querySelector('.js-output span');
// let total = 0;
// addBtn.addEventListener('click', function () {
//     total += Number(valueInput.value);
//     outputEl.textContent = total;
//     valueInput.value = '';
// })
// resetBtn.addEventListener('click', function () {
//     total = 0;
//     outputEl.textContent = total;
// })

// // Работа с циклом for
// // объявление переменной до цикла, чтобы иметь к ней доступ после цикла
// let num;
// for (num = 0; num < 5; num++) {
//     console.log(num);
// //прекращение работы цикла при определенном условии
// //или пропуск текущей и переход к следующей итерации при определенном условии
//     if (num == 3) break; или if (num == 3) continue;
// }
// // переменная доступна, т.к. объявлена до цикла
// console.log(num);

// можно сразу инициализировать переменную и убрать инициализацию из условия
// можно перенести пост-выражение из условия в тело цикла
// let num = 0;
// for (; num < 5;) {
// i++;
// }
// console.log(num);

// Прерывание родительского цикла при выполнении условия в дочернем (метка)
// firstFor: for (let num = 0; num < 4; num++) {
//     console.log("Num=",num);
//     for (let size = 0; size < 6; size++) {
//         if (size == 3) { break firstFor };
//         //  пропуск итерации - вместо break - continue
//         console.log("Size=", size);
//     }
// }

// Задача: вывести все числа от мин до макс, если они кратны 5
// const min = 10;
// const max = 50;
// for (let i = min; i < max; i += 1) {
//     if (i % 5 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// Задача: посчитать сумму всех чисел от 0 до 1000 кратных 3 и 5
// const max = 1000;
// const num1 = 3;
// const num2 = 5;
// let sum = 0;
// for (let i = 0; i <= max; i += 1) {
//     if (i % 3 !== 0 && i % 5 !== 0) {
//         continue;
//     }
//     sum += i;
// }
// console.log("Общая сумма: ", sum);

// Задача: проверка пользователя:
// const loginInput = prompt('Введите логин').toLowerCase();
// const pass = "Я админ";
// if (loginInput === null || loginInput === "") {
//     alert('Отменено!');
// } else if (loginInput === "admin" || loginInput === "админ" ) {
//     const passInput = prompt('Введите пароль');
//     passInput === pass ? alert('Здравствуйте!') : alert('Пароль неверный!');
// } else {
//     alert('Я вас не знаю!');
// }

// Задача: высчитать ИМТ, если значения написаны через , и парсфлоат не подходит
// const calculateBmi = function (obj) {
//     const values = Object.values(obj);
//     const keys = Object.keys(obj);

//     for (let value of values) {
//         if (value.includes(',')) {
//             for (let key of keys) {
//                 if (obj[key] === value) {
//                     obj[key] = Number(value.replace(',','.'));
//                     // или = Number(`${value.slice(0, value.indexOf(','))}.${value.slice(value.indexOf(',') + 1)}`);
//                 };
//             };

//         } else {
//             for (let key of keys) {
//                 if (obj[key] === value) {
//                     obj[key] = parseFloat(value);
//                 };
//             };
//         };
//     }

//     return (obj.weight / Math.pow(obj.height, 2)).toFixed(2);
//         // или (obj.weight / obj.height ** 2).toFixed(2);
// }

// const userJulia = { weight: '110,5', height: '1.78' };
// const userNastia = { weight: '74', height: '1.60' };

// console.log(calculateBmi({weight: '88,5', height: '1.68'}));
// console.log(calculateBmi(userJulia));
// console.log(calculateBmi(userNastia));

// // Функция с задержкой (для счетчика, таймера):
// Сеттаймаут - отсрочка начала функции
// Сетинтервал - интервал между повторными запусками функции
// Вместо сетинтервал лучше использовать рекурсивный сеттаймаут (чтобы точно подсчитывался интервал внутри функции)
// function showNumber(num) {
//     console.log(num);
//     // запись отсрочки в переменную, чтобы ее потом остановить
//     let timeId = setTimeout(showNumber, 1000, ++num);
//     // остановка счетчика
//     if (num === 5) { clearTimeout(timeId); }
// }
// // отсрочка начала выполнения функции
// setTimeout(showNumber, 1000, 1);

// Вызов нескольких функций одной функцией:
// function createMessage(text, name) {
//     return `${text}, ${name}!`;
// }
// function showMessage(message) {
//     console.log(message);
// }
// function initMessage(text, name) {
//     showMessage(createMessage(text, name));
// }
// initMessage('Привет', 'Вася');

// // Перебор FOR OF - вывод в консоль каждой буквы строки
// const string = "javascript";
// for (const character of string) {
//     console.log(character);
// }

// Добавление элементов в массив
// const colors = ['blue', 'red', 'green'];
// const newColors = colors.splice(1, 1, 'yelow', 'grey');
// console.log(colors);
// console.log(newColors);

// Изменение значения каждого элемента массива:
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax', 'Julia'];
// for (let i = 0; i < friends.length; i += 1) {
//     friends[i] += "-friend";
// }
// console.table(friends);

// Задача. Поиск имени в массиве имен
// const familyMembers = ["Ira", "Julia", "Nastia", "Darinka", "Kuzia", "Bars"];
// const memberToFind = prompt("Fill the name of family member, please");
// let message = "Member was not found :(";
// for (const member of familyMembers) {
//     if (member === memberToFind) {
//         message = "Member was found!";
//         break;
//     }
// }
// или
// message = familyMembers.includes(memberToFind) ? "Member was not found :(" : "Member was found!"
// console.log(message);

// Преобразовать прошлую задачу в функцию (раскомм. стр. 264,265)
// const findMember = function (members, memberToFind) {
//     return members.includes(memberToFind) ? "Member was found!" : "Member was not found :(";
// }
// console.log(findMember(familyMembers, memberToFind));

// Найти самое меньшее число в массиве
// const numbers = [51, 4, 18, 29, 1, 6, 13];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     };
// }
// console.log(smallestNumber);

// Переписать на функцию (раском. стр. 287)
// const findSmallestNumber = function (numbersArr) {
//     let smallestNumber = numbersArr[0];
//     for (const number of numbersArr) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }
//     return smallestNumber;
// }
// console.log(findSmallestNumber(numbers));

// Инвертировать верхний и нижний регистр
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';
// for (const letter of letters) {
//     invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedString);

// Переписать на функцию (раском. стр. 310):
// const invertCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';
//     for (const letter of letters) {
//         invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
//     }
//     return invertedString;
// }
// console.log(invertCase(string));
// console.log(invertCase("mANgo"));
// console.log(invertCase("qweRtY"));
// console.log(invertCase("AJAX"));

// Функция преобразования строки в слаг-строку:
// const slugify = function (string) {
//     return string.toLowerCase().split(" ").join("-");
// }
// console.log(slugify("London is the capital of GB"));

// Создание массива из аргументов
// const fn = function (a, b, ...args) {
//     console.log(a, b, "args: ", args);
// };
// fn('Halo', 1, 2, 3);

// Найти самое длинное слово
// function findLongestWord(string) {
//   const words = string.split(' ');
//   let longestWord = words[0];
//   for (const word of words) {
//     let wordLength = word.split('').length;
//     if (wordLength > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("Vienna is the capital of Osterreich"));

// Работа только с числами! Проверка введенных данных (строка-число):
// const getRectArea = function (a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         alert("Введите цифровые значения")
//         return;
//     }
//     if (a === null || b === null) {
//     alert("Вы не завершили операцию ввода")
// }
//     return a * b;
// }
// console.log(getRectArea(1, "5"));
// console.log(getRectArea(1, 5));

// Создать массив целых чисел от мин до макс
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 20));

// Отфильтровать все значения больше value
// function filterArray(numbers, value) {
//   const newNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newNumbers.push(number);
//     }
//   }
//   return newNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// Найти общие (повторяющиеся) элементы 2 массивов:
// function getCommonElements(array1, array2) {
// const commonArray = [];
// for (const item of array1) {
// if (array2.includes(item)) {
//   commonArray.push(item);
// }
//   }
//   return commonArray;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// Вернуть четные числа от мин до макс
// function getEvenNumbers(start, end) {
//   const array = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 !== 0) {
//       continue;
//     }
//     array.push(i);
//   }
//   return array;
//   }
// console.log(getEvenNumbers(3, 10));

// Проверить, содержит ли массив value
// function includes(array, value) {
// for (const item of array) {
//   if (item === value) {
//     console.log(`${array[i]} - true`);
//     return true;
//   }
//     console.log(`${array[i]} - false`);
//     return false;
//   }
// }
// includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter');
// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);

// Отфильтровать повторяющиеся числа в массиве и в списке произвольных чисел:
// const filterNumbers = function (array, ...args) {
//   const newArray = [];
//   // let i = 0;
//   for (const element of array) {
//     // if (element === args[i]) {
//     //   newArray.push(args[i]);
//     //   i += 1;
//     // }
//     // или
//     if (args.includes(element)) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }
// console.log(filterNumbers([1, 2, 3, 4, 5], 1, 2, 3, 9, 12, 17));

// Расставить по алфавиту слова в массиве
// const words = ["Julia", "Nastia", "Darinka", "Ira", "Kuzia", "Bars"];

// Форматировать минуты в часы:минуты
// const formatTime = function (minute) {
//     const hours = Math.floor(minute / 60);
//     const minutes = minute % 60;
//     const convertedHours = hours < 10 ? `0${hours}` : hours;
//     const convertedMinutes = minutes < 10 ? `0${minutes}` : minutes;
//     console.log(`${convertedHours}:${convertedMinutes}`);
// }
// console.log(formatTime(50));
// console.log(formatTime(185));
// console.log(formatTime(1441));

// Каждому имени из строки 1 должен соответствовать телефон из строки 2
// const names = "Julia,Nastia,Darinka,Ira,Bars,Lili,Hofer";
// const phones = "1234567,7654321,567890,098765,123890,098321";
// const namesArr = names.split(",");
// const phonesArr = phones.split(",");
// let longestArr = [];
// longestArr = namesArr.length > phonesArr.length ? namesArr : phonesArr;
// for (let i = 0; i < longestArr.length; i += 1) {
//     const phone = phonesArr[i] !== undefined ? phonesArr[i] : "пока неизвестен";
//     const name = namesArr[i] !== undefined ? namesArr[i] : "имя не придумали";
//     console.log(`${name}'s tel: ${phone}`);
// }

// // Сделать из 2 строк (имена и телефоны) объект со свойствами в виде имя: телефон
// const printContactsInfo = function ({ names, phones }) {
//     const nameList = names.split(",");
//     const phoneList = phones.split(",");
//     const longestArray = nameList.length > phoneList.length ? nameList : phoneList;
//     const contactsInfo = {};
//     for (let i = 0; i < longestArray.length; i += 1) {
//         const name = nameList[i] !== undefined ? nameList[i] : `No name :(`;
//         const phone = phoneList[i] !== undefined ? phoneList[i] : `No phone :(`
//         contactsInfo[name] = phone;
//     };
//     console.log(contactsInfo);
// }
// const contacts = {
//     names: 'Julia,Nastia,Darinka,Ira,Bars,Lili,Hofer',
//     phones: '1234567,7654321,567890,098765,123890,098321'
// };
// console.log(printContactsInfo(contacts));

// Выводить в консоль все слова кроме первого и последнего без пробелов в начале и конце
// const string = "Мама мыла раму вчера вечером";
// const stringArr = string.split(" ");
// const finalString = stringArr.slice(1, stringArr.length-1).join(" ");
// console.log(finalString);

// ---------------------------------------------------
// ОБЪЕКТЫ

// const stud = {
//     name: 'Julia',
//     age: 35,
//     location: {
//         city: 'NY',
//     }
// };
// const key1 = 'name';
// const key2 = 'age';
// console.log(stud.name); // нашли значение св-ва с названием нейм
// console.log(stud['name']); // нашли значение св-ва с названием нейм
// console.log(stud[key1]); // нашли значение св-ва с названием, хранящимся в переменной кей1
// stud.age = 10; // изменили значение свойства
// stud['age'] = 15; // изменили значение свойства
// stud.sex = 'female'; // добавили свойство со значением
// console.log(stud?.location?.city); //проверяет, есть ли вложенное свойство,выводит если есть
// console.log(stud?.location?.street); //проверяет, есть ли вложенное свойство, выводит андефайнд если нет (вместо ошибки)
// console.log(stud.course.lang); // course undefined, на нем lang ошибка
// console.log(stud);

// Посчитать количество фидбеков
// const feedback = {
//     good: 5,
//     neutral: 8,
//     bad: 3,
// };
// // const keys = Object.keys(feedback);
// // let totalFeeds = 0;
// // for (const key of keys) {
// //     totalFeeds += feedback[key];
// // }
// const values = Object.values(feedback);
// let totalFeeds = 0;
// for (const value of values) {
//     totalFeeds += value;
// }
// console.log(totalFeeds);

// Следующие 4 задачи для работы с этим массивом
// const friends = [
//     { name: 'Mango', age: 12, city: 'LA', online: true },
//     { name: 'Kiwi', age: 100, city: 'DN', online: false },
//     { name: 'Poly', age: 35, city: 'NY', online: false },
//     { name: 'Ajax', age: 21, city: 'TA', online: true }
// ];

// 1. Найти друга по имени
// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         if (friend.name === friendName) {
//             return `Нашли друга с именем ${friendName}`;
//         };
//     };

//     return `Друга с именем ${friendName} нет`;
// }
// console.log(findFriendByName(friends, 'London'));

// 2. Получить имена всех друзей
// const getAllNames = function (allFriends) {
//     const namesArr = [];
//     for (const friend of allFriends) {
//         namesArr.push(friend.name);
//     }
//     return namesArr;
// }
// console.log(getAllNames(friends));

// // и с помощью метода перебора массивов
// const getAllNames = allFriends => allFriends.map(friend => friend.name);
// console.log(getAllNames(friends));

// 3. Получить имена друзей, которые оффлайн
// const getOfflineNames = function (allFriends) {
//     const offlineNames = [];
//     for (const friend of allFriends) {
//         if (!friend.online) {
//             offlineNames.push(friend.name);
//         }
//     }
//     return offlineNames;
// }
// console.log(getOfflineNames(friends));

// // и с помощью метода перебора массивов
// const friendsOffline = friends.filter(friend => !friend.online).map(friend => friend.name);
// console.log(friendsOffline);

// 4. Получить имена друзей онлайн и офлайн отдельно
// const getFriendsByStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     };
//     for (const friend of allFriends) {
//         !friend.online ? friendsByStatus.offline.push(friend.name) : friendsByStatus.online.push(friend.name);
//         // или
//         // const key = friend.online ? 'online' : 'offline';
//         // friendByStatus[key].push(friend);
//     }
//         return friendsByStatus;
//     }
// console.log(getFriendsByStatus(friends));

// // и с помощью метода перебора массивов
// const friendsOnline = friends.filter(friend => friend.online);
// console.log(friendsOnline);
// const friendsOffline = friends.filter(friend => !friend.online);
// console.log(friendsOffline);

// Создать корзину товаров
// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//         }
//         };

//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };
//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         const { items } = this;
//         for (let i = 0; i < items.length; i += 1) {
//             const { name } = items[i];
//             if (name === productName) {
//                 items.splice(i, 1);
//             }
//         }
//         return this.getItems();
//     },
//     clear() {
//         this.items = [];
//         return this.items;
//     },
//     countTotalPrice() {
//         const { items } = this;
//         let total = 0;
//         for (let {price, quantity} of items) {
//             total += price * quantity;
//         }
//         return total;
//     },
//     increaseQuantity(productName) {
//         const { items } = this;
//         for (let item of items) {
//             if (item.name === productName) {
//                 item.quantity += 1;
//                 return `Было ${item.quantity-1}, стало ${item.quantity}`;
//             }
//         }
//     },
//     decreaseQuantity(productName) {
//                 for (let item of this.items) {
//             if (item.name === productName) {
//                 item.quantity -= 1;
//                 return `Было ${item.quantity+1}, стало ${item.quantity}`;
//             }
//         }
//     },
// }
// console.log(cart.getItems());
// cart.add({ name: "banana", color: "yellow", price: 50 });
// cart.add({ name: "orange", color: "orange", price: 120 });
// cart.add({ name: "peach", color: "red", price: 18 });
// cart.add({ name: "peach", color: "red", price: 18 });
// console.log(cart.items);
// console.log(cart.increaseQuantity('banana'));
// console.log(cart.items[0].quantity);
// console.log(cart.countTotalPrice());
// console.log(cart.increaseQuantity('peach'));
// console.log(cart.items[2].quantity);
// console.log(cart.countTotalPrice());
// console.log(cart.decreaseQuantity('orange'));
// console.log(cart.items[1].quantity);
// console.log(cart.countTotalPrice());
// console.log(cart.remove('banana'));
// console.log(cart.clear());

// Создать банкомат
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
//     LIMIT: 10000,
// }

// const account = {
//     balance: 0,
//     transactions: [],
//     createTransaction(amount, type) {
//         return {
//             amount,
//             type,
//             id: this.transactions.length,
//         }
//     },
//     // deposit(amount) {
//     //     this.balance += amount;
//     //     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     //     this.transactions.push(transaction);
//     //     return `Account deposited for ${amount} euro, your balance is ${this.balance}`;
//     // },
//     // withdraw(amount) {
//     //     if (this.balance < amount) {
//     //         return `You don't have enough funds!`
//     //     }
//     //     this.balance -= amount;
//     //     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     //     this.transactions.push(transaction);
//     //     return `${amount} euro withdrawed, your balance is ${this.balance}`;
//     // },
//     deposit(amount, onSuccess, onError) {
//         if (amount > Transaction.LIMIT) {
//             return onError(`Вы превысили лимит ${Transaction.LIMIT}`);
//         }
//         if (amount <= 0) {
//             return onError(`Вы ввели сумму меньше 0`);
//         }
//         this.balance += amount;
//         const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.transactions.push(transaction);
//         return onSuccess(`Вы положили ${amount} евро на ваш счет, теперь ваш баланс ${this.balance}`);
//     },
//     withdraw(amount, onSuccess, onError) {
//         if (amount > Transaction.LIMIT) {
//             return onError(`Вы превысили лимит ${Transaction.LIMIT}`);
//         }
//         if (amount > this.balance) {
//             return onError(`Вы превысили баланс ${this.balance}`);
//         }
//         this.balance -= amount;
//         const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//         this.transactions.push(transaction);
//         return onSuccess(`${amount} евро снято, ваш баланс ${this.balance}`);
//     },
//     getBalance() {
//         return this.balance;
//     },
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction;
//             }
//         }
//         return `There is no such transaction`;
//     },
//     getTransactionTotal(type) {
//         let total = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 total += Number(transaction.amount);
//             }
//         }
//         return total;
//      },
// };

// function handleSuccess(message) {
//     return `Все хорошо: ${message}`;
// }

// function handleError (message) {
//     return `Ошибка: ${message}`;
// }

// console.log(account.deposit(800));
// console.log(account.deposit(100));
// console.log(account.withdraw(300));
// console.log(account.withdraw(30));
// console.log(account.getTransactionDetails(2));
// console.log(account.getBalance());
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account);

// console.log(account.deposit(9000, handleSuccess, handleError));
// console.log(account.deposit(500, handleSuccess, handleError));
// console.log(account.deposit(0, handleSuccess, handleError));
// console.log(account.deposit(22000, handleSuccess, handleError));
// console.log(account.withdraw(500, handleSuccess, handleError));
// console.log(account.withdraw(9500, handleSuccess, handleError));
// console.log(account.withdraw(11000, handleSuccess, handleError));

// Задача сравнить 2 массива
// const numbers1 = [1, 2, 3, 4, 5];
// const numbers2 = [1, 2, 3, 4, 5];
// const numbers3 = [1, 4, 3, 4, 5];
// const compareArray = function (arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return `Arrays length is not equal`;
//     };
//     for (const el of arr1) {
//         const index = arr1.indexOf(el);
//         if (el !== arr2[index]) {
//             return `Arrays elements number ${index+1} are not equal`;
//         };
//     };
//         return `Arrays are equal`;

// };
// console.log(compareArray(numbers3, numbers2));

// Задача.Создать объект с данными контакта.
// Возвращать новый объект со свойствами id и createdAt.
// // Добавлять list = "default", если свойства лист в объекте нет.
// function createContact(userInfo) {
//     const { list = 'default' } = userInfo;
//     // const list = userInfo.list ?? 'default'; - второй вариант
//     return {
//         // list: 'default', - третий вариант, но лист внизу убрать
//         ...userInfo,
//         id: generateId(),
//         createdAt: '08.08.2022',
//         list,
//     }
// }
// const poly = {
//     firstName: 'Poly',
//     lastName: 'Werber',
//     age: '15',
//     address: 'Colorado',
//     online: true,
// };

// const mango = {
//     firstName: 'Mango',
//     lastName: 'Chocolate',
//     age: '12',
//     address: 'Ukraine',
//     online: false,
//     list: 'friends',
// };

// console.table(createContact(mango));
// console.table(createContact(poly));
// function generateId() {
//     const id = (Math.random() * (1000000 - 100000) + 100000).toFixed();
//     return id;
// }

// Задача. Вернуть объект контакта со свойством полное имя:
// function transformName({ firstName, lastName, ...props }) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props,
//     };
// };
// console.table(transformName(mango));
// console.table(transformName(poly));

// Задача с зельями - potions
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//       this.potions.push(newPotion);
//       return this.potions;
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//      return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.removePotion('Speed potion'));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));

// Посчитать зарплату всех работников из объекта
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.keys(salaries);
//   for (let key of keys) {
//     console.log(salaries[key]);
//   }
//   // Change code above this line
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// ------------------------------------------
// ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВОВ

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//     { name: "Манго", coursesNum: 1, courses: ["українська", "математика", "фізика"], score: 83, },
//     { name: "Аякс", coursesNum: 2, courses: ["українська", "математика", "інформатика"], score: 37 },
//     { name: "Полі", coursesNum: 3, courses: ["українська", "інформатика", "фізика"], score: 59, },
//     { name: "Ківі", coursesNum: 4, courses: ["українська", "фізика", "біологія"], score: 94, },
//     { name: "Хьюстон", coursesNum: 5, courses: ["українська", "математика", "біологія"], score: 64 },
// ];

// students.forEach((student, index) => console.log(`${index+1} - ${student.name}- ${student.courses}`));
// students.forEach(student => student.score += 10);
// console.log(students);
// const studentsCourses = students.forEach(student => console.log(student.courses));
// console.log(studentsCourses); // undefined потому что форич ничего не возвращает, мутирует исходный массив или просто перебирает его

// // или с исп. функции:
// const print = element => console.log(element.courses);
// const studentCourses = students.forEach(print);

// const mapOfCourses = students.map(student => student.courses);
// console.log(mapOfCourses);

// Вернуть только имена и баллы в объекте c деструктуризацией:
// const studentsScores = students.map(({ name, score }) => ({
//     name,
//     score,
// }));
// console.table(studentsScores);

// Увеличить всем баллы на 15%
// const multScores = students.map(student =>
//     // { return {
//     //     name: student.name,
//     //     score: student.score * 1.15,
//     // }
//     // или если все св-ва нужно сохранить:
//             ({...student,
//     score: student.score * 1.15,
// }));
// console.table(multScores);

// Увеличить баллы у 1 студента по имени:
// const studentToUpdate = "Ківі";
// const updatedStudents = students.map(student =>
//     studentToUpdate === student.name ?
//         {
//             ...student,
//             score: student.score * 1.15,
//         }
//         : student
// );
// console.table(updatedStudents);

// // Задача. Разгладить массив с массивами до 1 уровня
// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);

// // Задача. Отфильтровать уникальные элементы массива
// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);
// console.log(uniqueCourses);

// // Відфільтрувати кращих (бал вище 80), гірших (бал нижче 50) і середніх студентів (бал від 50 до 80).
// const bestScore = students.filter(student => student.score > HIGH_SCORE);
// console.log(bestScore);
// const worstScore = students.filter(student => student.score < LOW_SCORE);
// console.log(worstScore);
// const averScore = students.filter(student => student.score >= LOW_SCORE && student.score <= HIGH_SCORE);
// console.log(averScore);

// // Найти студента с наивысшим баллом
// const scores = students.map(student => student.score);
// const maxScore = Math.max(...scores);
// const bestStudent = students.find(student => student.score === maxScore);
// console.log(bestStudent);
// // или
// // const bestStudentIndex = students.findIndex(student => student.score === maxScore);
// // console.log(students[bestStudentIndex]);

// Функция найти студента с баллом:
// const findStudent = (allStudents, scoreToFind) =>
//     allStudents.find(({score}) => score === scoreToFind);
// console.log(findStudent(students, 37));

// // Проверить, есть ли студенты, которые учат мат, био, укр и все ли студенты учат их
// const mathStudents = students.every(student => student.courses.includes('математика'));
// console.log(`Всі студенти вчать математику: ${mathStudents}`);
// const ukrStudents = students.every(student => student.courses.includes('українська'));
// console.log(`Всі студенти вчать українську: ${ukrStudents}`);
// const bioStudents = students.some(student => student.courses.includes('біологія'));
// console.log(`Деякі студенти вчать біологію: ${bioStudents}`);

// // Вычислить средний балл студентов
// const averageScore = students.reduce((total, student) => { return total + student.score }, 0) / students.length;
// console.log(averageScore);

// // Отсортировать студентов по высшему, низшему баллу и по именам
// const ascendingScore = students.sort((firstStudent, secondStudent) => firstStudent.score - secondStudent.score);
// console.table(ascendingScore);
// const descendingScore = students.sort((firstStudent, secondStudent) => secondStudent.score - firstStudent.score);
// console.table(descendingScore);
// const studentsSortedByName = students.sort((firstStudent, secondStudent) => firstStudent.name.localeCompare(secondStudent.name));
// console.table(studentsSortedBy Name);

// // Получить массив имен, отсортированный по возрастанию баллов
// const namesByScore = [...students]
//     .sort((firstStudent, secondStudent) => firstStudent.score - secondStudent.score)
//     .map(student => student.name);
// console.log(namesByScore);

// // Получить массив уникальных предметов по алфавиту
// const coursesByAscending = students.flatMap(student => student.courses)
//     .filter((course, index, array) => array.indexOf(course) === index)
//     .sort((a, b) => a.localeCompare(b));
// console.table(coursesByAscending);

// Посчитать общее количество тегов всех твитов
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

//  // const getTags = tweets =>
//  //  tweets.reduce(function (acc, tweet) {
//  //    acc.push(...tweet.tags);
//  //    return acc;
//  //  }, []);
//  // так мутирует аргумент acc в исходном параметре.
//  // Чтобы этого не было:
// const getTags = tweets =>
//     tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// или
//     tweets.flatMap(tweet => tweet.tags);
// const allTags = getTags(tweets);
// console.log(allTags);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.
// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// // Початкове значення акумулятора - це порожній об'єкт {}

// const getTagStats = allTags => allTags.reduce(
//     (acc, tag) =>
//     //   {if (acc[tag]) {  // или acc.hasOwnProperty(tag)) {
//     //       return {
//     //           ...acc,
//     //           [tag]: acc[tag] + 1,
//     //       };
//     //     };
//     //     return {
//     //         ...acc,
//     //         [tag]: 1,
//     //       };

//     // или коротко c тернарником:
//     ({
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {});
// console.log(getTagStats(allTags));

// // Самый короткий:
// const allTags = tweets.flatMap(tweet => tweet.tags).reduce(
//     (acc, tag) => ({
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {});
// console.log(allTags);

// --------------------------------------------
// КОЛЛБЭКИ

// // написать универсальный код вычисления суммы или разницы
// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// };
// const add = function (x, y) {
//     return x + y;
// };
// const sub = function (x, y) {
//     return x - y;
// };
// doMath(3, 5, add);
// doMath(13, 8, sub);

// // То же самое, но с массивом:
// const doMath = (array, cb) => {
//     const newArr = [];
//     for (let element of array) {
//         newArr.push(cb(element));
//     };
//     return newArr;
// };
// const mult2x = value => value * 2;
// const add10 = value => value + 10;
// console.log(doMath([1,3,5,13,57], mult2x));
// console.log(doMath([1, 3, 5, 13, 57], add10));
// console.log(doMath([1,3,5,13,57], value => value - 1));

// // Написать универсальный код фильтрации массива
// const filter = function (arr, testNumber, test) {
//     const filteredArr = [];
//     for (const el of arr) {
//         if (test(testNumber, el)) {
//             filteredArr.push(el);
//         };
//     };
//     return filteredArr;
// };
// const moreThanNumber = function (testNumber, value) {
//     return value >= testNumber;
// };
// const lessThanNumber = function (testNumber, value) {
//     return value < testNumber;
// };
// const moreThanScore = function (testNumber, element) {
//     return element.score >= testNumber;
// };
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], 3, moreThanNumber));
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], 5, lessThanNumber));
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], 2, (value, testNumber) => value%testNumber === 0; ));

// Отфильтровать студентов, чей балл больше 30
// console.log(filter(students, 60, moreThanScore));

// //Замыкание - функция со статичным параметром
// возвращает функцию с меняющимся свойством, которая
// имеет доступ к параметрам и переменным первой функции
//  mango = makeShef('Mango').makeSoup('пирожок');
// или отдельными вызовами:
// const poly = makeShef('Poly');
// poly.makeSoup('borsch');

// При замыкании переменную первой функции
// можно изменить только с помощью методов
// const salaryManager = function (name, baseSalary = 0) {
//     let salary = baseSalary;
//     return {
//         raise(amount) {
//             if (amount > 1000) {
//                 return `Are you mad?!`;
//             }
//             salary += amount;
//         },
//         lower(amount) {
//             // if (amount < baseSalary) {
//             //     return `It's too much`;
//             // }
//             salary -= amount;
//         },
//         current() {
//             return `Current salary of ${name} is ${salary}`;
//         },
//     };
// }
// const bob = salaryManager('Bob', 5000);
// console.log(bob.current());
// bob.lower(50);
// console.log(bob.current());
// bob.raise(1000);
// console.log(bob.current());
//
//
// ----------------------------------------------
// THIS, CALLBACK, BIND

// // Посчитать функцией общую стоимость каждого объекта в массиве в объекте
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(
//       stone => stone.name === stoneName,
//     );
//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald'));
// console.log(chopShop.calcTotalPrice('Diamond'));
// console.log(chopShop.calcTotalPrice('Sapphire'));
// console.log(chopShop.calcTotalPrice('Ruby'));

// // Создать объект-калькулятор, кот. будет принимать 2 числа
// const calc = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };
// calc.read(4, 9);
// console.log(calc.mult());
// console.log(calc.add());

// const students = [
//   {
//     name: 'Манго',
//     coursesNum: 1,
//     courses: ['українська', 'математика', 'фізика'],
//     score: 83,
//   },
//   {
//     name: 'Аякс',
//     coursesNum: 2,
//     courses: ['українська', 'математика', 'інформатика'],
//     score: 37,
//   },
//   {
//     name: 'Полі',
//     coursesNum: 3,
//     courses: ['українська', 'інформатика', 'фізика'],
//     score: 59,
//   },
//   {
//     name: 'Ківі',
//     coursesNum: 4,
//     courses: ['українська', 'фізика', 'біологія'],
//     score: 94,
//   },
//   {
//     name: 'Хьюстон',
//     coursesNum: 5,
//     courses: ['українська', 'математика', 'біологія'],
//     score: 64,
//   },
// ];

// // Применить к контексту объекта функцию, которая не является его методом

// const mango = {
//   name: 'Манго',
//   coursesNum: 1,
//   courses: ['українська', 'математика', 'фізика'],
//   score: 83,
//   getName() {
//     return `${this.name}`; // этот this сработает
//   },
//   getCourses() {
//     return `${this.courses}`;
//   },
// };

// function greeter() {
//   return console.log(`${this.name}, welcome to hell of ${this.courses}! 🔥`);
// }
// const greetStudent = greeter.bind(students[0]);
// greetStudent();
// console.dir(greeter);
// console.dir(greetStudent);

// // Вызвать в колбеке функцию - метод объекта
// function greet1(cb1, cb2) {
//   return console.log(`${cb1()}, welcome to hell of ${cb2()}! 🔥`);
// }
// greet1(mango.getName.bind(mango), mango.getCourses.bind(mango));

// // Вызвать в кб функцию - метод объекта, сохранив его контекст
// function greet2(cb) {
//   return console.log(`${cb()}, welcome to hell of ${this.courses}! 🔥`);
// }

// const greetMango = greet2.bind(mango); // копия ф. с контекстом привязанным к объекту
// greetMango(mango.getName.bind(mango)); // вызов ф. с привяз. контекстом и привязывание коллбека в параметре к объекту

// // Привязать внешнюю функцию к объекту
// function showThis(method, ...args) {
//   return console.log(`This is ${method}ed fn object:`, this, args);
// }
// showThis.call(mango, 'call', 1, 2, 3); //сразу вызывает
// const bindedfn = showThis.bind(mango); //не вызывает, сохраняет с привязкой к контексту в переменную
// bindedfn('bind', 5, 6, 7);

// Привязать внешнюю функцию к массиву как метод прототипа класса
// const numbers = [1, 2, 3, 4, 5, 6];
// // расширяем прототип массивов на еще 1 функцию:
// Array.prototype.multBy = function (n) {
//   return console.log(this.map(num => num * n));
// };
// numbers.multBy(10);
//
//
// ----------------------------------------------------
// КЛАСС, ЕКЗЕМПЛЯР, ПРОТОТИП

// // объявляем класс
// class Human {
//   // статичные св-ва класса
//   static Sexes = {
//     // статичные приватные св-ва класса
//     HETERO: 'hetero',
//     HOMO: 'homo',
//     BI: 'bi',
//     TRANS: 'trans',
//   };
//   static Genders = {
//     MALE: 'male',
//     FEMALE: 'female',
//   };

//   // публичные св-ва
//   body;
//   // приватные св-ва
//   #sex;

//   // конструктор - как будет создаваться экземпляр
//   constructor({ body, sex } = {}) {
//     this.body = body;
//     this.#sex = sex;
//   }

//   // метод класса - get
//   get sex() {
//     return this.#sex;
//   }

//   // метод класса - set
//   set sex(newSex) {
//     return (this.#sex = newSex);
//   }
// }

// // создаем дочерний класс
// class Male extends Human {
//   // публичные переменные
//   posts;
//   firstName;
//   // приватные переменные
//   #gender;

//   constructor({ body, sex, firstName } = {}) {
//     super({ body, sex });
//     // под капотом стягивает у род. класса:
//     //   this.body = body;
//     //   this.#sex = sex;
//     this.#gender = Human.Genders.MALE;
//     this.posts = [];
//     this.firstName = firstName;
//   }

//   getGender() {
//     return this.#gender;
//   }

//   addPost(newPost) {
//     return this.posts.push(newPost);
//   }
// }

// // создаем экземпляр
// const peter = new Male({
//   body: 'strong',
//   sex: Human.Sexes.HETERO,
//   firstName: 'Peter',
// });

// console.log(peter);
// peter.firstName = 'Mango';
// console.log(peter);

// console.log(peter.sex);
// peter.sex = Human.Sexes.HOMO;
// console.log(peter.sex);

// console.log(peter.posts);
// peter.addPost('NewPost1');
// peter.addPost('NewPost2');
// console.log(peter.posts);

// console.log(peter.gender); // если бы был геттер, этот запрос выполнился бы
// console.log(peter.getGender());
// peter.gender = 'they';
// console.log(peter.getGender()); // не изенился, потому что у приватного св-ва нет сеттера

// // Создать GoogleKeep ))
// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };
//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   getItems() {
//     return this.items;
//   }

//   removeNote(text) {
//     this.items = this.items.filter(item => item.text !== text);
//   }

//   changePriority(textToFind, newPriority) {
//     this.items = this.items.map(item =>
//       item.text === textToFind ? { ...item, priority: newPriority } : item,
//     );
//   }
// }

// const myNotes = new Notes();
// console.log(myNotes);
// myNotes.addNote({ text: 'First note', priority: Notes.Priority.LOW });
// myNotes.addNote({ text: 'Second note', priority: Notes.Priority.HIGH });
// console.table(myNotes.getItems());
// myNotes.removeNote('First note');
// myNotes.changePriority('Second note', 'low');
// console.table(myNotes.getItems());

// -------------------------------
// DOM

// // К задаче 3

// const refs = {
//   inputEl: document.querySelector('[data-value]'),
//   // const inputEl = document.querySelector('sum');
//   // const inputEl = document.querySelector('[type="number"]');
//   actions: document.querySelectorAll('button'),
//   addBtnEl: document.querySelector('button[data-action="add"]'),
//   resetBtnEl: document.querySelector('button[data-action="reset"]'),
//   output: document.querySelector('.js-output > span'),
//   display: document.querySelector('.js-display'),
// };
// console.log(refs.actions[0].dataset.action);
// console.log(refs.actions[1].dataset.action);

// refs.inputEl.addEventListener('focus', onFocus);
// refs.inputEl.addEventListener('blur', onBlur);

// function onFocus() {
//   console.log(`Focus`);
// }

// function onBlur(event) {
//   console.log(`Blurred on ${event.currentTarget.value}`);
// }

// let sum = 0;

// refs.addBtnEl.addEventListener('click', addNumber);
// refs.resetBtnEl.addEventListener('click', reset);
// refs.inputEl.addEventListener('input', displayNum);

// function addNumber() {
//   sum += Number(inputEl.value);
//   refs.output.textContent = sum;
//   refs.inputEl.value = '';
// }

// function reset() {
//   sum = 0;
//   refs.output.textContent = sum;
// }

// function displayNum(event) {
//   refs.display.textContent = event.currentTarget.value; // то же, что и = refs.inputEl.value, но универсальнее
// }

// // Создать из массива объектов разметку
// const colorOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'blue', color: '#2196f3' },
//   { label: 'green', color: '#4CAF50' },
// ];

// const colorPickerHeader = document.createElement('h2');
// colorPickerHeader.textContent = 'Color Picker!';
// colorPickerHeader.style.textAlign = 'center';

// const colorContainer = document.createElement('div');
// colorContainer.style.width = '200px';
// colorContainer.style.display = 'flex';
// colorContainer.style.justifyContent = 'space-between';
// colorContainer.style.margin = 'auto';

// const createColorPicker = optionsArr => {
//   return optionsArr.map(option => {
//     const colorBtn = document.createElement('button');
//     colorBtn.type = 'button';
//     colorBtn.classList.add('color-picker__option');
//     colorBtn.textContent = option.label;
//     colorBtn.style.backgroundColor = option.color;
//     colorBtn.style.border = 'none';
//     colorBtn.style.height = '60px';
//     colorBtn.style.width = '60px';

//     return colorBtn;
//   });
// };

// colorContainer.append(...createColorPicker(colorOptions));
// document.body.append(colorPickerHeader, colorContainer);

// console.log(colorContainer);

// // Создать код по шаблону разметки (раскомментируй 1ю строку)
// const makeHumanCard = ({ humanName, description, age }) => {
//   const articleEl = document.createElement('article');
//   articleEl.classList.add('human');

//   const headerEl = document.createElement('h1');
//   headerEl.classList.add('human_name');
//   headerEl.textContent = humanName;

//   const descriptionEl = document.createElement('p');
//   descriptionEl.classList.add('human_descr');
//   descriptionEl.textContent = description;

//   const ageEl = document.createElement('p');
//   ageEl.classList.add('human_age');
//   ageEl.textContent = `Age: ${age} years`;

//   articleEl.append(headerEl, descriptionEl, ageEl);

//   return articleEl;
// };

// // console.log(makeHumanCard(humans[1]));
// document.body.append(...humans.map(makeHumanCard));
