import arrayUnique from "./helpers.js";
import changer from "./changer.js";

const renderCards = () => {
  return class MovieCard {
    constructor(name, realName, species, citizenship, gender, birthDay, deathDay, status, actors, photo, movies, arrayFilms = []) {
      this.name = name;
      this.realName = realName;
      this.species = species;
      this.citizenship = citizenship;
      this.gender = gender;
      this.birthDay = birthDay;
      this.deathDay = deathDay;
      this.status = status;
      this.actors = actors;
      this.photo = photo;
      this.movies = movies;
      this.arrayFilms = arrayFilms;
    }
    renderCard() {
      this.cleanerUndefined();
      const cardsWrapper = document.querySelector('.movie__cards');
      const cardBody = document.createElement('div');
      cardBody.classList.add('card__body');
      cardBody.innerHTML = `
          <div class="card__image">
            <img src="./db/${this.photo}" alt="${this.name}">
          </div>
          <div class="card__title">${this.name}</div>
          <div class="card__actors">Actor name: <br><span>${this.actors}</span></div>
          <div class="card__gender">Gender: <br><span>${this.gender}</span></div>
          <div class="card__movies">Movies: <br><span>${this.movies.join(', ')}</span></div>
      `;
      cardsWrapper.append(cardBody);
    }
    renderMovieArr(arr) {
      let movieArr = [];
      for (let key in arr) {
        if(arr[key].movies != null) {
          movieArr.push(arr[key].movies);
        }
      }
      return movieArr;
    }
    renderGenderArr(arr) {
      let genderArr = [];
      for (let key in arr) {
        if(arr[key].gender != null) {
          genderArr.push(arr[key].gender[0].toUpperCase() + arr[key].gender.slice(1));
        }
      }
      return genderArr;
    }
    renderActorArr(arr) {
      let actorArr = [];
      for (let key in arr) {
        if(arr[key].actors != null) {
          actorArr.push(arr[key].actors);
        }
      }
      return actorArr;
    }
    renderActorList(item, index) {
      const actorList = document.querySelector('.movie__selects-actor');
        const actorOption = document.createElement('option');
        actorOption.innerHTML = `
        <option value=${index}>${item.name}</option>`;
        actorList.append(actorOption); 
    }
    renderFilmList(arr) {
      const filmList = document.querySelector('.movie__selects-name');
      arr.forEach((film, index) => {
        const filmOption = document.createElement('option');
        filmOption.innerHTML = `
        <div value=${index}>${film}</div>`;
        filmList.append(filmOption);
      });
      changer(filmList);
    }
    renderGenderList(arr) {
      const genderList = document.querySelector('.movie__selects-gender');
      arr.forEach((gender, index) => {
        const genderOption = document.createElement('option');
        genderOption.innerHTML = `
        <option value=${index}>${gender}</option>`;
        genderList.append(genderOption);
      });
    }
    uniqueArray(arr) {
      let uniqueArr = arrayUnique(arr.join().split(','));
      return uniqueArr;
    }
    cleanerUndefined() {
      for (const key in this) {
        if (this[key] === undefined) {
          delete this[key];
        }
      }
      return this;
    }
  };
};
export default renderCards;