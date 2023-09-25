import { ReactComponent as LogoIcon } from '../../../assets/images/general/logo.svg'
import { Link } from 'react-router-dom'

interface LogoProps {
  classes?: string
}
export const Logo = ({ classes = '' }: LogoProps) => {
  return (
    <div className={classes + ' w-fit'}>
      <Link to={'/'}>
        <LogoIcon />
      </Link>
    </div>
  )
}
