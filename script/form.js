function print_person(person) {
	document.getElementById("info_surname").innerHTML = "Ваша фамилия: " + person.surname;
	document.getElementById("info_firstname").innerHTML = "Ваше имя: " + person.firstname;
	document.getElementById("info_middlename").innerHTML = "Ваше отчество: " + person.middlename;
	document.getElementById("info_age").innerHTML = "Ваш возраст: "+ person.age;
	document.getElementById("info_days_age").innerHTML = "Ваш возраст в днях: " + person.days_age;
	document.getElementById("info_pension").innerHTML = "Пенсионный возраст: " + person.pension;
	document.getElementById("info_sex").innerHTML = "Ваш пол: " + person.sex;
	document.getElementById("info_profession").innerHTML = "Ваша профессия: " + person.profession;
}

function calc_age(birthday) {
	var TODAY = new Date();
	if (TODAY.getMonth() <= birthday.getMonth() 
		&& TODAY.getDate() < birthday.getDate()) {
		return TODAY.getFullYear() - birthday.getFullYear() - 1;
	} else {
		return TODAY.getFullYear() - birthday.getFullYear();
	}
}

function add_person() {
	var TODAY = new Date();
	var PENSION_MEN = 60;
	var PENSION_WOMEN = 55;
	var person = new Object();

	person.surname = document.forms["person_info"].elements["surname"].value;
	person.firstname = document.forms["person_info"].elements["firstname"].value;
	person.middlename = document.forms["person_info"].elements["middlename"].value;
	person.birthday = new Date (document.forms["person_info"].elements["age"].value);

	person.age = calc_age(person.birthday);

	person.sex = (document.forms["person_info"].elements["female"].checked) ? "Женский" : "Мужской";
	person.days_age = Math.floor ((TODAY.getTime() - person["birthday"].getTime()) / 24 / 60 / 60 / 1000);
	person.profession = document.forms["person_info"].elements["profession"].value;
	
	if ((person["sex"] == "Женский" && person["age"] >= PENSION_WOMEN) 
		|| (person["sex"] == "Мужской" && person["age"] >= PENSION_MEN)) {
		person.pension = "Да";
	} else {
		person.pension = "Нет";
	}

	print_person(person);
}

function print_longest_words() {
	var input_str = prompt("Введите текст произвольной длины", "");
	var words = input_str.split(" ");

	words.sort(function(a, b) {
		return b.length - a.length;
	});

	alert(words[0] + ", " + words[1]+ ", " + words[2]);
}
