//complete this code
class Person {
	constructor(name , age){
		this.name = "Rahul";
		this.age= age;
	}
	get this.name;
	set this.age = 23
}

class Student extends Person {
	function study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	function teach(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
