import { useMoralis } from "react-moralis"

function ChangeUsername() {

    const {setUserData, isUserUpdaing, userError, user} = useMoralis()

    const setUsername = () => {
        const username = prompt(`Enter your new Username (curent: ${user.getUsername()})`)

        if(!username) return;

        setUserData({username});
    };

    return (
        <div className="text-sm absolute top-5 right-5">
            <button
            disabled={isUserUpdaing} 
            className="hover:text-pink-700"
            onClick={setUsername}
            >Change your Username</button>
        </div>
    )
}

export default ChangeUsername
