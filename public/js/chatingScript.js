$(() => {
    let id;
    let userSelect = $('#userSel');
    let btnSubmit = $('#btnclick');
    $.get('/chating/idd', (data) => {
        //console.log(data);
        id = data.id

    })
    $.get('/chating/getu', (data) => {

        for (let u of data) {
            if (u.id == id) {
                userSelect.append(`<option disabled value="${u.id}">${u.username}</option>`)
            } else {
                userSelect.append(`<option value="${u.id}">${u.username}</option>`)
            }
        }
    })
    btnSubmit.click(() => {
        console.log(userSelect.val());
        socket.emit('join', {

            idd: id
        });
    })
    let socket = io();
    let inputMsg = $('#inpNewMsg');
    let divmsg = $('#Msgs')
    let btnmsg = $('#btnMsg')
    let j = 0;



    btnmsg.click(async() => {
        // console.log(id);
        if (userSelect.val() == 0) {
            await socket.emit('sendMsg', {
                msg: inputMsg.val()
            });
            await divmsg.append(` <p  style="text-align: right; background-color: honeydew ; margin-left: 45px; margin-right: 40px; ">${inputMsg.val()}</p>
        `);
        } else {

            let usernme;
            await $.post('/chating/user', {
                user: userSelect.val()
            }, (data) => {
                console.log("**", data);
                console.log(data[0].username);
                usernme = data[0].username;
            })
            await socket.emit('sendMsg', {
                msg: inputMsg.val(),
                user: usernme
            });
            console.log("--" + usernme);
            await divmsg.append(` <p  style="text-align: right; background-color: honeydew ; margin-left: 45px; margin-right: 40px; ">${inputMsg.val()} [${usernme}] </p>
        `);
        }

        inputMsg.val("");
    })
    socket.on('rcvdMsg', (data) => {
        divmsg.append(`<p style="text-align: left; margin-left: 20px; margin-right: 65px;background-color: honeydew ; ">[${data.from}] ${data.msg}</p>
        `)
    })
})