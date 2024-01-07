import './NewGame.css'

const NewGame = ({reset}) =>{
    return <div className='button-wrapperp'>
        <button onClick={reset}>New Game</button>
    </div>
}

export default NewGame