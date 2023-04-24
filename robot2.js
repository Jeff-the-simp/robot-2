const robotName = localStorage.getItem('robotName')
const robotFunction = localStorage.getItem('function')
const image = localStorage.getItem('image')
console.log(robotName)
console.log(robotFunction)
console.log(image)



function updateRobot() {
    
    const newRobotName = document.querySelector('.robotName1').value
    const newRobotFunction = document.querySelector('.robotFunction1').value
    const newImage = document.querySelector('.image1').value


    localStorage.setItem('robotName1', newRobotName)
    localStorage.setItem('robotFunction1',newRobotFunction)
    localStorage.setItem('image1',newImage)

    document.querySelector(".imgBox1").innerHTML =`<img src='${newImage}' />`

    console.log(newRobotName)
    console.log(newRobotFunction)
    console.log(newImage)
}

const data = [
  {
    robotName: 'John Pork',
    robotFunction: 'calls'
  },
  {
    robotName: 'ChatGPT',
    robotFunction: 'respond'
  }
]

const stringData = JSON.stringify(data)

localStorage.setItem('robotArray', stringData)

const gotData = localStorage.getItem('robotArray')

const convertedData = JSON.parse(gotData)

data.forEach (function(element) {
    console.log(element)
} )
