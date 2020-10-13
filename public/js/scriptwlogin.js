$(() => {
    //let a = 0;
    let navbar = $('#i2');

    let divAdd = $('#divAdd');

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
                    <a href="#" aria-valuetext="${i}" class="coma asd" class="card-link">Comment</a>
                    <a href="#" class="card-link asd">Like</a>
                </div>
            </div>
        </div>
        
        `)
    }

    function func() {
        let classes = $('.asd');
        classes.click(() => {
            window.alert("PLEASE LOGIN TO POST SOMETHING / COMMENTS ON POSTS / TEXTING SOMEONE ");
        })
    }


    async function addPage() {
        await $.get('/posts/getall', (posts) => {
            let i = 1;
            for (let p of posts) {
                addPost(p.title, p.body, p.user.username, i);
                i = i + 1;
            }
            func();
        })
    }
    addPage();
})