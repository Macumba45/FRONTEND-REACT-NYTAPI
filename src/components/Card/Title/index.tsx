import { FC } from "react"
import { Props } from './type'
import { TitleCard } from './styles'
import { HrCard } from './styles'


export const Title: FC<Props> = ({ list_name }) => {
    return (

        <div>
            <TitleCard>{list_name}</TitleCard>
            <HrCard></HrCard>
        </div>


    )
}