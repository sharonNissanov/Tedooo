
type ButtonProps = {
    title: string,
    icon?: React.ReactNode,
    btnClass? :string,
}

 const Button = (props : ButtonProps)=>{
    let btnClass:string = props.btnClass == undefined ? "btn-bar-item" : ""+ props.btnClass;

    function changeColor(e:any){ // MouseEvent
        console.log('tagName' , e.target.tagName)

        if(e.target.tagName == "svg" && e.target.parentElement.parentElement.className == 'second-bar-unclicked-btn'){
            e.target.parentElement.parentElement.className = "second-bar-clicked-btn";
            return;

        }
        if(e.target.tagName == "svg" && e.target.parentElement.parentElement.className == 'second-bar-clicked-btn'){
            e.target.parentElement.parentElementclassName = "second-bar-unclicked-btn";
            return;
        }
        if(e.target.tagName == "path" && e.target.parentElement.parentElement.parentElement.className == 'second-bar-unclicked-btn'){
            e.target.parentElement.parentElement.parentElement.className = "second-bar-clicked-btn"; 
            return;
        }
        if(e.target.tagName == "path" && e.target.parentElement.parentElement.parentElement.className == 'second-bar-clicked-btn'){
            e.target.parentElement.parentElement.parentElement.className = "second-bar-unclicked-btn";
            return;
        }

        // if(e.target.tagName == "SPAN" &&  e.target.parentElement.className == 'second-bar-unclicked-btn'){
        //     e.target.parentElement.className = "second-bar-clicked-btn";
        //     return;
        // }
        // if(e.target.tagName == "SPAN" &&  e.target.parentElement.className == 'second-bar-clicked-btn'){
        //     e.target.parentElement.className = "second-bar-unclicked-btn";
        //     return;
        // }

    }
    return (
        <div className = {btnClass} onClick= {changeColor} >
           <span className="btn-icon" >{props.icon}  </span>
           <span className="btn-title"> {props.title}  </span>
        </div>
    )
}

export default Button;