import { FC } from 'react';
import { Props } from './type'
import { ImgDetails } from './styles'


export const Image: FC<Props> = ({ book_image }) => {
    return (
        <div>
            <ImgDetails alt='' src={book_image} />
        </div>
    );
};
