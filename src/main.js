
import { searchGithubUser } from "./GithubConn.js"
import { consistData } from './Handlers.js'


// document.querySelector('#app').innerHTML = '<div>TEST</div>'

async function btnClickAddUser(){

  const userInput = document.querySelector('#userInput').value
  const userData = await searchGithubUser(userInput)
  consistData(userData)
  }

document.querySelector('#addBtn').onclick = btnClickAddUser

// function btnClickDeleteUser(){
//   const userInput = document.querySelector('#userInput').value
//   const userData = await getUserData(userInput)
//   }