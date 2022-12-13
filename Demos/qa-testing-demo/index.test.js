 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

// test('test function',()=>{
//   expect(2).toBe(2)
// })
// test('first name should be pattern',()=>{
//   expect(testData.firstName).toBe('Patten')
// })

//describe block to group the tests for format title function
describe('formatTitle tests', ()=>{
  test('formatTitle should return a string',()=>{
    let formatedTitle=formatTitle(testData.title)
    expect(typeof formatedTitle).toBe('string')
  })
  test('formatTitle should format ttile correctly',()=>{
    let formattedTitle=formatTitle(testData.title)
    expect(formattedTitle ).toBe('Nulla Ac')
  })

})


describe('sorthenBio tests', ()=>{
  let shortBio= shortenBio(testData.bio)
  test('shortenBio will return a maller Bio string',()=>expect(shortBio.length).toBeLessThan(testData.bio.length)
  )
  test('shothenBio should have ... at the end of the lline',()=>expect(shortBio).toContain('...'))
})


describe('convertLength',()=>{
  let result= convertLength(testData.length)
  let result2=convertLength(30)
  test('converLength will return an array with two elements', ()=> expect(result).toHaveLength(2))
  test('convertLength can handle numbers less than 60',()=>expect(result2).toEqual(30))
})

test('toBe vs toEqual', ()=>{
const myObj={myNum:0}
const myObjTwo={myNum:0}
expect(myObj).table(myObjTwo)

})