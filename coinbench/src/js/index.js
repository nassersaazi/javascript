import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';
/**
 * Global state of the app
 * -Search object
 * -Current coin/crypto asset object
 * -Shopping list object
 * -Favorite cryptos
 */

const state = {};

const controlSearch = async () => {
    // 1) Get query from view 
    const query = searchView.getInput(); 
    console.log(query);
    
    if (query) {
        //2) New search object and add to state
        state.search = new Search(query);

        //3) Prepare UI for results

        //4) Search for recipes
        await state.search.getResults();

        //5) Render results to UI
        console.log(state.search.result);
    }
}

//logo should be coinbench with text logo whose color is page gradient(borrow inspiration from coinbase logo)

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})