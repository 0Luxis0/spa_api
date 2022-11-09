import { updateHtml } from './Handlers.js'

export class GithubUsers{

  constructor(){

    this.githubUsers = this.read()

    updateHtml(this.githubUsers)

    this.deleteUser = this.delete
    
  }

  add(user){
    this.githubUsers.push(user)
    const data = JSON.stringify(this.githubUsers)
    localStorage.setItem('githubUsers', data)
    updateHtml(this.githubUsers)
  
  }

  read(){
    const usersData = JSON.parse(localStorage.getItem('githubUsers'))
    return usersData ?? []
  }

  update(){

  }

  delete(){
    console.log('deletado: ', user)
  }
}