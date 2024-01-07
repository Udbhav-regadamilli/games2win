import './Tile.css'

const Tile = ({number,moveTile}) => {
    return <div 
        onClick={() => moveTile(number)} 
        className={`numberp ${number.value === number.index + 1 ? 'correct' : ''} ${number.value===16 ? 'disabled' : ''} slot--${number.index}`}>
        {number.value === 16 ? '' : number.value}
        {console.log(number.value)}
    </div>
}

export default Tile