import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, style, objectPosition = 'center top', ...rest }: ImageProps) => (
  <NextImage src={`${basePath || ''}${src}`} style={{ objectFit: 'cover', objectPosition, ...style }} {...rest} />
)

export default Image
