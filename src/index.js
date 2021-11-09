import './sass/main.scss';
import refs from './js/refs';
import PixabayApiServise from './js/apiService';
import ImageItemTemplate from './templates/ImageItemTemplate';
import '@pnotify/core/dist/BrightTheme.css';
import { info, error } from '@pnotify/core';
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);
const apiServise = new PixabayApiServise();
function onSearch(e){
  e.preventDefault();
  apiServise.query = e.currentTarget.elements.query.value;
  if (apiServise.query === '') {
    return error({
      text: 'Please, enter a text!',
      delay: 500,
    });
  }
  apiServise.resetPage();
  clearListItems();
  onLoadMore();
}
function onLoadMore(e) {
  apiServise
    .fetchImages()
    .then(data => onMarkUp(data))
    .catch(data => alert(`Ошибка: ${data}`));
}

function onMarkUp(data) {
  refs.loadMore.style.display = 'block';
  refs.gallery.insertAdjacentHTML('beforeend', ImageItemTemplate(data));
  
}


function clearListItems(){
  refs.gallery.innerHTML = '';
}