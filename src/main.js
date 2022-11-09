import { searchGithubUser } from "./GithubConn.js"
import { consistData, updateHtml } from './Handlers.js'


async function btnClickAddUser(){
  const userInput = document.querySelector('#userInput').value

  const userData = await searchGithubUser(userInput)

  const githubUsers = consistData(userData)
  console.log(githubUsers)
}

document.querySelector('#addBtn').onclick = btnClickAddUser

// function btnClickDeleteUser(){
//   const userInput = document.querySelector('#userInput').value
//   const userData = await getUserData(userInput)
//   }