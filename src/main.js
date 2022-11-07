
import { getUserData } from './Handlers.js'

// document.querySelector('#app').innerHTML = '<div>TEST</div>'

async function btnClick(){

  const userInput = document.querySelector('#userInput').value
  const userData = await getUserData(userInput)
  }
document.querySelector('#addBtn').onclick = btnClick
