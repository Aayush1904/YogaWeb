import { useContext } from "react"
import { AuthContext } from '../utils/providers/AuthProvider'

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
}

export default useAuth
