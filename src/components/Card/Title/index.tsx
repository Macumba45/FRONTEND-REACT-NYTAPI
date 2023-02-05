import { FC } from "react"
import './title.css'
import { Props } from './type'


export const Title: FC<Props> = ({ list_name }) => {
    return (

        <div>
            <h3 className="titleCard">{list_name}</h3>
            <hr className="hrCard" />
        </div>


    )
}