import { FC } from "react"
import { Props } from './type'
import { TitleDetails } from './styles'


export const Title: FC<Props> = ({ title }) => {
    return (

        <TitleDetails><h3>{title}</h3></TitleDetails>

    )
}