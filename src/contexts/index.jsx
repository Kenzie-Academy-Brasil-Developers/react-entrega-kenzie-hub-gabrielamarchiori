import {UserProvider} from "./UserContext"

const Contexts = ({children}) => {

    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}

export default Contexts