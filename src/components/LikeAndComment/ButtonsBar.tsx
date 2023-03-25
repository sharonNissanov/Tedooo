import Button from './Button';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import RecommendIcon from '@mui/icons-material/Recommend';

type ButtonsBarProps = {
    didLike: boolean,
    likes: number,
    comments: number,
}

 const ButtonsBar = (props : ButtonsBarProps)=>{
    let color = props.didLike ?' #0A66C2' :'black';
   
   
    return (
        <div>
            <div className='btn-row-class btn-desc'> 
                <Button title={props.likes.toString()} btnClass={"btn-item-bar-1"} icon = { < RecommendIcon /> } color = {'rgb(41,169,148)'}/>
                <Button title={props.comments.toString() + " comments"} btnClass={"btn-item-bar-1"}/>
            </div>

            <div id='buttons-bar' className='btn-row-class'>
                <Button title={"like"} icon = { < ThumbUpOffAltOutlinedIcon  /> } color = {color} didLike={props.didLike}/>
                <Button title={"comment"} icon = { < ChatBubbleOutlineIcon />}  color = {'black'} />
                        
            </div>
        </div>
    )
}

export default ButtonsBar;