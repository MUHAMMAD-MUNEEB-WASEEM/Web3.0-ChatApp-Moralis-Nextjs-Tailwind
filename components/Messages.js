import { useRef } from "react"
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis"
import Message from "./Message";
import SendMessage from "./SendMessage"

const MINS_DURATION = 1440;

function Messages() {

    const {user} = useMoralis()
    const endOfMessagesRef = useRef()
    const { data, loading, error } = useMoralisQuery(
        "Messages",
        (query) =>
          query
            .ascending("createdAt")
            .greaterThan("createdAt", new Date(Date.now() - 1000 * 60 * MINS_DURATION)),
        [],
        {
          live: true,
        }
      );
 
        console.log(data)

    return (
        <div className="pb-100">
            <div className="my-5">
                <ByMoralis variant="dark" style={{marginLeft: "auto", marginRight: "auto"}}/>
            </div>


            <div className="space-y-10 p-4">
                {data.map((message)=>(
                    <Message key={message.id} message={message}/>
                ))}
            </div>

            <div className="flex justify-center">
                {/*SEnd MEssage*/}
                <SendMessage endOfMessagesRef={endOfMessagesRef}/>
            </div>

            <div className="mt-5 text-center text-amber-500" ref={endOfMessagesRef}>
                <h1>You are up to date {user.getUsername()}! 🥳</h1>
            </div>

        </div>
    )
}

export default Messages
