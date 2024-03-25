function Counters({ count, onClick }) {
    return (
        <button onClick={onClick}>Clicked {count}</button>
    )
}

export default Counters