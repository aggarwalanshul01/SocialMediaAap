$(() => {
    //let a = 0;
    let navbar = $('#i2');
    $.get('/login/done', (data) => {
        console.log(data);
        navbar.append(`
        <form class="form-inline my-2 my-lg-0" method="GET" action="/profile">
        <button type="submit" class="btn btn-secondary form-inline my-2 my-lg-0">${data.username}</button>
        `)
        addPage();
    })
    let divAdd = $('#divAdd');

    function addPost(title, body, user, i) {
        divAdd.prepend(`
        
        <div style="display: inline-block; margin: 50px; margin-left: 110px;" class="col-4">
            <div class="card m-2">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${user}</h6>
                    <p class="card-text">
                        ${body}

                    </p>
                    <a href="./components/comments.html" aria-valuetext="${i}" class="coma" class="card-link">Comment</a>
                    <a href="#" class="card-link">Like</a>
                </div>
            </div>
        </div>
        
        `)
    }

    function comment() {
        let comment = $('.coma');

        comment.click((event) => {
            console.log(event);
            console.log(event.currentTarget.ariaValueText);
            $.post("/comments/orderp", {
                    postId: event.currentTarget.ariaValueText,
                    ansh: 5
                })
                //console.log(event.code);
        })
    }

    function addPage() {
        $.get('/posts/getall', (posts) => {
            let i = 1;
            for (let p of posts) {
                addPost(p.title, p.body, p.user.username, i);
                i = i + 1;
            }
            comment();
        })
    }
















})