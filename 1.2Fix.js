const object = {
    name: 'John Cohnor',
    printName() {
      console.log(this.name);
    }
  }
  
  object.printName(); 
  
  const printName = object.printName.bind(object);
    
  printName(); 