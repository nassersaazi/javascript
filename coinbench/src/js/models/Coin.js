import axios from "axios";
import { newsApiKey } from "../config";

// export default class Coin {
//   constructor(id) {
//     this.id = id;
//   };

//   async getCoinData() {
//     // try {
//     //   const res = await axios(
//     //     `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
//     //   );
//     //   this.title = res.data.recipe.title;
//     //   this.author = res.data.recipe.publisher;
//     //   this.img = res.data.recipe.image_url;
//     //   this.url = res.data.recipe.source_url;
//     //   this.ingredients = res.data.recipe.ingredients;
//     // } catch (error) {
//     //   console.log(error);
//     //   alert("Something went wrong :(");
//     // }
//   }