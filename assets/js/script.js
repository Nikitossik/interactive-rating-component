const rating = document.querySelector('.rating');
const ratingBody = rating.querySelector('.rating__body');
const ratingFeedback = rating.querySelector('.rating__feedback');

let selectedRatingItem = null,
    selectedRating = null;

function selectRating(ratingItem) {
    if (selectedRatingItem) selectedRatingItem.classList.remove('rating__item--active');
    
    selectedRatingItem = ratingItem;
    selectedRatingItem.classList.add('rating__item--active');
    selectedRating = selectedRatingItem.textContent;
}

rating.addEventListener('click', e => {
    const ratingItem = e.target.closest('.rating__item');

    if (!ratingItem || !rating.contains(ratingItem)) return;

    selectRating(ratingItem);
});

rating.addEventListener('click', e => {
    const ratingButton = e.target.closest('.rating__button');

    if (!ratingButton || !rating.contains(ratingButton) || !selectedRating) return;

    e.preventDefault();

    ratingBody.classList.add('rating__body--hidden');
    ratingFeedback.classList.add('feedback-rating--active');
    ratingFeedback.querySelector('.feedback-rating__message').textContent = ` You selected ${selectedRating} out of 5`;

});