export function getFavouritesFromStorage() {
  try {
    const favourites = localStorage.getItem("favourites");
    const parsedFavourites = JSON.parse(favourites);
    return parsedFavourites || [];
  } catch {
    return [];
  }
}

export function setFavouritesToStorage(newFavourites) {
  localStorage.setItem("favourites", JSON.stringify(newFavourites));
}

export function getUserNameFromStorage() {
  try {
    const userName = localStorage.getItem("userName");
    const parsedUserName = JSON.parse(userName);
    return parsedUserName || [];
  } catch {
    return [];
  }
}

export function setUserNameToStorage(string) {
  localStorage.setItem("userName", JSON.stringify(string));
}
