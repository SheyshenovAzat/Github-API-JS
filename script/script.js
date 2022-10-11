const API = 'https://api.github.com/users/'

const form = document.querySelector('form')
const input = document.getElementById('inp')
const output = document.querySelector('#output_imgProfile')
const output_description = document.querySelector('#output_description')
const output_position = document.querySelector('#output_position')
const output_login = document.querySelector('#login')
const output_partially = document.querySelector('#output_partially')


const searchUser = async () => {
    let request = await fetch(API + input.value)
    let response = await request.json()
    renderUser(response);
    input.value = ''
}

const renderUser = (user) => {
    console.log(user);
    const avatar = document.createElement('img')
    avatar.src = user.avatar_url
    avatar.addEventListener('click', () => document.location.href = user.html_url)

    const login = document.createElement('h2')
    login.textContent = user.login

    const followers = document.createElement('p')
    const following = document.createElement('p')
    const data = document.createElement('p')

    data.textContent = 'Created at: ' + user.created_at
    followers.textContent = 'Followers: ' + user.followers
    following.textContent = 'Following: ' + user.following

    output.append(avatar)
    output_login.append(login)
    output_partially.append(followers, following, data)
    output_description.append(output_login, output_partially)
    output_position.append(output, output_description)
}






form.addEventListener('submit', (event) => {
    event.preventDefault()
    searchUser()
})
