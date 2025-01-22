const GITHUB_API = "https://api.github.com/users/octocat";
const user = fetch(GITHUB_API);
console.log(user)
user.then(function(data){
    console.log(data)
})