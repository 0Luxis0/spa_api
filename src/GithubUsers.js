import { updateHtml } from './Handlers.js'

export class GithubUsers{

  constructor(){
    this.githubUsers = this.read()
  }

  add(user){
    if (user){
      this.githubUsers[user.login] = user
      this.update()
      updateHtml()
    }
  }

  read(){
    const usersData = JSON.parse(localStorage.getItem('githubUsers'))
    return usersData ?? {}
  }

  update(){
    const data = JSON.stringify(this.githubUsers)
    localStorage.setItem('githubUsers', data)
  }

  delete(user){
    console.log('deletado: ', user)
    delete this.githubUsers[user]
    this.update()
    updateHtml()
  }
}