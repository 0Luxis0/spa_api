//https://api.github.com/users/
export class GithubUser{

  static search(username){

    const endpoint = `https://api.github.com/users/${username}`
    return fetch( endpoint )
      .then( data => data.json() )
  }
}

