import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

export default function Count(props) {

    const [count, setCount] = useState(0)
    const toggleAdd = () => {
        setCount((prevCount) => (prevCount + 1))
    }
    const toggleMinus = () => {
        setCount((prevCount) => (prevCount - 1))
    }
    const styles = props.property === "temp" ? { backgroundColor: count > 30 ? "#ff6961" : "#99cccc" } : {}

    return (
        <div>
            <IconButton aria-label="Minus" onClick={toggleMinus}>
                <RemoveCircleIcon />
            </IconButton>
            <div className="w-24 h-24 border border-solid border-black rounded-full inline-flex justify-center items-center" style={styles}>
                <span className="text-2xl">{count} {props.property === "temp" && `${String.fromCharCode(176)} ${'C'}`}</span>
            </div>
            <IconButton aria-label="Add" onClick={toggleAdd}>
                <AddCircleIcon />
            </IconButton>
        </div>
    )
}