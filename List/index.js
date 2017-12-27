const MINIMUM_SIZE = 0
const TRUE = true
const FALSE = false

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

  // Preconditions: elements are expected to be single data type.
  find(element){
    // Iterates loop linearly over all elements in array and return matching element index
    for (let index = 0; index < this.listSize; ++index){
      return this.dataStore[index] === element && index
    }
    return -1
  }
  // Postcondition: returns index of an element if matches else return -1

  // Returns size of an list
  length(){
    return this.listSize;
  }

  remove(element){
    element_index = this.find(element)
    if (element_index > -1){
      this.dataStore.splice(element_index, element)
      --this.listSize
      return TRUE
    }else{
      return FALSE
    }
  }

  toString(){
    return this.dataStore;
  }

  insert(element, after){
      
  }
}
