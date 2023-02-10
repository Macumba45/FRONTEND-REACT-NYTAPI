import { FC } from "react"
import { Props } from "./type"
import { LoginBackImg } from './styles'
import SignUp from "../../components/SignUp"



export const SignUpView: FC<Props> = () => {

    return (

        <>

            <LoginBackImg>

                <SignUp></SignUp>

            </LoginBackImg>


        </>
    )
}