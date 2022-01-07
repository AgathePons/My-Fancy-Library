const app = {
  addToFavButton: (event) => {
    event.preventDefault();
  },

  init: () => {
    const favButtons = document.getElementsByClassName('fav-link');
    for(const favButton of favButtons) {
      favButton.addEventListener('click', app.addToFavButton);
    }
  },
};

document.addEventListener('DOMContentLoaded', app.init);