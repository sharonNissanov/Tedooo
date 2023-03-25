import { Avatar } from '@mui/material';
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
                <Avatar src={props.avatar}  alt="Avatar"  sx={{ width: "40px", height: "40px" }}/>
                
                <div className= 'user-data'>
                    <div className="user-name"> {props.username}</div>
                    <div> 
                        <span className='shop-name sub-title'>{props.shopName}</span> 
                        <span className='middle-dot sub-title' >{props.shopName != undefined ? " • " : ""}</span>   
                        <span className='user-date sub-title'>{date}</span> 
                    </div>
                </div>
       
            </div>

            <PremiumLabel premium ={props.premium}/>
        
        </div>
    )
}

export default User;