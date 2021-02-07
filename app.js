const createInstructor = (firstName, lastName) => {
         return {
            firstName,
            lastName
        }
    }
    console.log(createInstructor('Sanjay', 'Durisheti'));
    
    const favoriteNumber = 42;
    const instructor = {
        firstName: "colt"
        [favoriteNumber] = 'That is my favorite!'
    }
    console.log(instructor);
    
    const instructor1 = {
        firstName: "Colt",
        sayHi () {
            return "Hi!";
    },
        sayBye() {
            return this.firstName + " says bye!";
    }
    }
    console.log(instructor1);
    
    const d = createAnimal("dog", "bark", "Woooof!")
    // {species: "dog", bark: ƒ}
    d.bark()  //"Woooof!"
    function createAnimal (species, verb, noise)  {

        return {
            species,
            verb,
            noise,
            bleet: (x) => x + " " + noise
        };
     }
    const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
    console.log(s.bleet("sheep") + " " + s.verb) //"BAAAAaaaa"
    
    
    