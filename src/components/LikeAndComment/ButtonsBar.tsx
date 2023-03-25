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
    let btn_class = props.didLike ? "second-bar-clicked-btn" : "second-bar-unclicked-btn";
   
   
    return (
        <div>
            <div className='btn-row-class btn-desc'> 
                <Button title={props.likes.toString() + " Likes"} btnClass = {"first-bar-first-btn"} icon = {<RecommendIcon/>}/>
                <Button title={props.comments.toString() + " comments"} btnClass={"first-bar-sec-btn"}/>
            </div>

            <div id='buttons-bar' className='btn-row-class'>
                <Button title={"like"} icon = { <ThumbUpOffAltOutlinedIcon/>} btnClass={btn_class} didLike={props.didLike}/>
                <Button title={"comment"} icon = {<ChatBubbleOutlineIcon/>}  btnClass = {"second-bar-second-item"} />           
            </div>

        </div>
    )
}

export default ButtonsBar;