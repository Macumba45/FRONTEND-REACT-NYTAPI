import { FC } from "react";
import './description.css'
import { Props } from './types'

export const Description: FC<Props> = ({ oldest_published_date, newest_published_date, updated }) => {
    return (

        <div>
            <p className="date">Oldest:{oldest_published_date}</p>
            <p className="dateUpdate">Newest:{newest_published_date}</p>
            <p className="dateUpdateRange">Updated:{updated}</p>
        </div>
    );
};




