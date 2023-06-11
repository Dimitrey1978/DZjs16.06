// ### ask. Имя в верхнем регистре
// Завершите функцию **getUpperCaseName**, чтобы она возвращала имя, которое она получает в качестве параметра, в верхнем регистре.

console.log(
  "\n",
  "----------------------task. Имя в верхнем регистре-----------------------------",
  "\n"
);
function getUpperCaseName(name) {
  const upperCaseName = name.toUpperCase();
  console.log(upperCaseName);
  return upperCaseName;
}

// Sample usage (do not modify)
getUpperCaseName("sam"); // SAM
getUpperCaseName("alex"); // ALEX
getUpperCaseName("Johnny"); // JOHNNY

// ### task. Имя в нижнем регистре
// Завершите функцию **getLowerCaseName**, чтобы она возвращала имя, которое она получает в качестве параметра, в нижнем регистре.
console.log(
  "\n",
  "----------------------task. Имя в нижнем регистре----------------------------",
  "\n",
  "background: red;"
);
function getLowerCaseName(name) {
  const lowerCaseName = name.toLowerCase();
  console.log(lowerCaseName);
  return lowerCaseName;
}

// Sample usage (do not modify)
getLowerCaseName("SAM");
getLowerCaseName("ALEX");
getLowerCaseName("JoHNnY");

// ### task. Приветствие пользователя

// Завершите функцию **welcomeUser**, чтобы она возвращала строку, `Welcome, X` где `X` имя пользователя, полученное в качестве параметра.
console.log(
  "\n",
  "----------------------task. Приветствие пользователя----------------------------",
  "\n"
);
function greetUser(name) {
  const greeting = "Welcome, " + name;
  console.log(greeting);
  return greeting;
}

// Sample usage - do not modify
greetUser("Alex");
greetUser("Sam");
greetUser("Charlie");

// ### task. Описание возраста
// Завершите функцию **getAgeDescription**, чтобы она возвращала строку: `You are currently X years old`, где `X` - возраст пользователя, полученный в качестве параметра.

console.log(
  "\n",
  "----------------------task. Описание возраста----------------------------",
  "\n"
);
function getAgeDescription(age) {
  const howManyYears = "You are currently " + age + " years old";
  console.log(howManyYears);
  return howManyYears;
}

// Sample usage - do not modify
getAgeDescription(18);
getAgeDescription(20);

// ### task. Уведомление почты
// Завершите функцию `showEmailConfirmation`, чтобы она возвращала строку:
// `"We just sent an email to X. Please check your inbox."`. В качестве параметра `X` вы получаете электронное письмо.
console.log(
  "\n",
  "----------------------task. Уведомление почты----------------------------",
  "\n"
);
function showEmailConfirmation(email) {
  const emailVerification =
    "We just sent an email to " + email + ". Please check your inbox.";
  console.log(emailVerification);
  return emailVerification;
}

// Sample usage - do not modify
showEmailConfirmation("sam@example.com");
showEmailConfirmation("alex@example.com");

// ### task. Полное имя
// Завершите функцию `getFullName`, чтобы она возвращала полное имя пользователя.
console.log(
  "\n",
  "----------------------task. Полное имя----------------------------",
  "\n"
);
function getFullName(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  console.log(fullName);
  return fullName;
}

// Sample usage - do not modify
getFullName("Alex", "Doe"); // "Alex Doe"
getFullName("Sam", "Blue"); // "Sam Blue"

// ### task. Приветствие пользователя
// Создайте функцию, которая приветствует основателя компании, либо гостя.
console.log(
  "\n",
  "----------------------task. Приветствие пользователя----------------------------",
  "\n"
);
function greet(name, owner) {
  if (name === owner) {
    console.log("Hello boss");
    return "Hello boss";
  } else {
    console.log("Hello guest");
    return "Hello guest";
  }
}

greet("Daniel", "Daniel"); // 'Hello boss'
greet("Greg", "Daniel"); // 'Hello guest'

// ### Задача
// Напишите программу, которая находит сумму всех чисел от `1` до `num`. Известно, то число всегда будет положительным целым числом больше `0`.

console.log(
  "\n",
  "----------------------Сумматор----------------------------",
  "\n"
);

function summation(num) {
  let sum = 0;
  for (let N = 1; N <= num; N++) {
    sum +=N; 
  }
  console.log(sum);
  return sum;
}

summation(1); // 1
summation(2); // 3
summation(8); // 36


// ### Задача
// На вход принимается строка. Вы должны вернуть строку, в которой каждый символ (с учетом регистра) будет продублирован один раз.
console.log(
  "\n",
  "----------------------Дубль----------------------------",
  "\n"
);

function doubleChar(str) {
  let doubleStr = "";  
  for (N = 0; N < str.length; N++){
    doubleStr = doubleStr + str.at(N) + str.at(N);
  }
  
  console.log(doubleStr);
	return doubleStr;
}


 doubleChar('abcd') // // "aabbccdd" 

//  Напишите функцию finalGrade, которая вычисляет итоговую оценку студента в зависимости от двух параметров: оценки за экзамен и количества выполненных проектов.

console.log(
  "\n",
  "----------------------Итоговая оценка студента----------------------------",
  "\n"
);
function finalGrade(exam, projects) {
  let estimation = 0;
  if (exam > 90 || projects > 10) {
    estimation = 100;
  } else if (exam > 75 && projects > 4) {
    estimation = 90;
  } else if (exam > 50 && projects > 1) {
    estimation = 75;
  } else {
    estimation = 0;
  }
  console.log(estimation);
  return estimation;
}

finalGrade(100, 12); //100
finalGrade(99, 0); //100
finalGrade(10, 15); //100

finalGrade(85, 5); //90
finalGrade(55, 3); //75

finalGrade(55, 0); //0
finalGrade(20, 2); //0

let CITY = "Stockholm";
console.log(CITY.length); // 9


// ### Задача
// Реализуйте функцию, которая перевернет символы в строке.
console.log(
  "\n",
  "----------------------Перевернутая строка----------------------------",
  "\n"
);

function solution(str) {
  let invertStr = "";
  for (N = str.length; N > 0; N--){
    invertStr = invertStr + str.at(N-1)
  }
  console.log(invertStr);
  return invertStr;
}


solution('world') // 'dlrow'
solution('word') // 'drow'