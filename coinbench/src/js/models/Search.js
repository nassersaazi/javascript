import axios from 'axios';

export default  class Search {

    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const key = 'd09016db83884b2b97718e7ad5314037';
    
        try {
            const res = await axios(`https://newsapi.org/v2/everything?q=${this.query}&from=2021-05-28&language=en&sortBy=publishedAt&apiKey=${key}`);
            console.log(res);
            this.result = res.data.articles;
           
        } catch (error) {
            alert(error);
        }
    
    }

}
