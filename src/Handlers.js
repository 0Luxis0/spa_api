import { GithubUsers } from "./GithubUsers.js"


const ghUsers = new GithubUsers()

export function consistData( userData ){
  let user = {}
  const {login, name, public_repos, followers} = userData
  user = {login, name, public_repos, followers}
  ghUsers.add(user)

  return ghUsers.githubUsers
}

export function updateHtml(data){

  const githubUsers = data
  
  document.$1 = githubUsers
  document.querySelector('#mainTable').innerHTML = ''
  let dataStructure = ''

  console.log(githubUsers)
  Object.keys(githubUsers).forEach(user => {
    
    const userStructure = structUserRow(githubUsers[user])

    dataStructure += userStructure
  });
  document.querySelector('#mainTable').innerHTML += `${dataStructure}`
  
  // window.deleteUser = deleteUser
}

function structUserRow(user){
  
  console.log(user.login)
  
  

  let userStructure = '<tr>'
  userStructure += `
    <td>
      <div class="userInfo">
        <img class="userLogo" src="https://github.com/${user.login}.png" alt="Imagem de ${user.name}">
          <a href="https://github.com/${user.login}" target="_blank">
            <p>${user.name}</p>
            <span>/${user.login}</span>
        </a>
      </div>
    </td>
  `
  
  Object.getOwnPropertyNames(user).forEach(prop => {
    if (prop == 'login' || prop == 'name' ) return
    userStructure += `<td>${user[prop]}</td>`
  })
  userStructure += injectDeleteButton(user)
  userStructure += '</tr>'
  
  return userStructure
}

export function deleteUser(user, v){
  console.log("edfplp", user)
  console.log("v: ", v)
  // ghUsers.delete(user)
}

function injectDeleteButton(){
  let btnStrut = `<td><button id="deleteUserBtn" onclick="deleteUser">fese</button></td>`


  return btnStrut
}