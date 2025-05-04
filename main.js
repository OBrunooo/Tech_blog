addEventListener("DOMContentLoaded", function () {
    const all_links = Array.from(document.getElementsByClassName('article__content__link'))

    for(let i = 0; i<all_links.length;i++ ) {
        
        all_links[i].addEventListener('click', function () {
            let children = this.children;
            children = children[0]
            children.classList.add('article__content__link__icon__click')
    
    
            setTimeout(() => {
                window.location = "index.html"
            }, 600);
    
        })
    }

    const all_articles = Array.from(document.getElementsByClassName("article"))
    const menu_select = Array.from(document.getElementsByClassName("menu__item"))

    function reset_menu(e){
        for(let i = 0; i<menu_select.length;i++ ) {
            menu_select[i].classList.remove("menu__item__active")
        }
        e.classList.add("menu__item__active")
    }
    
    for(let i = 0; i<menu_select.length;i++ ) {
        menu_select[i].addEventListener("click", function() {
            reset_menu(menu_select[i])
            let id = menu_select[i].id
            let class_filter = Array.from(document.getElementsByClassName(id))
            filter(class_filter)
        })
    }

    function filter (e) {

        for(let i = 0; i < all_articles.length; i++ ) {
            all_articles[i].style.display = "none"
        }
        for(let i = 0; i < e.length; i++ ) {
            e[i].style.display = "block"
        }
    }


})