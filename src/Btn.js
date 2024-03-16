function Btn() {
    const clickHandler = () => console.log('click handler')
    return (
        <button onClick={clickHandler}>Click Me</button>
    )
}

export default Btn;
