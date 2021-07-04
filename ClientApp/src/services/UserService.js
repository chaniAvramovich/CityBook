// export async function getUser() {

//     const response = await fetch('/api/user');
//     return  response.json();
// }

export async function postUser(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return  response.json();
}
