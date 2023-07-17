import { Button } from '../Button/Button'
import classnames from 'classnames'
import cls from './Header.module.scss'
import { ReactComponent as BurgerIcon } from '@/assets/images/general/burger.svg'
import { ReactComponent as SearchIcon } from '@/assets/images/general/search.svg'
import { ReactComponent as LinkedInIcon } from '@/assets/images/general/linkedin-in.svg'
import { ReactComponent as InstagramIcon } from '@/assets/images/general/instagram.svg'
import { ReactComponent as FacebookIcon } from '@/assets/images/general/facebook-f.svg'
import { ReactComponent as TwitterIcon } from '@/assets/images/general/icons8-twitter.svg'
import { Logo } from '../Logo/Logo'
import { NavLinks } from '../NavLinks/NavLinks'

interface HeaderProps {
  onMenu?: () => void
}
export const Header = ({ onMenu }: HeaderProps) => {
  return (
    <header className={'flex py-[11px] container'}>
      <div className={'hidden xl:block lg:flex-1'}>
        <NavLinks className={`xl:flex xl:justify-between gap-0.5 xl:max-w-[760px] xl:m-auto xl:font-base`} />
      </div>
      <div className={'flex gap-1'}>
        <Button onClick={onMenu} variant={'icon'} className={'md:hidden'}>
          <BurgerIcon className={'fill-blue'} />
        </Button>

        <Button onClick={() => console.log('SearchIcon')} variant={'icon'}>
          <SearchIcon />
        </Button>
      </div>
      <div className={'flex-1 flex justify-center items-center xl:order-first xl:justify-normal xl:grow-0'}>
        <div>
          <Logo classes={'mb-2'} />
          <div className={classnames('flex gap-0.5 md:w-full md:justify-between ', cls.socials)}>
            <LinkedInIcon className={'fill-grayIcon hover:fill-white'} />
            <InstagramIcon className={'fill-grayIcon hover:fill-white'} />
            <FacebookIcon className={'fill-grayIcon hover:fill-white'} />
            <TwitterIcon className={'fill-grayIcon hover:fill-white'} />
          </div>
        </div>
      </div>
      <div className={'lg:ml-6'}>
        <Button onClick={() => {}}>Войти</Button>
      </div>
    </header>
  )
}
