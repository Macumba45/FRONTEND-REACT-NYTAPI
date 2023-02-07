import { FC } from "react";
import { Props } from './types'
import { WeeksOnList, DescriptionText, AmazonLink, ButtonAmazon, AmazonText } from "./styles";

export const Description: FC<Props> = ({ weeks_on_list, description, amazon_product_url }) => {
    return (

        <div>
            <WeeksOnList><p>Weeks on list:{weeks_on_list}</p></WeeksOnList>
            <DescriptionText><p>{description}</p></DescriptionText>
            <AmazonLink>
                <AmazonText target="_blank" rel="noreferrer" className="amazonText" href={amazon_product_url}>
                    Buy at<ButtonAmazon src="https://brenes.vercel.app/Img/icons8-amazon-120.png" alt="" />
                </AmazonText>
            </AmazonLink>

        </div>
    );

};