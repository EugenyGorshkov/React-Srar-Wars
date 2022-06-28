/*
Формат SCSS-переменной:
--theme-default-УникальноеИмя  # дефолтная переменная
--theme-light-УникальноеИмя    # для 'light'
--theme-dark-УникальноеИмя     # для 'dark'
--theme-neitral-УникальноеИмя  # для 'neitral'
*/

export const changeCssVaribles = theme => {
    const root = document.querySelector(':root');

    const cssVaribles = ['header' , 'bg-image'];

    cssVaribles.forEach(element => {
        root.style.setProperty(
            `--theme-default-${element}`,
            `var(--theme-${theme}-${element})`
        );
    })
}

