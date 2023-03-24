import tedoooLogo from"../../images/tedoooLogo.png";
type PremiumProps = {
    premium: boolean
}

 const PremiumLabel = (props: PremiumProps)=>{
   if(props.premium){
    
    return (    
    
        <div className="user-pro-label">
            <img className="user-pre-img" src={tedoooLogo}></img>
            <div > Pro</div>
        </div>
    )
   }else{
    return  null;
   }
    
}

export default PremiumLabel;