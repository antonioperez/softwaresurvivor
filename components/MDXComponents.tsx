import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'

// Component to handle [embed] shortcodes
const Embed = ({ url }) => {
  // YouTube embed support
  const youtubeMatch = url.match(
    /(?:https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/))([\w-]{11})/
  )

  if (youtubeMatch) {
    return (
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${youtubeMatch[1]}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    )
  }

  // Fallback: render as link
  return <a href={url}>{url}</a>
}

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  Embed,
}
