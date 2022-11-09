import { GithubUsers } from "./GithubUsers.js"


const ghUsers = new GithubUsers()

export function consistData( userData ){
  
  const {login, name, public_repos, followers} = userData
  const user = {login, name, public_repos, followers}

  ghUsers.add(user)

  return ghUsers.githubUsers
}

export function updateHtml(githubUsers){

  // const htmlStrut = 
  document.$1 = githubUsers
  let dataStructure = ''
  // ghUsers.delete('tim')
  console.log(githubUsers)
  githubUsers.forEach(user => {
    
    const userStructure = structUserRow(user)

    dataStructure += userStructure
  });
  document.querySelector('#mainTable').innerHTML += `<tr>${dataStructure}</tr>`
  
}

function structUserRow(user){
  
  console.log(user.login)
  
  let userStructure = '<tr>'
  userStructure += `
    <div class="userInfo">
      <img src="https://github.com/${user.login}.png" alt="Imagem de ${user.name}">
        <a href="https://github.com/${user.login}" target="_blank">
          <p>${user.name}</p>
          <span>/${user.login}</span>
      </a>
    </div>`
    
  Object.getOwnPropertyNames(user).forEach(prop => userStructure += `<td>${user[prop]}</td>`)
  userStructure+= '</tr>'

  return userStructure
}