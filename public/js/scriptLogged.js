$(() => {
    //let a = 0;
    let navbar = $('#i2');
    $.get('/login/done', (data) => {
        console.log(data);
        navbar.append(`
        <form class="form-inline my-2 my-lg-0" method="GET" action="/profile">
        <button type="submit" class="btn btn-secondary form-inline my-2 my-lg-0">${data.username}</button>
        `)
            //addPage();
    })

















    // function addPage() {
    //     let divAdd = $('#divAdd')
    //     let profile = $('#profile')
    //     profile.click(() => {
    //         $.get('/profile');
    //         // if (a == 0) {
    //         //     $.get('/profile', (user) => {
    //         //         console.log(user);
    //         //         a = 1;
    //         //         divAdd.append(`<table cellspacing="10" cellpadding="10" border="2">
    //         //     <tr>
    //         //         <th>UserID </th>
    //         //         <td>${user.id}</td>
    //         //     </tr>
    //         //     <tr>
    //         //         <th>USERNAME</th>
    //         //         <td>${user.username}</td>
    //         //     </tr>
    //         //     <tr>
    //         //         <th>NICKNAME</th>
    //         //         <td>${user.nickname}</td>
    //         //     </tr>

    //         // </table>`)
    //         //     })
    //         // }
    //     })
    // }
})