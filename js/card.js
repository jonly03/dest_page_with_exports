export function createCard(destName, locName, imgUrl, locDesc) {
  // create a bootstrap card (https://getbootstrap.com/docs/5.3/components/card/)
  const newCard = document.createElement("div");
  newCard.classList.add("card", "dest_card");
  newCard.setAttribute("style", "width: 18rem;");

  const placeholderUrl =
    "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";

  newCard.innerHTML = `
      <img src=${
        imgUrl.length === 0 ? placeholderUrl : imgUrl
      } class="card-img-top dest_img" alt=${destName}>
      <div class="card-body">
          <h5 class="card-title dest_name">${destName}</h5>
          <p class="card-text dest_loc">${locName}</p>
  
          ${
            locDesc.length === 0
              ? ""
              : `<p class="card-text dest_desc">${locDesc}</p>`
          }
          
          <a class="btn btn-warning edit_btn">Edit</a>
          <a class="btn btn-danger delete_btn">Delete</a>
      </div> 
      `;

  return newCard;
}

export function handleCardEdit(evt) {
  //   prompt user for new card details
  const destinationName = prompt("Enter new destination name");
  if (destinationName !== null && destinationName.length > 0) {
    evt.target.closest(".dest_card").querySelector(".dest_name").textContent =
      destinationName;
  }

  const locationName = prompt("Enter new location name");
  if (locationName !== null && locationName.length > 0) {
    evt.target.closest(".dest_card").querySelector(".dest_loc").textContent =
      locationName;
  }

  const photoUrl = prompt("Enter new photo url");
  if (photoUrl !== null && photoUrl.length > 0) {
    evt.target
      .closest(".dest_card")
      .querySelector(".dest_img")
      .setAttribute("src", photoUrl);
  }

  const locationDescription = prompt("Enter new description");
  if (locationDescription !== null && locationDescription.length > 0) {
    const descElt = evt.target
      .closest(".dest_card")
      .querySelector(".dest_desc");

    if (descElt !== null) {
      // We already had a description element, just change it's text content
      descElt.textContent = locationDescription;
    } else {
      // we didn't have a description element, create a new one and insert it before the edit button
      // <p class="card-text dest_desc">${locDesc}</p>
      const newDescElt = document.createElement("p");
      newDescElt.classList.add("card-text", "dest_desc");
      newDescElt.textContent = locationDescription;

      const cardBody = evt.target.closest(".card-body");
      const editBtn = evt.target
        .closest(".card-body")
        .querySelector(".edit_btn");

      cardBody.insertBefore(newDescElt, editBtn);
    }
  }
}

export function handleCardDelete(evt) {
  //   evt.target.parentElement.parentElement.remove();
  evt.target.closest(".dest_card").remove();
}
