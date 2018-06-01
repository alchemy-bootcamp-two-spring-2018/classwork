
const animals = [{
  name: 'fido',
  type: 'dog',
  neutered: false,
  age: 5
}, {
  name: 'felix',
  type: 'cat',
  neutered: false,
  age: 2
}, {
  name: 'tweety',
  type: 'bird',
  neutered: false,
  age: 30
}, {
  name: 'big bird',
  type: 'bird',
  neutered: trye,
  age: 50
}]

const filter = {
  type: '',
  age: -1,
  neutered: undefined
};

// let filtered = animals;
// if(type !== 'all') filtered = filtered.filter(a => a.type === type);
// if(age > 0) filtered = filtered.filter(a => a.age > age);
// return filtered;

const example = {
  computed: {
    sorted() {
      return this.filtered.slice().sort((a, b) => { /*...*/ });
    },
    filtered() {
      return animals.filter(animal => {
        return (type === '' || animal.type === type)
          && (age < 0 || animal.age > age) 
          && (neutered === undefined || animal.neutered === neutered)
      });
    }
  }
}
