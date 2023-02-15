import ImageShadow from 'react-image-shadow'
import 'react-image-shadow/assets/index.css'

const src =
  'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true'

export default function ImageWithShadow() {
  return <ImageShadow
    src={src}
    alt="test"
    shadowBlur={20}
    shadowHover={false}
    shadowRadius={8}
  />
}
