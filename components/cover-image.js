import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('w-full shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/animals/${slug}`} href="/animals/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
