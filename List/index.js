const MINIMUM_SIZE = 0

class List {

  constructor(){
    this.listSize = MINIMUM_SIZE
    this.pos = MINIMUM_SIZE
    this.dataStore = []
  }

  // Preconditions: elements should not be array data type and null/nil
  append(element){
    return this.dataStore[this.listSize++] = element
  }
  // Postcondition: Add parameter element in next position of data store

  find(element){
    for (let index = 0; index < this.listSize; ++index){
      return this.dataStore[index] === element && index
    }
    return -1
  }


}
