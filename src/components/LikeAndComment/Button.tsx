
type ButtonProps = {
    title: string,
    icon?: React.ReactNode,
    color?: string,
    didLike?: boolean,
    btnClass? :string,
}

 const Button = (props : ButtonProps)=>{
    let btnClass:string = props.btnClass == undefined ? "btn-row-class" : "btn-row-class "+ props.btnClass;

    function changeColor(e:any){ // MouseEvent
        if(props.color !=null && props.didLike !=null &&  e.target !=null){
            let newTarget = e.target.tagName == "DIV"? e.target.firstChild :e.target;
            let currColor = newTarget.style.color;
            let nextColor = currColor == "black" ? 'rgb(65 200 205)': "black";
            newTarget.style.color = nextColor;          
        }
    }
    return (
        <div className = {btnClass} onClick= {changeColor} >
           <span className="btn-icon" style={{color:props.color}}>{props.icon}  </span>
           <span className="btn-title"> {props.title}  </span>
        </div>
    )
}

export default Button;