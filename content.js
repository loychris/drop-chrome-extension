
//////////////////////////// 9GAG /////////////////////////////

if(window.location.href.startsWith("https://9gag.com/")){
    console.log('////////////////////////////////////////');
    let ids = [];
    $("article").each(function() {
        ids.push(this.id);
    });
    ids.forEach(id => {
        $(`#${id} > div.post-container`).prepend(`
            <div class='drop-area-container'>
                <div class="drop-area">
                    <button id="drop_${id}">drop</button>
                </div>
            </div>
        `)
        $(`drop_${id}`).bind('click', () => {
            console.log(id);
        });
    });
    console.log('////////////////////////////////////////');
}





