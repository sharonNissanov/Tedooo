import tedoooLogo from"../../images/tedoooLogo.png";
import { Avatar, Box } from '@mui/material';

type PremiumProps = {
    premium: boolean
}

 const PremiumLabel = (props: PremiumProps)=>{
   if(props.premium){
    
    return (    
    
        <Box className="user-pro-label">
            <Avatar src={tedoooLogo}  sx={{ width: "35%", height: "35%" }} />
             <span className="user-pro-labe-text">Pro</span>
        </Box>
    )
   }else{
    return  null;
   }
    
}

export default PremiumLabel;