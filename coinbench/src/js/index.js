import Search from './models/Search';
import Coin from './models/Coin';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
/**
 * Global state of the app
 * -Search object
 * -Current coin/crypto asset object
 * -Shopping list object
 * -Favorite cryptos
 */

const state = {};

/**
 * SEARCH CONTROLLER
 */
const controlSearch = async (query) => {
    // // 1) Get query from view 
    // const query = searchView.getInput(); 
    // console.log(query);
    
    if (query) {
        //2) New search object and add to state
        state.search = new Search(query);

        //3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {

            //4) Search for recipes
        await state.search.getResults();

        //5) Render results to UI
        clearLoader();
        searchView.renderResults(state.search.result)

        } catch (err) {
            alert('Something wrong with the search...');
            clearLoader();
        }
        
    }
}

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlCoin();
})

/**
 * COIN CONTROLLER
 */

const controlCoin = async () => {
    // 1) Get query from view 
    let query = searchView.getInput(); 
    console.log(query);
    if (query) {
        const searchQuery = query.replace(' ','-').toLowerCase();
        console.log(`search : ${searchQuery}`);
        state.coinDetails = new Coin(searchQuery);
        try {
            // get coin data
            await state.coinDetails.getCoinData();
            console.log(state.coinDetails);
            controlSearch(query);
        } catch (error) {
            alert("Nothing found on that asset :(");
        }
        
    }
}


