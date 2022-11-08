import { searchGithubUser } from "./GithubConn.js"
import { GithubUsers } from "./GithubUsers.js"


export async function consistData( userData ){
  
  const {login, name, public_repos, followers} = userData
  
  const user = {login, name, public_repos, followers}

  const ghUsers = new GithubUsers(user)
  

  console.log('githubUserData', login, name, public_repos, followers)
  }
