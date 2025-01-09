export default function Note(props){
    return(
        <div className="float-left bg-yellow-200 w-80 h-80 p-5 m-5 text-xl shadow-xl">
            {props.content}
        </div>
    )
}