import eyeGalss from '../assets/download__2_-removebg-preview.png';
import meh from '../assets/download__1_-removebg-preview.png';
import thumbsUp from '../assets/__Thumbs_Up_Emoji-removebg-preview.png';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number;
}
const Emoji = ({rating}: Props ) => {
    if (rating < 3) return null;

    const emojiMap:{[key: number]: ImageProps} = {
        3: {src: meh, alt: 'meh'},
        4: {src: thumbsUp, alt: 'recommended'},
        5: {src: eyeGalss, alt: 'exceptional'},
    }
  return (
    <Image {...emojiMap[rating]} boxSize={'25px'} marginTop={1}></Image>
  )
}

export default Emoji