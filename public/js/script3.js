$(() => {
    let divEle = $('#div1');
    $.get('/profile/data', (data) => {
        divEle.append(`
        <br>
        <h3 style="text-align: center; color: chocolate; ">USERNAME : ${data.username}</h3>
        <h3 style="text-align: center; color: chocolate; ">NICKNAME : ${data.nickname}</h3>
        <h3 style="text-align: center; color: chocolate; ">PASSWORD : ${data.password}</h3>`)
    })


})