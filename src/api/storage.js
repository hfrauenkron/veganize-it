export function getFavouritesFromStorage() {
  try {
    const favourites = localStorage.getItem("reports");
    const parsedFavourites = JSON.parse(favourites);
    return parsedFavourites || [];
  } catch {
    return [];
  }
}

export function setFavouritesToStorage(string) {
  localStorage.setItem("favourites", JSON.stringify(string));
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
