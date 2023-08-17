const scrollClass = 'disable-scroll'

export const scrollBody = {
  stop: () => document.body.classList.add(scrollClass),
  allow: () => document.body.classList.remove(scrollClass),
  toggle: () => document.body.classList.toggle(scrollClass),
}
