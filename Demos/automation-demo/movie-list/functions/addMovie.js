const {By}=  require ('selenium-webdriver')``

const addMovie= async(driver)=>{
  await driver.findElement(By.xpath(`//input`)).sendKeys('Detective Pika')

  await driver.findElement(By.xpath('//button')).click()
  const movie= await driver.findElement(By.xpath('//li'))
  const display= movie.isDisplayed()

  expect(display).toBeTruthy()

}

module.exports={
  addMovie

}