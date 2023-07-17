import { ReactComponent as LogoIcon } from '../../../assets/images/general/logo.svg'

interface LogoProps {
  classes?: string
}
export const Logo = ({ classes = '' }: LogoProps) => {
  return (
    <div className={classes + ' w-fit'}>
      <LogoIcon />
    </div>
  )
}
