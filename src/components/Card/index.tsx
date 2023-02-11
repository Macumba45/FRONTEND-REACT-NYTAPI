import type { FC } from "react";
import { CardStyle } from './styles';
import { Description } from "./Description";
import { Title } from "./Title";
import { Button } from "../Button";
import { Props } from './type';
import { ParentCard } from "../../views/Books/styles"


const Card: FC<Props> = ({ list_name, oldest_published_date, newest_published_date, updated, listName, onClick }) => {
    return (

        <ParentCard>
            <CardStyle>
                <Title
                    list_name={list_name!}
                />
                <Description
                    oldest_published_date={oldest_published_date!}
                    newest_published_date={newest_published_date!}
                    updated={updated!}
                />
                <Button onClick={() => onClick!(listName!)} />

            </CardStyle>
        </ParentCard>
    );
};

export default Card;