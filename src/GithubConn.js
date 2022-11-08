//https://api.github.com/users/
export async function searchGithubUser(username){

    const endpoint = `https://api.github.com/users/${username}`
    const data = await fetch(endpoint)
  return await data.json()
}

