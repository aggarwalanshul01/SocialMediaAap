$(() => {
    let comdiv = $('#comdiv');
    let pre = $('#pre');
    $.get('/comments/getp', (data) => {
        console.log(data[0]);
        comdiv.append(`
        <h4 style="text-align: center;">Post</h4>
        <div style="display: inline-block;  margin-left: 110px;margin-right:110px;  width="850px;" >
        <div class="card m-2">
            <div class="card-body">
                <h5 class="card-title">${data[0].title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data[0].user.username}</h6>
                <p class="card-text">
                    ${data[0].body}

                </p>

                <a href="#" class="card-link">Like</a>
            </div>
        </div>
    </div>
    `)
    })
    $.get('/comments/previous', (data) => {
        console.log(data);
        for (let c of data) {
            console.log(c);
            pre.append(`
        <div class="card" style="margin-left:140px;margin-right:140px;background-color: whitesmoke;">
        <div class="card-header">
          ${c.title}
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>${c.body}</p>
            <footer class="blockquote-footer">written by <cite title="Source Title">${c.user.username}</cite></footer>
          </blockquote>
        </div>
      </div>
      <br>
        `)
        }
    })

})