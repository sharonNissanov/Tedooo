import axios from "axios";

const sendImpression = async (userId:number, id:number) => {
    try {

        const res = await axios.get('https://www.tedooo.com', { params: { userId: userId , itemId: id} });
    
    } catch(error){

        console.error('There was an error!', error);

    }
  }

  export default sendImpression;