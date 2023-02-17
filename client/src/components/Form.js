

const Form = ({handleSubmit, handleChange, value, label}) => {

    return (
    <form onSubmit={(e) =>  handleSubmit(e)}>
        <input type={"text"} name="name" onChange={(e) => handleChange(e)} value={value}/>
        <button type="submit">{label}</button>
    </form>
    )
}
    

export default Form;