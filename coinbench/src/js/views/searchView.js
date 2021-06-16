import { elements } from './base';

export const getInput = () => elements.searchInput.value; 

export const clearInput = () => {
    elements.searchInput.value = "";
  };

  export const clearResults = () => {
    elements.searchResList.innerHTML = "";
    // elements.searchResPages.innerHTML = "";
  };

const renderArticle = article => {
    const markup = `
          <li>
              <a class="results__link" href="#${article.url}">
                  <figure class="results__fig">
                      <img src="${article.urlToImage}" alt="${article.title}">
                  </figure>
                  <div class="results__data">
                      <h4 class="results__name">${limitArticleTitle(
                        article.title
                      )}</h4>
                      <p class="results__author">${article.author}</p>
                  </div>
              </a>
          </li>
      `;
    elements.searchResList.insertAdjacentHTML("beforeend", markup);
  };
  

  export const limitArticleTitle = (title, limit = 20) => {
    const newTitle = [];
    if (title.length > limit) {
      title.split(" ").reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          newTitle.push(cur);
        }
        return acc + cur.length;
      }, 0);
  
      // return the result
      return `${newTitle.join(" ")} ...`;
    }
    return title;
  };

export const renderResults = articles => {
    articles.forEach(renderArticle);
}