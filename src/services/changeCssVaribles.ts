/*
Формат SCSS-переменной:
--theme-default-УникальноеИмя  # дефолтная переменная
--theme-light-УникальноеИмя    # для 'light'
--theme-dark-УникальноеИмя     # для 'dark'
--theme-neitral-УникальноеИмя  # для 'neitral'
*/

export const changeCssVaribles = (theme: string) => {
    const root = document.querySelector(':root') as HTMLStyleElement;

    const cssVaribles = ['header' , 'bg-image'];

    cssVaribles.forEach(element => {
        if (root !== null) {
            root.style.setProperty(
                `--theme-default-${element}`,
                `var(--theme-${theme}-${element})`
            );
        }
    })
}

