import './Winner.css'

const Winner = ({numbers,reset}) => {
    if (!numbers.every(n => n.value === n.index +1))    
        return null

    return <div 
        className="winnerp">
        <p>You win!</p>
    </div>
}

export default Winner