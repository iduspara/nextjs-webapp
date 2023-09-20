import DATA from './questions';
/* global track */

// Fluggastrechner
// URL: /fluggastrechte/
export default () => {
  document
    .querySelectorAll('.passenger-rights-calculator')
    .forEach((container) => {
      const currentQuestion = container.querySelector(
        '.passenger-rights-calculator-current-question'
      );
      const questionText = container.querySelector(
        '.passenger-rights-calculator-question'
      );
      const currentAnswers = container.querySelector(
        '.passenger-rights-calculator-answers'
      );
      const resultContainer = container.querySelector(
        '.passenger-rights-calculator-result-container'
      );
      const results = container.querySelector(
        '.passenger-rights-calculator-results'
      );
      const resultReset = resultContainer.querySelector('.result-reset');
      let history = [];

      const setAnswer = (answer) => `
      <div class='custom-checkbox-radio radio-align-top'>
        <input
            type='radio'
            id='passenger-rights-calculator-answer-${answer.nextQuestionId}'
            class='passenger-rights-calculator-answer'
            value=${answer.nextQuestionId}
            name='passenger-rights-calculator-answers'/>
        <span class='radio-span'></span>
        <label for='passenger-rights-calculator-answer-${answer.nextQuestionId}'>${answer.text}</label>
      </div>
    `;

      const showItem = (item, showFunction, supressAnimation = false) => {
        let timeoutMS = 0;
        if (!supressAnimation) {
          currentQuestion.classList.add('animation-fade-out');
          timeoutMS = 400;
        }

        setTimeout(() => {
          showFunction(item);

          // trigger tracking (there might be affiliate links in them)
          track.options.closerElement = '.passenger-rights-calculator';
          track.addTracking();
        }, timeoutMS);
      };

      const showResult = (result) => {
        currentQuestion.classList.add('hidden');
        resultContainer.classList.remove('hidden');

        // update content
        const headline = result.headline
          ? `
            <h5 class="h5">
              <span class="icon-table-yes color-spring font-size-l margin-right-xxs"></span>
              ${result.headline}
            </h5>
          `
          : '';

        const cons = [];
        result.cons.forEach((con) => {
          cons.push(`
          <h5 class="h5">
            <span class="icon-table-no color-coral font-size-l margin-right-xxs"></span>
            ${con}
          </h5>
        `);
        });

        const prosInfosList = (dataItems, isInfo = true) => {
          const list = [];
          dataItems.forEach((item) => {
            list.push(`
            <li>
              <span class='icon ${
                isInfo ? 'icon-exclamation-mark' : 'icon-rating-good'
              }'></span>
              ${item}
            </li>
          `);
          });
          return list;
        };

        const pros = prosInfosList(result.pros, false);
        const infos = prosInfosList(result.infos);

        const pdfVersion = result.pdfVersion
          ? `
        <a
          class="h5 download button-icon button-icon-text"
          href='/fileadmin/images/Fluggastrechte/pdf/Finanztip.de_Ergebnis_und_Musterbrief_${result.pdfVersion}.pdf'
          target='_blank'>
          <span class="icon-download"></span>
          Musterschreiben herunterladen
        </a>
        <p>
          Das ausführliche Ergebnis und ein Musterschreiben, um Deine Forderungen bei der Airline geltend zu
          machen, kannst Du <a
          href='/fileadmin/images/Fluggastrechte/pdf/Finanztip.de_Ergebnis_und_Musterbrief_${result.pdfVersion}.pdf'
          target='_blank'>hier herunterladen</a>.
        </p>`
          : '';
        results.innerHTML = `
        ${headline}
        ${cons.join('')}
        <ul class='pros-and-infos-list'>
          ${pros.join('')}
          ${infos.join('')}
        </ul>
        <div class="border-bottom margin-top-xl margin-bottom-xl"></div>
        ${pdfVersion}
      `;
      };

      // it's either a question or the result
      const findQuestion = (id) =>
        DATA.questions.find((question) => question.id === id) ||
        DATA.results.find((result) => result.id === id);

      const showQuestion = (question, supressAnimation = false) => {
        // see if we have previous questions (to render the back button)
        // eslint-disable-next-line no-param-reassign
        question.prevQuestion = history.length > 0;

        // update content
        questionText.innerHTML = question.title;
        if (!supressAnimation) {
          currentQuestion.classList.add('animation-fade-in');
          currentQuestion.classList.remove('animation-fade-out');
        }

        const answers = [];
        question.answers.forEach((answer) => {
          answers.push(setAnswer(answer));
        });

        const subtitle = question.subtitle
          ? `<div class='text-addon'><p>${question.subtitle}</p></div>`
          : '';
        const backButtonContainer = question.prevQuestion
          ? `
            <div class="button-wrapper margin-top-xl">
              <button class='question-prev'>Zurück</button>
            </div>
        `
          : '';
        currentAnswers.innerHTML = `
        ${answers.join('')}
        ${subtitle}
        ${backButtonContainer}
      `;

        // set up click events on answers
        currentAnswers
          .querySelectorAll('.passenger-rights-calculator-answer')
          .forEach((answer) => {
            answer.addEventListener('click', (event) => {
              const foundQuestion = findQuestion(event.target.value);
              const showFunction = foundQuestion.title
                ? showQuestion
                : showResult;
              showItem(foundQuestion, showFunction);
              // let's write history
              history.push(question);
            });
          });

        // set up click event for prev button
        const backButton = currentAnswers.querySelector('.question-prev');
        if (backButton) {
          backButton.addEventListener('click', () => {
            showItem(history.pop(), showQuestion);
          });
        }
      };

      const reset = () => {
        history = [];
        currentQuestion.classList.remove('hidden');
        resultContainer.classList.add('hidden');
        showItem(DATA.questions[0], showQuestion);
      };

      resultReset.addEventListener('click', () => {
        reset();
      });

      showItem(DATA.questions[0], showQuestion, true);
    });
};
