$(() => {
    let navbar = $('#i2');
    $.get('/login/done', (data) => {
        console.log(data);
        navbar.append(`<form class="form-inline my-2 my-lg-0" >
        <button class="btn btn-secondary">${data.username}</button>
    </form>`)
    })
})