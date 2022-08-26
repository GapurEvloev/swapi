/*
Формат CSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя   # для "light"
--theme-dark-УникальноеИмя    # для "dark"
--theme-neutral-УникальноеИмя # для "neutral"
*/

export const changeCssVariables = theme => {
  const root = document.querySelector(':root');

  const cssVariables = ['header', 'bgImage'];

  cssVariables.forEach(element => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  })
}