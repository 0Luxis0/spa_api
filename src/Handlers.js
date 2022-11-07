import { GithubUser } from "./GithubConn.js"

export async function getUserData( username ){
  
  const {name, login} = await GithubUser.search(username)
  
  console.log('githubUserData', name, login)
  }
