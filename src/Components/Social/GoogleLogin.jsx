import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const GoogleLogin = () => {
    const {googleLogin} = useAuth();
    const navigate = useNavigate()
    const handleLogin = () => {
        googleLogin().then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            if(user){
                const userImp = {
                    name : user?.displayName,
                    email : user?.email,
                    photoUrl : user?.photoUrl,
                    role : 'user',
                    gender : "Is not specified",
                    adress: "not specified",
                    phone : "not specified"
                };
                if(user.email && user.displayName){
                    return axios.post('http://localhost:3000/new-user' , userImp).then(() => {
                        navigate('/')
                        return "Registeration Successfull"
                    }).catch((err) => {
                        throw new Error(err);
                    })
                }
            }
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
  return (
    <div className="flex item-center justify-center my-3 ">
      <button onClick={() => handleLogin()} className="flex items-center outline-none bg-white border border-gray-300 rounded-lg shadow-md px-6 py-4 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none">
        <FcGoogle className="h-6 w-6 mr-2" />
        <span>Continue with google</span>
      </button>
    </div>
  )
}

export default GoogleLogin
