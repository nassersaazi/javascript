import axios from 'axios';
import { newsApiKey } from '../config'

export default  class Search {

    constructor(query) {
        this.query = query;
    }

    async getResults() {
        
    
        try {
            const res = await axios(`https://newsapi.org/v2/everything?q=${this.query}&from=2021-05-28&language=en&sortBy=publishedAt&apiKey=${newsApiKey}`);
            console.log(res);
            this.result = res.data.articles;
           
        } catch (error) {
            alert(error);
        }
    
    }

}
