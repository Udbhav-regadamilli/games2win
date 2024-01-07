import './Overlay.css'

const Overlay = ({size}) => 
    new Array(size)
        .fill()
        .map((_,i) => <div key={i} className="overlayp"/>)

export default Overlay