
type ButtonProps = {
    title: string,
    icon?: React.ReactNode,
    color?: string,
    didLike?: boolean,
}

 const Button = (props : ButtonProps)=>{

    function changeColor(e:any){ // MouseEvent
        if(props.color !=null && props.didLike !=null &&  e.target !=null){
            let newTarget = e.target.tagName == "DIV"? e.target.firstChild :e.target;
            let currColor = newTarget.style.color;
            let nextColor = currColor== "black" ? 'rgb(65 200 205)': "black";
            newTarget.style.color = nextColor;          
        }
    }
    return (
        <div className='btn-row-class'  onClick= {changeColor} >
           <span style={{color:props.color}}>{props.icon}  </span>{props.title}  
        </div>
    )
}

export default Button;