import { FC } from "react"
import './title.css'
import { Props } from './type'


export const Title: FC<Props> = ({ title }) => {
    return (

        <div className="title">
            <h3>{title}</h3>
        </div>


    )
}