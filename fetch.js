function lekeres(){
    let id = document.getElementById('id').value;
    fetch(`https://jsonplaceholder.org/users/?id=${id}`)
    .then(response => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(user => {
    console.log(user);
    const usercontainer = document.getElementById('userdata');
    usercontainer.innerHTML = ``;
    usercontainer.innerHTML += `<div>${user.id}<div> <br>`;
    usercontainer.innerHTML += `<div>${user.firstname}<div> <br>`;
    
    })
    .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    });
    
}
