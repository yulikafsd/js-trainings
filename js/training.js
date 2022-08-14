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
//     { name: 'Ajax', age: 21, city: 'TA', online: true}
// ]

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

// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
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
//     deposit(amount) {
//         this.balance += amount;
//         const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.transactions.push(transaction);
//         return `Account deposited for ${amount} euro, your balance is ${this.balance}`;
//     },
//     withdraw(amount) {
//         if (this.balance < amount) {
//             return `You don't have enough funds!`
//         }
//         this.balance -= amount;
//         const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//         this.transactions.push(transaction);
//         return `${amount} euro withdrawed, your balance is ${this.balance}`;
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

// console.log(account.deposit(120));
// console.log(account.deposit(80));
// console.log(account.deposit(10));
// console.log(account.withdraw(300));
// console.log(account.withdraw(30));
// console.log(account.getTransactionDetails(2));
// console.log(account.getBalance());
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account);

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
// Перебирающие методы массивов

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
    { name: "Манго", courses: ["українська", "математика", "фізика"], score: 83, },
    { name: "Аякс", courses: ["українська", "математика", "інформатика"], score: 37 },
    { name: "Полі", courses: ["українська", "інформатика", "фізика"], score: 59, },
    { name: "Ківі", courses: ["українська", "фізика", "біологія"], score: 94, },
    { name: "Х'юстон", courses: ["українська", "математика", "біологія"], score: 64 },
];

// const studentsCourses = students.forEach(student => console.log(student.courses));
// console.log(studentsCourses);

// const mapOfCourses = students.map(student => student.courses);
// console.log(mapOfCourses);

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

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);