import { FC } from "react"
import './title.css'
import { Props } from './type'


export const Title: FC<Props> = ({ list_name }) => {
    return (

        <div>
            <h3 id="title">{list_name}</h3>
        </div>


    )
}