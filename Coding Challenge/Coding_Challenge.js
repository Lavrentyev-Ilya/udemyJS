'use strict';

// Dolphins and Coals
const codeCh_1 = 'Dolphins and Coals';
const calcAverDolph = (score1, score2, score3) => {
	let averScoreDolf = (score1 + score2 + score3) / 3;
	return averScoreDolf;
}
const calcAverCoal = (score1, score2, score3) => {
	let averScoreCoal = (score1 + score2 + score3) / 3;
	return averScoreCoal;
}

let avgDolph = calcAverDolph(44, 23, 71);
let avgCoal = calcAverCoal(65, 54, 49);

const checkWinner = (avgDolph, avgCoal) => {
	if(avgCoal >= avgDolph * 2){
		return `Koalas win (${avgCoal} vs. ${avgDolph})`;
	}else if(avgDolph >= avgCoal * 2){
		return `Dolphins win (${avgDolph} vs. ${avgCoal})`;
	}else{
		return 'No team wins!!! :((('
	}
}

console.log(`${codeCh_1}: ${checkWinner(avgDolph, avgCoal)}`);

// Steven is still building his tip calculator

const codeCh_2 = "Steven's tip calculator";

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

const calcTip = (billValue) => {
	return billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],];

console.log(`${codeCh_2}: ${bills[0]} + ${tips[0]} = ${total[0]}`);


//Friends of Jonas. Jonas driver license
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	age: '',
	birthYear: 1991,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Steven'],
	drivLincense: false,
	CalcAge: function () {
		this.age = 2021 - this.birthYear;
		return this.age;
	},
	DLincense: function() {
		if(this.drivLincense) return 'a';
		if(!this.drivLincense) return 'no';
	}
};


console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

jonas.CalcAge();
console.log(`${jonas.firstName} is a ${jonas.age}-years old teacher and he has ${jonas.DLincense()} driver's license`);


// Coding challenge

const MarkBmi = {
	name: 'Mark',
	surname: 'Miller',
	markMass: 110,
	markHeight: 1.80,
	mBmi: '',
	calcBMI: function() {
		this.mBmi = this.markMass / this.markHeight ** 2;
		return this.mBmi.toFixed(2);
	}
}
const JohnBmi = {
	name: 'John',
	surname: 'Smith',
	johnMass: 90,
	johnHeight: 1.70,
	jBmi: '',
	calcBMI: function() {
		this.jBmi = this.johnMass / this.johnHeight ** 2;
		return this.jBmi.toFixed(2);
	}
}

let textBmi = '';
if (MarkBmi.calcBMI() > JohnBmi.calcBMI()) {
	textBmi = `${MarkBmi.name}'s BMI (${MarkBmi.calcBMI()}) is higher than ${JohnBmi.name}'s (${JohnBmi.calcBMI()})`;
}else{
	textBmi = `${JohnBmi.name}'s BMI (${JohnBmi.calcBMI()}) is higher than ${MarkBmi.name}'s (${MarkBmi.calcBMI()})`;
}

console.log(textBmi);

