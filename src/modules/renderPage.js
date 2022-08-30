import getData from './getData.js';
import renderCards from './renderCards.js';

export const renderPage = () => {
  const newCard = renderCards();
  let mainArr = Object.create(newCard);
  let counter = 0;
  getData('./db/dbHeroes.json')
    .then(data => {
      let mainArray = [];
      data.forEach(({ name, realName, species, citizenship, gender, birthDay, deathDay, status, actors, photo, movies, }) => {
        let newMovieCard = new newCard(name, realName, species, citizenship, gender, birthDay, deathDay, status, actors, photo, movies);
        if(newMovieCard.movies) {
          mainArray.push(newMovieCard);
        }
        mainArr[counter++] = newMovieCard;
        return mainArray;
      });
      const render = (arr) => {
        arr.forEach(item => item.renderCard());
      };
      render(mainArray);
      let renderArr = [];
      const cardsWrapper = document.querySelector('.movie__cards');
      const selectsBlock = document.querySelector('.movie__selects');
      const genderList = document.querySelector('.movie__selects-gender');
      const actorsList = document.querySelector('.movie__selects-actor');
      const filmList = document.querySelector('.movie__selects-name');
      selectsBlock.addEventListener('change', (e) => {
        let genderArr = [];
        let actorArr = [];
        if(e.target == genderList) {
          if(renderArr.length) {
            genderArr = renderArr.filter((item) => {
              return item.gender.toLowerCase() == e.target.value.toLowerCase();
            });
          } else {
            genderArr = mainArray.filter((item) => {
              return item.gender.toLowerCase() == e.target.value.toLowerCase();
          });
        }
        if (e.target.value == '') {
          cardsWrapper.innerHTML = '';
          actorsList.value = '';
          if (window.innerWidth > 520) {
            actorsList.style.transform = 'translateY(-100%)';
            actorsList.style.transition = 'transform 0.3s';
          }
            actorsList.style.transform = 'translateY(100%)';
          render(renderArr);
        }
        if(filmList.value.length == 0 && e.target.value.length == 0) {
          render(mainArray);
        }
        if(renderArr.length) {
          if (e.target.value == 'Female' || e.target.value == 'Male') {
            actorsList.style.transform = 'translateY(0%)';
            actorsList.style.transition = 'transform 0.3s';
            cardsWrapper.innerHTML = '';
            render(genderArr);
            actorsList.innerHTML = `<option value=''>Choose actor name</option>`;
            genderArr.forEach((item, index) => item.renderActorList(item, index));
          }
        } else {
          cardsWrapper.innerHTML = '';
          render(genderArr);
        }
      }
      if(e.target == actorsList) {
        if(genderList.selectedIndex !== 0) {
          actorArr = renderArr.filter((item) => {
            return item.gender.toLowerCase() == genderList.value.toLowerCase();
          });
          actorArr.forEach(item => {
            if(item.name === e.target.value) {
              cardsWrapper.innerHTML = '';
              item.renderCard();
            }
          });
        } 
        if(e.target.value == '') {
          cardsWrapper.innerHTML = '';
          render(actorArr);
        }
      }
        if(e.target.closest('.movie__selects-name')) {
          const filmArr = mainArray.filter((item) => {
            return (item.movies !== undefined);
          });
          const nameFilmList = [];
          filmArr.forEach((film) => {
            film.movies.forEach((item) => {
              if(item === e.target.value) {
                nameFilmList.push(film);
              }
            });
          });
          genderList.value = '';
          renderArr = nameFilmList;
          if(e.target.value) {
            cardsWrapper.innerHTML = '';
            render(renderArr);
          } else {
            cardsWrapper.innerHTML = '';
            render(mainArray);
          }
        }
      });
      let filmArray = mainArr.prototype.renderMovieArr(mainArr);
      let genderArray = mainArr.prototype.renderGenderArr(mainArr);
      let uniqFilmArr = mainArr.prototype.uniqueArray(filmArray);
      let uniqGenderArr = mainArr.prototype.uniqueArray(genderArray);
      mainArr.prototype.renderFilmList(uniqFilmArr);
      mainArr.prototype.renderGenderList(uniqGenderArr);
    });
};
export default renderPage;