function Btn2() {
    const clickHandler = () => console.log('mouse over')
    return (
        <button onMouseOver={clickHandler}>Mouse over</button>
    )
}

export default Btn2;
