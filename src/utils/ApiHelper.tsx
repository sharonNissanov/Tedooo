import axios from "axios";

const getData = async () => {
    try {

        let response = await axios.get('https://dev.tedooo.com/feed.json')
        //console.log(response);
        return response.data;
    } catch(error){

        console.error('There was an error!', error);
        return [];
    }
  }

  export default getData;