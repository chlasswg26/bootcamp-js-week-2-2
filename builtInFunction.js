const vehicleArray = ['Car', 'Bike', 'Motorcycle']

// const filterArrayToOnlyCar = (value) => value === 'Car'
// const filterExample = vehicleArray.filter(filterArrayToOnlyCar)
// console.log(`Filter function:
// ${JSON.stringify(filterExample)}`)

// const pushOnIndex = vehicleArray.push('Tank')
// const pushtems = vehicleArray[pushOnIndex - 1]
// const pushExample = `we push "${pushtems}" on vehicleArray and turn into ${JSON.stringify(vehicleArray)}`
// console.log(`Push function:
// ${pushExample}`)

// const unshiftOnIndex = vehicleArray.unshift('Helicopter')
// const unshifItems = vehicleArray[0]
// const unshiftExample = `we add one item "${unshifItems}" on the front of vehicleArray and turn into ${JSON.stringify(vehicleArray)}`
// console.log(`Unshift function:
// ${unshiftExample}`)

// const beforePopoutArray = [...vehicleArray]
// const popOnlyLastItems = vehicleArray.pop()
// const popExample = `in array ${JSON.stringify(beforePopoutArray)} we pop out / remove "${popOnlyLastItems}" and turn into ${JSON.stringify(vehicleArray)}`
// console.log(`Pop function:
// ${popExample}`)

// const sortedVehicle = vehicleArray.sort((a, b) => {
//     // console.log(`'A' value ${a} > 'B' value ${b}`)

//     return a > b ? 1 : -1
// })
// console.log(`Sort function:
// ${JSON.stringify(sortedVehicle)}`)

// const foodChecker = (value) => value === 'Food'
// const reduceFoodInterest = vehicleArray.reduce(foodChecker)
// const reduceExample = `item "food" is (${reduceFoodInterest}) on vehicleArray, because in ${JSON.stringify(vehicleArray)} there\'s no "food" value`
// console.log(`Reduce function:
// ${reduceExample}`)

// const someString = 'We can do this'
// console.log(`Includes ... function:
// We can do this? ${someString.includes('Can')}`)

// const someNumber = 1999
// console.log(`To String function:
// From ${someNumber} (${typeof someNumber}) to "${someNumber.toString()}" (${typeof someNumber.toString()})`)

// const someUpperCase = 'ICHLAS WARDY GUSTAMA'
// console.log(`To Lower Case function:
// From ${someUpperCase} (UpperCase) to ${someUpperCase.toLowerCase()} (LowerCase)`)

const someLowerCase = 'ichlas wardy gustama'
console.log(`To Lower Case function:
From ${someLowerCase} (LowerCase) to ${someLowerCase.toUpperCase()} (UpperCase)`)
