import { createCard, handleCardDelete, handleCardEdit } from "../card.js";

// handle the form submission
destination_form.addEventListener("submit", handleFormSubmit);

// handle edit and delete functionalities
cards_container.addEventListener("click", (e) => {
  // figure out which button got clicked on (either edit or delete) and delegate

  e.target.classList.contains("edit_btn")
    ? handleCardEdit(e)
    : e.target.classList.contains("delete_btn")
    ? handleCardDelete(e)
    : "";
});

function handleFormSubmit(e) {
  e.preventDefault();

  //   retrieve and store user input to use later
  const destinationName = destination_name.value;
  const locationName = location_name.value;

  const photoUrl = photo_url.value;

  const locationDescription = location_description.value;

  // reset the user input form fields
  destination_form.reset();

  //   create dynamic card with user input
  const newCard = createCard(
    destinationName,
    locationName,
    photoUrl,
    locationDescription
  );

  //   add card to dom #cards_container
  cards_container.appendChild(newCard);
}
