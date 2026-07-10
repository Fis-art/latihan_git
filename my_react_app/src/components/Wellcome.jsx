// function Wellcome (){

// }
import '../style.css'

const Wellcome = (props) => {
    return (
    <>
        <div className='card'>
            <h1 className='nama'>Hai, {props.nama}</h1>
            <h1 className='job'>Job : {props.job}</h1>
            <h1 className='age'>Age : {props.age} </h1>
        </div>
    </>
    )  
}


export default Wellcome