export const scrollTop = (elem: HTMLElement | Window = window, top: number = 0, smooth?: 'smooth') => {
  elem.scrollTo({
    top,
    behavior: smooth,
  })
}
