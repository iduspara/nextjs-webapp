export default () => {
  document.querySelectorAll('.header-provider-list').forEach((container) => {
    const header = container.querySelector('.experience-portal-header');
    const searchInput = header.querySelector('.search-input input');
    const filterSelect = header.querySelector('.custom-select select');
    const clearFilter = container.querySelector('.input-clear');
    const providers = container.querySelectorAll('.provider-list .provider');
    const error = container.querySelector('.filter-error');
    const zeroResultsReset = error.querySelector('.zero-results-reset');
    const selectProduct = container.querySelector('#productfilter');

    const filterProviders = (queryInput = '', querySelect = '') => {
      providers.forEach((provider) => {
        const datasetSearch = provider.dataset.search.toLocaleLowerCase();

        if (
          datasetSearch.includes(queryInput.toLocaleLowerCase()) &&
          datasetSearch.includes(querySelect.toLocaleLowerCase())
        ) {
          provider.classList.remove('hidden');
        } else {
          provider.classList.add('hidden');
        }
      });

      // Recalculate alternating background colors
      const visibleProviders = container.querySelectorAll(
        '.provider-list .provider:not(.hidden)'
      );

      visibleProviders.forEach((provider, index) => {
        if (index % 2 === 0) {
          provider.classList.add('background-color-white');
          provider.classList.remove('background-color-lightgrey');
        } else {
          provider.classList.remove('background-color-white');
          provider.classList.add('background-color-lightgrey');
        }
      });

      if (visibleProviders.length !== 0) {
        error.classList.add('hidden');
      } else {
        error.classList.remove('hidden');
      }
    };

    const setSelectedProductFilter = (value = '0') => {
      const inputWrapper = selectProduct.closest('.input-wrapper');
      const selected = inputWrapper.querySelector('.selected');
      const options = inputWrapper.querySelectorAll('.options .option');

      selectProduct.value = value;

      options.forEach((option) => {
        option.classList.remove('active');
        if (value === '0' && option.textContent.includes('alle Produkte')) {
          option.classList.add('active');
          selected.textContent = 'alle Produkte';
        } else if (option.textContent.toLowerCase() === value) {
          selected.textContent = option.textContent;
        }
      });
    };

    filterSelect.addEventListener('change', () => {
      filterProviders(searchInput.value, filterSelect.value);
    });

    searchInput.addEventListener('input', () => {
      filterProviders(searchInput.value, filterSelect.value);
    });

    clearFilter.addEventListener('click', () => {
      filterProviders(searchInput.value, filterSelect.value);
    });

    zeroResultsReset.addEventListener('click', () => {
      filterProviders('');
      searchInput.value = '';
      setSelectedProductFilter();
    });

    if (window.location.hash !== '') {
      const targetFilter = decodeURI(window.location.hash).slice(1);
      setSelectedProductFilter(targetFilter);
      filterProviders('', targetFilter);
    }
  });
};
