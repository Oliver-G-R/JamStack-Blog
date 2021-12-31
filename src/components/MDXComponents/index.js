import { Heading } from './Elements/Heading'
import { ImgPortada } from './ImgPortada'
import { LayoutPost } from './LayoutPost'
import { PublicationInfo } from './PublicationInfo'
export default {
  LayoutPost,
  PublicationInfo,
  ImgPortada,
  h1: props => <Heading {...props} hd="h1" />,
  h2: props => <Heading {...props} hd="h2" />,
  h3: props => <Heading {...props} hd="h3" />,
  h4: props => <Heading {...props} hd="h4" />,
  h5: props => <Heading {...props} hd="h5" />,
  h6: props => <Heading {...props} hd="h6" />
}
