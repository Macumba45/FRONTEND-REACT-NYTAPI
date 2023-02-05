import { FC } from 'react';
import { Props } from './type'
import './image.css'


export const Image: FC<Props> = ({ book_image }) => {
    return (
        <div>
            <img className='imgDetails' alt='' src={book_image}></img>
        </div>
    );
};
