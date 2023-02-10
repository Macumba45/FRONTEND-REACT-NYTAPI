import { FC } from "react"
import { Props } from "./type"
import { LoginBackImg } from './styles'
import Login from "../../components/Login"



export const LoginViewPage: FC<Props> = () => {

    return (

        <>

            <LoginBackImg>

                <Login></Login>

            </LoginBackImg>


        </>
    )
}


