type UserProps = {
    username: string,
    userId: string,
    avatar:string,
    shopName?: string,
    shopId?: string
}

 const User = (props : UserProps)=>{
    return (
        <div className="user-container">
            <img src={props.avatar} alt="Avatar" className = "avatar"/>
            <div id= 'user-data'>
                <h2 className="title"> {props.username}</h2>
                <h4 className="sub-title"> {props.shopName}</h4>

            </div>

        </div>
    )
}

export default User;