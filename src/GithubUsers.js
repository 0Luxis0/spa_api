export class GithubUsers{

  constructor(user){

    this.githubUsers = []

    const newUser = this.create(user)
    const usersData = this.read()

    
  }

  create(user){
    console.log('user', user)
  }

  read(){
    const usersData = localStorage.getItem('githubUsers')
    return usersData
  }
  update(){
    const data = JSON.stringify(this.githubUsers)
    localStorage.setItem('githubUsers', data)
  }

  delete(){

  }
}