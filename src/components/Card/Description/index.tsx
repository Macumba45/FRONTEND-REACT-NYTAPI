import { FC } from "react";
import './description.css'
import { Props } from './types'

export const Description: FC<Props> = ({ oldest_published_date, newest_published_date, updated }) => {
    return (
        <div>
            <p id="date">{oldest_published_date}</p>
            <p id="dateUpdate">{newest_published_date}</p>
            <p id="dateUpdateRange">{updated}</p>
        </div>
    );
};




