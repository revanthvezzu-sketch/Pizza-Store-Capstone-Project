document.getElementById("btn").addEventListener("click", getUser);

function getUser() {
    fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => {
            const user = data.results[0];

            document.getElementById("userData").innerHTML = `
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.email}</p>
                <img src="${user.picture.large}" width="150">
            `;
        })
        .catch(err => console.log(err));
}