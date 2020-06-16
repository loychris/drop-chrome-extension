
//////////////////////////// 9GAG /////////////////////////////

if(window.location.href.startsWith("https://9gag.com/")){

    const saveToStream = (id) => { console.log(`Saving ${id} to Stream`) }
    const saveToStreamWithTitle = (id) => { console.log(`Saving ${id} to Stream with title`) }
    const saveForIg = (id) => { console.log(`Saving ${id} for Instagram`) }
    const saveForIgStory = (id) => { console.log(`Saving ${id} for Instagram Story`) }
    const saveForTumblr = (id) => { console.log(`Saving ${id} for Tumblr`) }

    getIdsForStreamContainer = (streamContainerId) => {
        const articles = $(`#${streamContainerId}`).find('article');
        let articleIds = [];
        $.each( articles, ( i, value ) => {
            articleIds.push(value.id);
        });
        return (articleIds);
    }


    const addDropOtions = (articleIds) => {
        articleIds.forEach(id => {
            if(id.startsWith('jsid-post')){
                $(`#${id}`).children(".post-container").prepend(`
                    <div class='drop-area-container'>
                        <div class="drop-area">
                            <button id="stream_${id}">Stream</button>
                            <button id="streamt_${id}">Stream with title</button>
                            <button id="ig_${id}">Instagram</button>
                            <button id="igStory_${id}">Instagram Story</button>
                            <button id="tumblr_${id}">Tumblr</button>
                        </div>
                    </div>
                `)
                $(`#stream_${id}`).bind('click', () => saveToStream(id));
                $(`#streamt_${id}`).bind('click', () => saveToStreamWithTitle(id));
                $(`#ig_${id}`).bind('click', () => saveForIg(id));
                $(`#igStory_${id}`).bind('click', () => saveForIgStory(id));
                $(`#tumblr_${id}`).bind('click', () => saveForTumblr(id));
            }
        }); 
    }

    let initialIds = [];
    const firstArticles = $('article');
    $.each(firstArticles, (i, value) => {
        initialIds.push(value.id);
    });
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
}

///////////////////////////////////////////////////////////////



