import { useState, useEffect } from 'react';
import './App.css';
import User from './components/User';
import Content from './components/Content';
import ButtonsBar from './components/LikeAndComment';
import getData from './utils/ApiHelper';
import testDate from './utils/Test';
import { Card } from '@mui/material';
import MenuComponent from './components/Menu'

function App() {
  const [response, setResponse] = useState<any>([]);
  const [responseNew, setResponseNew] = useState<any>([]);


  const FEED_ITEMS : number = 6 ;

 useEffect(() => {
  const fetchData = async () => {
    let res = await getData();
    setResponse(res);
    setResponseNew(res.slice(0, FEED_ITEMS ));
    //testDate()
  };
  fetchData();
}, []);

document.addEventListener('scroll', ()=>{trackScrolling();});

function trackScrolling():void{
      let wrappedElement = document.getElementsByClassName('App');
      if (wrappedElement[0].getBoundingClientRect().bottom <= window.innerHeight){
       // console.log('bottom');
        setResponseNew(response.slice(0,responseNew.length + FEED_ITEMS));
      } 
  };

  return (
    <div className="App">
      <MenuComponent/>
      {
      responseNew.map((data: any, index: number) => (
      
        <Card key={index} className='feed-data-item' >
          <User username = {data.username} 
          userId= {data.userId} 
          avatar={data.avatar} 
          shopName = {data.shopName}
          shopId =  {data.shopId}
          premium =  {data.premium}
          date =  {data.date}
          />

          <Content text = {data.text} imgs = {data.images} />

          <ButtonsBar  didLike={data.didLike}  likes ={data.likes} comments ={data.comments}/>
      </Card>

      ))} 
    </div>
  );
}

export default App;