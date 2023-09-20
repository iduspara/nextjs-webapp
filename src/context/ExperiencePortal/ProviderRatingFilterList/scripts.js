/* eslint-disable no-param-reassign */
import { scrollToY } from '@assets/scripts/helpers/animations';
import toggleDetails from '@assets/scripts/helpers/result-details-toggle';

export default () => {
  document
    .querySelectorAll('.provider-rating-filter-list')
    .forEach((container) => {
      // Filters
      const reviewLinks = container.querySelectorAll('.review-link');
      const ratingFilter = container.querySelector('.rating-filter');
      const productFilter = container.querySelector('.product-filter');

      // Other elements
      const list = container.querySelector('.provider-rating-review-list');
      const resultCount = container.querySelector('.filter-results');
      const showMoreButton = container.querySelector('.show-all-button');
      const experienceElement = document.querySelector('#erfahrungen');
      const reviewAnchorPosition = experienceElement
        ? window.scrollY + experienceElement.getBoundingClientRect().top
        : 0;

      // Values
      const providerId = parseInt(list.dataset.providerId, 10);
      const { environment } = list.dataset;

      const recomendationIds = list.dataset.recoboxes.split(',');
      const resultPerPage = parseInt(list.dataset.numberToShow, 10);
      const recoBoxPosition = parseInt(list.dataset.recoboxPosition, 10);
      const filterSpinner = container.querySelector(
        '.spinner-wrapper .spinner'
      );
      const showMoreSpinner = container.querySelector(
        '.show-all-button .spinner'
      );
      let ratingFilterNew = 0;
      const useTextAll = 'Alle';
      let productFilterNew = useTextAll;
      let pageNumber = 1;
      let recoboxIndex = 0;
      const setEnvironment = () => {
        switch (environment) {
          case 'local':
            return 'https://finanztip.test';
          case 'storybook':
            return 'https://localhost:4001';
          default:
            return '';
        }
      };

      const renderReviewTemplate = (parsedData) => `
        <div class="provider-rating-review result-item padding-bottom-xl border-bottom margin-bottom-xl" data-rating="${parsedData.rating}" data-product="${parsedData.product}">
          <p class="tagline">
            <span class="author-date"><strong>${parsedData.author}</strong> am ${parsedData.date}</span>
            <span class="${parsedData.ratingClass}"><span class="icon-rating-neutral font-size-l no-filter"></span> ${parsedData.ratingLabel}</span>
          </p>
          <p class="title"><strong>Produkt:</strong> ${parsedData.product}</p>
          <div class="text">
            <p>${parsedData.excerpt_comment}
              <span class="more-details-text-delimiter">…</span>
              <span class="result-item-details hidden">${parsedData.rest_comment}</span>
              <span class="more-details cursor-pointer" data-text-active="Weniger anzeigen">
                <span class="more-details-text">Mehr anzeigen</span>
                <span class="more-details-icon icon-navigation-circle-down color-indigo"></span>
              </span>
            </p>
          </div>
        </div>
      `;

      const extractRatingFilter = (filter) => {
        let filterId = null;
        try {
          filterId = filter.split(' ');
          switch (filterId[0]) {
            case 'positiv':
              return 1;

            case 'neutral':
              return 2;

            case 'negativ':
              return 3;

            default:
              return 0;
          }
        } catch (error) {
          return filter;
        }
      };

      const renderRecoBox = (templateKey, data, template) => {
        const renderedRecoBoxForProduct = document.getElementById(templateKey);
        if (renderedRecoBoxForProduct) {
          const markup = renderedRecoBoxForProduct.innerHTML;
          template.innerHTML += markup;
        }
      };

      const clearSelectedProductFilter = () => {
        const inputWrapper = productFilter.closest('.input-wrapper');
        const selected = inputWrapper.querySelector('.selected');
        const options = inputWrapper.querySelectorAll('.options .option');

        productFilter.value = 0;

        options.forEach((option) => {
          option.classList.remove('active');
          if (option.textContent.includes(useTextAll)) {
            option.classList.add('active');
            selected.textContent = useTextAll;
          }
        });
      };

      const updateRatingFilter = (callback, link) => {
        const targetFilter = link ? link.dataset.value : 0;
        const inputWrapper = ratingFilter.closest('.input-wrapper');
        const selected = inputWrapper.querySelector('.selected');
        const options = inputWrapper.querySelectorAll('.options .option');
        let targetText = '';

        switch (targetFilter) {
          case '1':
            targetText = 'positiv';
            break;
          case '2':
            targetText = 'neutral';
            break;
          case '3':
            targetText = 'negativ';
            break;
          default:
            targetText = useTextAll;
            break;
        }

        ratingFilter.value = targetFilter;

        options.forEach((option) => {
          option.classList.remove('active');
          if (option.textContent.includes(targetText)) {
            option.classList.add('active');
            selected.textContent = targetText;
          }
        });

        callback(providerId, productFilterNew, targetFilter);
      };

      const displayHttpError = (reviewList, callback) => {
        const error =
          '<p>Oops das Internet war zu langsam.</p><button class="primary small http-error">neu laden</button>';
        const errorElement = document.createElement('div');
        errorElement.classList.add('filter-error');
        errorElement.innerHTML = error;
        reviewList.innerHTML = '';
        reviewList.appendChild(errorElement);
        const filterError = container.querySelector('.filter-error');
        const zeroResultsReset = filterError.querySelector('.http-error');
        zeroResultsReset.addEventListener('click', () => {
          callback(
            providerId,
            productFilterNew,
            extractRatingFilter(ratingFilterNew),
            pageNumber
          );
        });
      };

      const displayZeroResultError = (reviewList, callback) => {
        const httpError =
          '<p>Keine Anbieterbewertungen mit diesen Filtereinstellungen</p><button class="primary small zero-results-reset">Filter zurücksetzen</button>';

        const errorElement = document.createElement('div');
        errorElement.classList.add('filter-error');
        errorElement.innerHTML = httpError;
        reviewList.innerHTML = '';
        reviewList.appendChild(errorElement);
        const filterError = container.querySelector('.filter-error');
        const zeroResultsReset = filterError.querySelector(
          '.zero-results-reset'
        );
        zeroResultsReset.addEventListener('click', () => {
          ratingFilter.value = 0;
          productFilter.value = 0;
          ratingFilterNew = 0;
          productFilterNew = useTextAll;
          clearSelectedProductFilter();
          updateRatingFilter(callback);
        });
      };

      const displayDomainError = (reviewList) => {
        const domainError = '<p>Backend nicht verfügbar.</p>';
        const errorElement = document.createElement('div');
        errorElement.classList.add('filter-error');
        errorElement.innerHTML = domainError;
        reviewList.innerHTML = '';
        reviewList.appendChild(errorElement);
      };

      async function filterResults(
        providerIdentifyer = providerId,
        productId = useTextAll,
        ratingId = '0',
        page = '1',
        appendMode = false
      ) {
        const link = `${setEnvironment()}/erfahrungen/wp-json/reviews/v1/filter/${providerIdentifyer}/${productId}/${ratingId}/${page}`;
        const reviewList = container.querySelector(
          '.provider-rating-review-list'
        );
        filterSpinner.classList.remove('hidden');

        fetch(link)
          .then((response) => {
            if (response.ok === false) {
              resultCount.innerHTML = '';
              filterSpinner.classList.add('hidden');
              return displayHttpError(reviewList, filterResults);
            }
            return response.json();
          })
          .then((data) => {
            if (!appendMode) {
              reviewList.innerHTML = '';
            }

            if (data.ratings.length === 0) {
              resultCount.innerHTML = '';
              filterSpinner.classList.add('hidden');
              return displayZeroResultError(reviewList, filterResults);
            }

            resultCount.innerHTML = '';
            const filteredResults = `Ergebnisse: <span class="filter-count">${data.ratingcount}</span>`;
            const filterElement = document.createElement('p');
            filterElement.classList.add('filter-label');
            filterElement.innerHTML = filteredResults;
            resultCount.appendChild(filterElement);

            showMoreButton.classList.remove('hidden');
            let recoboxPositionCounter = 1;
            showMoreSpinner ? showMoreSpinner.classList.add('hidden') : '';

            data.ratings.forEach((rating) => {
              reviewList.innerHTML += renderReviewTemplate(rating);

              if (
                recomendationIds.length > 0 &&
                recoboxPositionCounter === recoBoxPosition
              ) {
                const isProductFilterTextAll = productFilterNew !== useTextAll;
                const param = isProductFilterTextAll
                  ? data.ratings[0].product
                  : recomendationIds[recoboxIndex];
                renderRecoBox(param, data, reviewList);
                recoboxIndex =
                  recoboxIndex + 1 < recomendationIds.length
                    ? recoboxIndex + 1
                    : 0;
                recoboxPositionCounter = 1;
              } else {
                recoboxPositionCounter += 1;
              }
            });

            container
              .querySelectorAll('.provider-rating-review')
              .forEach((review) => {
                toggleDetails(review);
              });

            if (data.ratings.length < resultPerPage) {
              showMoreButton.classList.add('hidden');
            }
            filterSpinner.classList.add('hidden');
            return null;
          })
          .catch((e) => {
            resultCount.innerHTML = '';
            showMoreButton.classList.add('hidden');
            filterSpinner.classList.add('hidden');
            return displayHttpError(reviewList, filterResults);
          });
      }

      const filterEventHandler = () => {
        let inputWrapper = productFilter.closest('.input-wrapper');
        let selected = inputWrapper.querySelector('.selected');
        productFilterNew = selected.textContent;
        inputWrapper = ratingFilter.closest('.input-wrapper');
        selected = inputWrapper.querySelector('.selected');
        ratingFilterNew = selected.textContent;
        filterResults(
          providerId,
          productFilterNew,
          extractRatingFilter(ratingFilterNew)
        );
        pageNumber = 1;
      };

      ratingFilter.addEventListener('change', () => {
        showMoreButton.classList.add('hidden');
        filterEventHandler();
      });

      productFilter.addEventListener('change', () => {
        showMoreButton.classList.add('hidden');
        filterEventHandler();
      });

      showMoreButton.addEventListener('click', () => {
        showMoreSpinner.classList.remove('hidden');
        pageNumber += 1;
        filterResults(
          providerId,
          productFilterNew,
          extractRatingFilter(ratingFilterNew),
          pageNumber,
          true
        );
      });

      reviewLinks.forEach((reviewLink) => {
        reviewLink.addEventListener('click', (e) => {
          e.preventDefault();
          scrollToY(reviewAnchorPosition);
          updateRatingFilter(filterResults, reviewLink);
        });
      });
    });
};
