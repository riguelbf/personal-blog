import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a
        className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        style={{
          backgroundColor: '#fff',
          padding: '2px 5px 2px 5px',
          borderRadius: '5px',
          // border: 'solid 1px #fff',
          fontWeight: '700',
          fontSize: '0.95em',
          margin: '2px',
        }}
      >
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
