$(() => {
    let navbar = $('#i2');
    $.get('/login/done', (data) => {
        console.log(data);
        navbar.append(`<form id="profile" class="form-inline my-2 my-lg-0" >
        <button class="btn btn-secondary">${data.username}</button>
    </form>`)
    })
})
$(() => {
    let idpro = $('#profile');
    let profile;
    idpro.click(() => {
        $.get('/profile', (data) => {
            //console.log(yuhhh);
            $('#divAdd').prepend($("p").prepend("Some prepended text."));
        })
    })
})