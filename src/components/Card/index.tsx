import type { FC } from "react";
import './card.css'
import { Description } from "./Description";
import { Title } from "./Title";
import { Button } from "../Button";
import { Props } from './type';

export const Card: FC<Props> = ({ list_name, oldest_published_date, newest_published_date, updated }) => {
    return (
        <div className="card">
            <Title
                list_name={list_name}
            />
            <Description
                oldest_published_date={oldest_published_date}
                newest_published_date={newest_published_date}
                updated={updated}
            />
            <Button
                a="Read more"
            />
        </div>
    );
};
