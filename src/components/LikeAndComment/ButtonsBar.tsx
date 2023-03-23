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
    let color = props.didLike ?'#4a4aef' :'black';
   
   
    return (
        <div>
            <div id='btn-desc' className='btn-row-class'> 
                <Button title={props.likes.toString()} icon = { < RecommendIcon /> } color = {'rgb(65 200 205)'}/>
                <Button title={props.comments.toString() + " comments"} />
            </div>

            <div id='buttons-bar' className='btn-row-class'>
                <Button title={"like"} icon = { < ThumbUpOffAltOutlinedIcon  /> } color = {color} didLike={props.didLike}/>
                <Button title={"comment"} icon = { < ChatBubbleOutlineIcon />}  color = {'black'} />
                        
            </div>
        </div>
    )
}

export default ButtonsBar;