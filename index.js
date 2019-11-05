const nameA = 'Alpha'
const nameB = 'Beta'
const nameCompared = nameA === nameB

console.log(nameA)
console.log(nameB)
console.log(nameCompared)

//============================================================================================================================

const ageA = 18
const ageB = 25

if (ageA > ageB) {
  console.log('...')
} else if (ageA < ageB) {
  console.log('...')
} else {
  console.log('...')
}

//============================================================================================================================

const personA = {
    name: 'Alpha',
    age: 20
  }
  
  const personB = {
    name: 'Betty',
    age: 30
  }
  
  switch (personA.age > personB.age) {
    case true:
      console.log('...')
      break
  
    case false:
      console.log('...')
      break
  
    default:
      console.log('...')
  }
  