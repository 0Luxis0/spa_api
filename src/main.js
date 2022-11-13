import { searchGithubUser } from "./GithubConn.js"
import { consistData } from './Handlers.js'
import { logo, starBtn } from './SVGs.js'

async function btnClickAddUser(){
  const userInput = document.querySelector('#userInput').value

  const userData = await searchGithubUser(userInput)

  const githubUsers = consistData(userData)
}

document.querySelector('#addBtn').onclick = btnClickAddUser

function injectSvgs(){
  document.querySelector('#logo').innerHTML = logo
  document.querySelector('#starBtn').innerHTML = starBtn
}
injectSvgs()