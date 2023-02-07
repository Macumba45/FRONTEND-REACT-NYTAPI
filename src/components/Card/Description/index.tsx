import { FC } from "react";
import { Props } from './types'
import { Date, DateUpdate, DateUpdateRange } from './styles'

export const Description: FC<Props> = ({ oldest_published_date, newest_published_date, updated }) => {
    return (

        <div>
            <Date>Oldest: {oldest_published_date}</Date>
            <DateUpdate>Newest: {newest_published_date}</DateUpdate>
            <DateUpdateRange>Updated: {updated}</DateUpdateRange>
        </div>
    );
};




