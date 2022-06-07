const CareerPathAssessmentCard = (props:{
    question:string,
    optionA:string,
    optionB:string,
    optionC:string,
    color?:string,
    id:string,
    value?:string,
    register?:any,
    onclick:any;
}) => {
    return (
        <div id={props.id} className={`flex-none snap-center rounded p-4 ${props.color?props.color:'bg-blue-100'}  lg:w-full w-11/12 h-full`}>
            <div className="font-semibold text-sm">{props.question}</div>
            <div onClick={props.onclick} className="w-full mt-4">
                <div  className={`flex justify-between w-full p-2 ${props.value==props.optionA?'bg-green-100':'bg-white'}`}><div className='text-xs font-semibold '>{props.optionA}</div><div><input  {...props.register(props.id)} value={props.optionA} name={props.id} type={'radio'}/></div></div>
                <div  className={`flex justify-between w-full p-2 ${props.value==props.optionB?'bg-green-100':'bg-white'}`}><div  className='text-xs font-semibold '>{props.optionB}</div><div><input  {...props.register(props.id)} value={props.optionB} name={props.id} type={'radio'}/></div></div>
                <div  className={`flex justify-between w-full p-2 ${props.value==props.optionC?'bg-green-100':'bg-white'}`}><div className='text-xs font-semibold'>{props.optionC}</div><div><input  {...props.register(props.id)} value={props.optionC} name={props.id} type={'radio'}/></div></div>
            </div>

        </div>
    )
}

export default CareerPathAssessmentCard