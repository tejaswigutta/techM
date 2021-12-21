import howdoesitwork from "../Assets/Howdoesitwork.png"
export default function HowDoesItwork(){
    return(<div className="how-does-it-work container">
        <div className="how-does-it-work-text">How does it work?</div>
        <div className="how-does-it-work-img">
            <img src={howdoesitwork}></img>
        </div>
    </div>)
}