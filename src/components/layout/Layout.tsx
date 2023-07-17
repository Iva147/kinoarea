import { signal, effect } from '@preact/signals-react'
import { useCallback } from 'react'
import { Header } from '../ui/Header/Header'
import { Navigation } from '../ui/Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import { Footer } from '../ui/Footer/Footer'
import { Mailing } from '../ui/Mailing/Mailing'

const isNavOpen = signal(false)

export const Layout = () => {
  const onNavClose = useCallback(() => {
    isNavOpen.value = false
  }, [])

  const onMenuClick = useCallback(() => {
    isNavOpen.value = true
  }, [])

  effect(() => console.log({ isNavOpen: isNavOpen.value }))

  return (
    <div className="App bg-darkBlue">
      <Header onMenu={onMenuClick} />
      <Navigation isOpen={isNavOpen.value} onClose={onNavClose} />
      <main>
        <Outlet />
        <Mailing />
      </main>
      <Footer />
    </div>
  )
}
