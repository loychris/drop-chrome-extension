
//////////////////////////// 9GAG /////////////////////////////

if(window.location.href.startsWith("https://9gag.com/")){

    // const dropPic = (id) => { 
    //     const article = $(`#${id}`);
    //     let postData = {
    //         id: id.substring(8)
    //         title: article.find("h1").innerHTML,
    //         imgUrl: 
    //     }
    //     //TODO: send data to backend script here
    // }

    getIdsForStreamContainer = (streamContainerId) => {
        const articles = $(`#${streamContainerId}`).find('article');
        let articleIds = [];
        $.each( articles, ( i, value ) => {
            articleIds.push(value.id);
        });
        return (articleIds);
    }


    const addDropOtions = (ids) => {
        ids.forEach(id => {
            console.log(`Adding drop Options to ${id}`)
            $(`#${id}`).children(".post-container").prepend(`
                <div class='drop-area-container'>
                    <div class="drop-area">
                        <button id="stream_${id}">Stream</button>
                    </div>
                </div>
            `)
            // $(`#drop_${id}`).bind('click', () => dropPic(id));
        }); 
    }

    console.log('////////////////////////////////////////');
    let initialIds = [];
    const firstArticles = $('article');
    $.each(firstArticles, (i, value) => {
        initialIds.push(value.id);
    });
    console.log(initialIds);
    addDropOtions(initialIds);
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if(mutation.addedNodes.length){
                mutation.addedNodes.forEach(x => {
                    addDropOtions(getIdsForStreamContainer(x.id));
                });
            }
        })
    });
    const endlessScrollSection = document.querySelector('#list-view-2');
    observer.observe(endlessScrollSection, {
        childList: true
    })
    console.log('////////////////////////////////////////');
}

///////////////////////////////////////////////////////////////



