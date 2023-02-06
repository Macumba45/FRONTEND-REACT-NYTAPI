import { FC } from "react";
import './description.css'
import { Props } from './types'

export const Description: FC<Props> = ({ weeks_on_list, description, amazon_product_url }) => {
    return (

        <div>
            <div className="weeksOnList"><p>Weeks on list:{weeks_on_list}</p></div>
            <div className="description"><p>{description}</p></div>
            <div className="amazonLink"><a target="_blank" className="amazonText" href={amazon_product_url}>Buy at<img className="buttonAmazon" src="https://brenes.vercel.app/Img/icons8-amazon-120.png" alt="" /></a></div>
        </div>
    );

};




