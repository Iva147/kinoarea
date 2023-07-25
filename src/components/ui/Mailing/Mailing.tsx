import { ReactComponent as Logo } from '../../../assets/images/general/logo-2.svg'
import { Checkbox } from '../Checkbox/Checkbox'
import { Link } from 'react-router-dom'

//import MailingBg from '../../../assets/images/films/mailing-bg.png'

const classes = {
  input: 'text-center pt-[19px] pb-[18px] px-1 rounded-10 text-15',
}
export const Mailing = () => {
  return (
    <section className={'bg-dark pt-11 pb-6'}>
      <div className={'container'}>
        <div className={`bg-mailing bg-img rounded-10 overflow-hidden`}>
          <div className={'bg-blue/90 pt-[26px] pb-[25px] px-[23px] lg:px-[50px] 2xl:pt-[76px] 2xl:pb-[106px]'}>
            <div>
              <Logo className={'mx-auto'} />
            </div>
            <h3
              className={`text-25 font-q-900 text-center max-w-[209px] mx-auto 
                md:max-w-full md:text-35 2xl:mt-[51px] 2xl:text-50`}
            >
              Подпишитесь на E-mail рассылку
            </h3>
            <p
              className={`mt-[21px] mb-[29px] mx-auto text-base font-q-500 text-center 
                md:my-6 md:max-w-[542px] 
                2xl:max-w-[704px] 2xl:mt-[26px] 2xl:mb-[34px] 2xl:text-22`}
            >
              Если хотиет быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную
              E-mail рассылку!
            </p>

            <form className={'px-[19px] lg:max-w-[551px] mx-auto 2xl:max-w-[615px]'} autoComplete="off">
              <div className={'flex flex-col md:flex-row gap-[9px] '}>
                <input
                  type={'email'}
                  placeholder={'Введите свой E-mail адрес'}
                  className={`${classes.input} text-gray-2 placeholder:text-gray-2/60 md:flex-1`}
                />
                <button className={`${classes.input} bg-yellowish font-q-700 text-dark md:w-[164px]`}>
                  Подписаться
                </button>
              </div>
              <div className={'max-w-[272px]  mt-5 md:flex md:max-w-full'}>
                <Checkbox
                  label={
                    <span>
                      Соглашаюсь на условия{' '}
                      <Link to={'/'} className={'text-yellowish'}>
                        политики конфиденциальности
                      </Link>
                    </span>
                  }
                  name={'agreement'}
                  className={'mx-auto md:whitespace-nowrap'}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
