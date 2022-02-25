//class

class CreatePerson{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    get fullname(){
        return this.firstname + ' ' + this.lastname; 
    }

    set fullname(fullname){
        var nameparts = fullname.split(' ');
        this.firstname = nameparts[0];
        this.lastname = nameparts[1];
    }

    isAdult(){
        return this.age >= 18;
    }
}

let abhishek = new CreatePerson('Abhishek', 'Sharma', 21);

console.log(abhishek);


// CRUD - Create Read Update Delete

console.log(abhishek.fullname);

abhishek.fullname = 'Rohit Sharma';

console.log(abhishek.fullname);

console.log(abhishek.isAdult());