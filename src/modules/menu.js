const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')

    //const handleMenu = () => {

    //menu.classList.toggle('active-menu')
    //}

    //menuBtn.addEventListener('click', handleMenu)

    //closeBtn.addEventListener('click', handleMenu)

    //menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))
    document.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            menu.classList.toggle('active-menu')
        } else
            if (e.target.closest('.close-btn')) {
                menu.classList.remove('active-menu')
            } else if (e.target.closest('ul>li>a')) {
                menu.classList.remove('active-menu')
            }
    })
}

export default menu