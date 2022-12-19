const {Builder, Capabilities}=require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie}= require('../functions/addMovie')


beforeEach(async()=>{
  await driver.get('http://127.0.0.1:5501/movie-list/index.html')

})

afterAll(async()=>{
  await driver.quit()

})

test('add a movie', async()=>{
  await addMovie(driver)
  await driver.sleep(2000)

  await driver.sleep(3000)
  
})
