/* eslint-disable jsx-a11y/no-onchange */
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import BlogIcon from '@/data/blog_icon.svg'
import ProjectsIcon from '@/data/projects_icon.svg'
import TagsIcon from '@/data/tags_icon.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Image from './Image'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

const LayoutWrapper = ({ children }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  const changeLanguage = (e) => {
    const locale = e.target.value
    router.push(router.asPath, router.asPath, { locale })
  }

  const navBarIconComponent = {
    Blog: BlogIcon,
    Projects: ProjectsIcon,
    Tags: TagsIcon,
    About: () => <div />,
  }

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Image
                    src="/static/images/github_avatar.png"
                    alt="avatar"
                    width="80%"
                    height="80%"
                    className="rounded-full sm:h-8 sm:w-8"
                  />
                </div>
                <div className="text-1xs hidden font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:block sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
                  Just a full stack developer
                </div>
                {typeof siteMetadata.headerTitle[locale] === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle[locale]}
                  </div>
                ) : (
                  siteMetadata.headerTitle[locale]
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <>
                  {/* {navBarIconComponent[link.title]()} */}
                  {/* {1} */}
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    {t(`headerNavLinks:${link.title.toLowerCase()}`)}
                  </Link>
                </>
              ))}
            </div>
            {/* <select
              onChange={changeLanguage}
              defaultValue={locale}
              style={{ textAlignLast: 'center' }}
              className="text-shadow-sm bg-transparent text-sm tracking-wide text-gray-900 dark:text-gray-100"
            >
              {locales.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select> */}
            {/* <ThemeSwitch /> */}
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
