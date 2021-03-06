
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






