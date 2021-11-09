//const BASE_URL = 'https://pixabay.com/api/';
// const key=`24237359-d8a1b7ca60bb2feb7d319b519`;
//  function  getData(searchValue) {
//   return fetch( `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchValue}&page=${pageNumber}&per_page=12&key=${key}`)
//   .then(response => response.json());
// }
// export default {  getData };
// export default  function onSearch(e){
//   e.preventDefault();
//   const searchValue=e.currentTarget.elements.query.value;
//   const options={
//   headers:{
//     Authorization:'24237359-d8a1b7ca60bb2feb7d319b519',
//   },
// };
// // const BASE_URL = 'https://pixabay.com/api/';
// const key=`24237359-d8a1b7ca60bb2feb7d319b519`;
// const url= `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=1&per_page=12&key`;
// fetch(url,options)
// .then(r=>r.json)
// .then(console.log);
// };
const BASE_URL = 'https://pixabay.com';
const API_KEY = '24237359-d8a1b7ca60bb2feb7d319b519';
export default class PixabayApiServise {
  constructor() {
   this.sQuery = '';
   this.page = 1;
    
  }
  fetchImages(){
    const url = `${BASE_URL}/api/??image_type=photo&orientation=horizontal&q=${this.sQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
    return fetch(url)
    .then(response => response.json())
    .then(({ hits }) => {
      this.incrementPage();

      return hits;
    });
  }
  // fetchImages = async () => {
  //   const URL = `${BASE_URL}/api/??image_type=photo&orientation=horizontal&q=${this.sQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
  //   const response = await fetch(URL);
  //   const data = response.json();
  //   this.incrementPage();
  //   return data;
  // };

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.sQuery;
  }

  set query(newQuery) {
    return (this.sQuery = newQuery);
  }

 
}






// export default {
//   page: 1,
//   query: '',
//   async fetcArticles(query) {
//     const key=`24237359-d8a1b7ca60bb2feb7d319b519`;
//     // const requestparams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${key}`;
//     // const res = await fetch(baseUrl + requestparams);
//     const res=await fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${key}`)
//     const parseRes = await res.json();
//     this.incrementPage();
//     return parseRes.hits;
//   },
//   get searchQuerry() {
//     return this.query;
//   },
//   set searchQuerry(string) {
//     this.query = string;
//   },
//   incrementPage() {
//     this.page += 1;
//   },
//   resetPage() {
//     this.page = 1;
//   },
// };
