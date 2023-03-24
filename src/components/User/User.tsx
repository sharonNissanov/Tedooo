import PremiumLabel from './PremiumLabel';
import getDiff from '../../utils/DateHelper';
type UserProps = {
    username: string,
    userId: string,
    avatar:string,
    shopName?: string,
    shopId?: string,
    premium: boolean,
    date: string
}

 const User = (props : UserProps)=>{
  let date :string =  getDiff(props.date);
    return (
        <div className="user-container">
            <div style={{'display':'flex'}}>
                <img src={props.avatar} alt="Avatar" className = "avatar"/>
                <div className= 'user-data'>
                    <h2 className="title"> {props.username}</h2>
                    <h4 className="sub-title"> 
                        <span className='shop-name'>{props.shopName}</span> 
                        {/* TODO change it */}
                        <span>{" * "}</span>  
                        <span className='user-date'>{date}</span> 
                    </h4>
                    
                </div>
       
            </div>

            <PremiumLabel premium ={props.premium}/>
        
        </div>
    )
}

export default User;