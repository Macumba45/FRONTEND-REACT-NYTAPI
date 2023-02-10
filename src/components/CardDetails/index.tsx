import type { FC } from "react";
import { Title } from "./Title";
import { Image } from "./Image";
import { Description } from "./Description";
import { Props } from './type';
import { CardDetailsStyle } from "./styles";
import { CardDetailsParent } from "../../views/Books/styles";

const CardDetails: FC<Props> = ({ title, book_image, weeks_on_list, description, amazon_product_url }) => {
    return (

        <CardDetailsParent>
            <CardDetailsStyle>
                <Title
                    title={title}
                />
                <Image
                    book_image={book_image}
                />
                <Description
                    weeks_on_list={weeks_on_list}
                    description={description}
                    amazon_product_url={amazon_product_url}
                />
            </CardDetailsStyle>

        </CardDetailsParent>


    );
};

export default CardDetails;