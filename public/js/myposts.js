$(() => {
    //let a = 0;
    let divAdd = $('#mypDiv');


    function addPost(title, body, user, i) {
        divAdd.prepend(`
        
        <div style="display: inline-block;background-color: aquamarine; margin: 50px; margin-left: 110px;" class="col-4">
            <div class="card m-2">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${user}</h6>
                    <p class="card-text">
                        ${body}

                    </p>
                    <a href="./comments.html" aria-valuetext="${i}" class="coma" class="card-link">Comment</a>
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


    $.get('/posts/getspecific', (posts) => {

        for (let p of posts) {
            addPost(p.title, p.body, p.user.username, p.id);

        }
        comment();
    })



})