import { GithubUsers } from "./GithubUsers.js"


const ghUsers = new GithubUsers()
updateHtml()

export function consistData( userData ){

  const {login, name, public_repos, followers} = userData

  ghUsers.add({login, name, public_repos, followers})

  return ghUsers.githubUsers
}

export function updateHtml(){

  const githubUsers = ghUsers.githubUsers
  
  document.querySelector('#mainTable').innerHTML = ''
  let dataStructure = ''

  Object.keys(githubUsers).forEach(user => {
    
    const userStructure = structUserRow(githubUsers[user])

    dataStructure += userStructure
  });

  document.querySelector('#mainTable').innerHTML += `${dataStructure}`
  injectDeleteButton()
}

function structUserRow(user){

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
  userStructure += `<td><button id="deleteUserBtn" user="${user.login}">fese</button></td>`
  userStructure += '</tr>'
  
  return userStructure
}

function injectDeleteButton(){
  document.querySelectorAll('#deleteUserBtn').forEach(btn => {
    btn.onclick = t => ghUsers.delete(t.target.attributes['user'].value)
  })
}