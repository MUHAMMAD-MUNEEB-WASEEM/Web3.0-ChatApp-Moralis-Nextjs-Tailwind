import { useRef } from "react"
import { ByMoralis, useMoralis } from "react-moralis"
import SendMessage from "./SendMessage"

function Messages() {

    const {user} = useMoralis()
    const endOfMessagesRef = useRef()
 


    return (
        <div className="pb-50">
            <div className="my-5">
                <ByMoralis variant="dark" style={{marginLeft: "auto", marginRight: "auto"}}/>
            </div>


            <div>

            </div>

            <div className="flex justify-center">
                {/*SEnd MEssage*/}
                <SendMessage endOfMessagesRef={endOfMessagesRef}/>
            </div>

            <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
                <p>You're up to date {user.getUsername()}</p>
            </div>

        </div>
    )
}

export default Messages
