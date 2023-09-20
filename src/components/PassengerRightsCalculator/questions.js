export default {
  questions: [
    {
      id: '0',
      title: 'Sollte Dein Flug von einem Flughafen in der EU starten? ',
      subtitle: 'Hin- und Rückflug gelten je als einzelner Flug.',
      answers: [
        {
          nextQuestionId: '1',
          text: 'Ja',
        },
        {
          nextQuestionId: '0-1',
          text: 'Nein',
        },
      ],
    },
    {
      id: '0-1',
      title: 'Sollte Dein Flug auf einem Flughafen in der EU landen? ',
      subtitle: 'Hin- und Rückflug gelten je als einzelner Flug.',
      answers: [
        {
          nextQuestionId: '0-1-1-1',
          text: 'Ja',
        },
        {
          nextQuestionId: '0-1-2',
          text: 'Nein',
        },
      ],
    },
    {
      id: '0-1-1-1',
      title:
        'Wurde Dein Flug von einer Airline ausgeführt, die ihren Sitz in der EU hat?',
      subtitle:
        'Wo die verschiedenen Airlines ihren Sitz haben, findest Du auf <a href="https://de.wikipedia.org/wiki/Liste_von_Fluggesellschaften" target="_blank">Wikipedia</a>.',
      answers: [
        {
          nextQuestionId: '1',
          text: 'Ja',
        },
        {
          nextQuestionId: '0-1-2',
          text: 'Nein',
        },
      ],
    },
    {
      id: '1',
      title: 'Welches Problem gab es mit Deinem Flug?',
      answers: [
        {
          nextQuestionId: '1-1-a',
          text: 'Mein Flug hatte eine Verspätung.',
        },
        {
          nextQuestionId: '1-2',
          text: 'Mein Flug wurde gestrichen.',
        },
        {
          nextQuestionId: '1-3',
          text: 'Ich wurde nicht mitgenommen.',
        },
      ],
    },
    {
      id: '1-1-a',
      title: 'Wie viel Verspätung hatte Dein Flug? ',
      subtitle:
        'Als Ankunft zählt das Öffnen von mindestens einer Tür, sobald die Passagiere das Flugzeug auch verlassen können',
      answers: [
        {
          nextQuestionId: '1-1-a-1',
          text: 'Unter zwei Stunden',
        },
        {
          nextQuestionId: '1-1-a-2',
          text: 'Zwei bis drei Stunden',
        },
        {
          nextQuestionId: '1-1',
          text: 'Über drei Stunden',
        },
      ],
    },
    {
      id: '1-1-a-2',
      title: 'Wie weit war Deine Flugstrecke? ',
      subtitle:
        'Die Entfernung kannst Du auf der Seite <a href="http://www.luftlinie.org" target="_blank">http://www.luftlinie.org</a> oder <a href="https://airmilescalculator.com" target="_blank">airmilescalculator.com</a> bei Zwischenstopps berechnen.',
      answers: [
        {
          nextQuestionId: '1-1-a-2-1',
          text: 'Flugstrecke bis 1.500 km',
        },
        {
          nextQuestionId: '1-1-a-2-2',
          text: 'Flugstrecke über 1.500 km',
        },
      ],
    },
    {
      id: '1-1',
      title: 'Was war der Grund für die Verspätung?',
      answers: [
        {
          nextQuestionId: '1-1-1',
          text: 'Höhere Gewalt, Sperrung des Luftraums oder Streik von Fluglotsen oder des Flughafenpersonals, außergewöhnlich schlechtes Wetter, Naturkatastrophen, Vulkanasche, politische Unruhen, Krieg, Terroranschläge oder akute Terrorbedrohung',
        },
        {
          nextQuestionId: '1-1-5',
          text: 'Technischer Defekt oder vermeidbare Probleme, Probleme mit dem Kabinendruck, Triebwerkschaden, Ausfall der Heizung, verstopfte Toiletten, Defekt am Fahrwerk, fehlendes Enteisungsmittel, Ausfall Gepäcksortieranlage, Beschädigung Treppen- oder Schlepperfahrzeug, fehlendes oder krankes Personal der Airline, Streik von Mitarbeitern der Airline',
        },
        {
          nextQuestionId: '1-1-4',
          text: 'Anderer Grund oder Ursache nicht genau bekannt',
        },
      ],
    },
    {
      id: '1-1-4',
      title: 'Wie weit war Deine Flugstrecke? ',
      subtitle:
        'Die Entfernung kannst Du auf der Seite <a href="http://www.luftlinie.org" target="_blank">http://www.luftlinie.org</a> oder airmilescalculator.com bei Zwischenstopps berechnen.',
      answers: [
        {
          nextQuestionId: '1-1-5-1',
          text: 'Flugstrecke bis 1.500 km',
        },
        {
          nextQuestionId: '1-1-5-2',
          text: 'Flug innerhalb der EU über 1.500 km oder Flug über die EU-Grenze hinaus zwischen 1.500 und 3.500 km',
        },
        {
          nextQuestionId: '1-1-5-3',
          text: 'Flug über EU-Grenze hinaus über 3.500 km',
        },
      ],
    },
    {
      id: '1-1-5',
      title: 'Wie weit war Deine Flugstrecke? ',
      subtitle:
        'Die Entfernung kannst Du auf der Seite <a href="http://www.luftlinie.org" target="_blank">http://www.luftlinie.org</a> oder <a href="https://airmilescalculator.com" target="_blank">airmilescalculator.com</a> bei Zwischenstopps berechnen.',
      answers: [
        {
          nextQuestionId: '1-1-5-1',
          text: 'Flugstrecke bis 1.500 km',
        },
        {
          nextQuestionId: '1-1-5-2',
          text: 'Flug innerhalb der EU über 1.500 km oder Flug über die EU-Grenze hinaus zwischen 1.500 und 3.500 km',
        },
        {
          nextQuestionId: '1-1-5-3',
          text: 'Flug über EU-Grenze hinaus über 3.500 km',
        },
      ],
    },
    {
      id: '1-2',
      title: 'Wann hast Du von dem Flugausfall erfahren?',
      answers: [
        {
          nextQuestionId: '1-2-3',
          text: 'Weniger als 7 Tage vor Abflug oder erst am Flughafen',
        },
        {
          nextQuestionId: '1-2-2',
          text: '7 bis 14 Tage vor Abflug',
        },
        {
          nextQuestionId: '1-2-1',
          text: 'Mehr als 14 Tage vor Abflug',
        },
      ],
    },
    {
      id: '1-2-2',
      title: 'Welchen Flug hat Dir die Airline als Alternative angeboten?',
      answers: [
        {
          nextQuestionId: '1-2-2-1',
          text: 'Der angebotene Alternativflug startete nicht mehr als zwei Stunden früher und landete nicht mehr als vier Stunden später als mein ursprünglicher Flug.',
        },
        {
          nextQuestionId: '1-2-2-2',
          text: 'Die Airline hat mir keinen Alternativflug angeboten, der in diesem zeitlichen Rahmen lag.',
        },
      ],
    },
    {
      id: '1-2-3',
      title: 'Welchen Flug hat Dir die Airline als Alternative angeboten?',
      answers: [
        {
          nextQuestionId: '1-2-3-1',
          text: 'Der angebotene Alternativflug startete nicht mehr als eine Stunde früher und landete nicht mehr als zwei Stunden später als mein ursprünglicher Flug.',
        },
        {
          nextQuestionId: '1-2-2-2',
          text: 'Die Airline hat mir keinen Alternativflug angeboten, der in diesem zeitlichen Rahmen lag.',
        },
      ],
    },
    {
      id: '1-2-2-2',
      title: 'Was war der Grund für die Annullierung?',
      answers: [
        {
          nextQuestionId: '1-2-2-2-1',
          text: 'Höhere Gewalt, Sperrung des Luftraums oder Streik von Fluglotsen oder des Flughafenpersonals, außergewöhnlich schlechtes Wetter, Naturkatastrophen, Vulkanasche, politische Unruhen, Krieg, Terroranschläge oder akute Terrorbedrohung',
        },
        {
          nextQuestionId: '1-2-2-2-5',
          text: 'Technischer Defekt oder vermeidbare Probleme, Probleme mit dem Kabinendruck, Triebwerkschaden, Ausfall der Heizung, verstopfte Toiletten, Defekt am Fahrwerk, fehlendes Enteisungsmittel, Ausfall Gepäcksortieranlage, Beschädigung Treppen- oder Schlepperfahrzeug, fehlendes oder krankes Personal der Airline, Streik von Mitarbeitern der Airline',
        },
        {
          nextQuestionId: '1-2-2-2-4',
          text: 'Anderer Grund oder Ursache nicht genau bekannt',
        },
      ],
    },
    {
      id: '1-2-2-2-4',
      title: 'Wie weit war Deine Flugstrecke? ',
      subtitle:
        'Die Entfernung kannst Du auf der Seite <a href="http://www.luftlinie.org" target="_blank">http://www.luftlinie.org</a> oder <a href="https://airmilescalculator.com" target="_blank">airmilescalculator.com</a> bei Zwischenstopps berechnen.',
      answers: [
        {
          nextQuestionId: '1-2-2-2-5-1',
          text: 'Flugstrecke bis 1.500 km',
        },
        {
          nextQuestionId: '1-2-2-2-5-2',
          text: 'Flug innerhalb der EU über 1.500 km oder Flug über die EU-Grenze hinaus zwischen 1.500 und 3.500 km',
        },
        {
          nextQuestionId: '1-2-2-2-5-3',
          text: 'Flug über EU-Grenze hinaus über 3.500 km',
        },
      ],
    },
    {
      id: '1-2-2-2-5',
      title: 'Wie weit war Deine Flugstrecke? ',
      subtitle:
        'Die Entfernung kannst Du auf der Seite <a href="http://www.luftlinie.org" target="_blank">http://www.luftlinie.org</a> oder <a href="https://airmilescalculator.com" target="_blank">airmilescalculator.com</a> bei Zwischenstopps berechnen.',
      answers: [
        {
          nextQuestionId: '1-2-2-2-5-1',
          text: 'Flugstrecke bis 1.500 km',
        },
        {
          nextQuestionId: '1-2-2-2-5-2',
          text: 'Flug innerhalb der EU über 1.500 km oder Flug über die EU-Grenze hinaus zwischen 1.500 und 3.500 km',
        },
        {
          nextQuestionId: '1-2-2-2-5-3',
          text: 'Flug über EU-Grenze hinaus über 3.500 km',
        },
      ],
    },
    {
      id: '1-3',
      title: 'Was war der Grund dafür?',
      answers: [
        {
          nextQuestionId: '1-3-1',
          text: 'Überbuchung',
        },
        {
          nextQuestionId: '1-3-2',
          text: 'Gründe, die sich auf meine Person beziehen (fehlende Reisedokumente, gesundheitliche Gründe, Ich war zu spät bei der Abfertigung, Die Airline sah in mir ein Sicherheitsrisiko)',
        },
      ],
    },
    {
      id: '1-3-1',
      title:
        'Konntest Du mit der Fluggesellschaft eine einvernehmliche Lösung finden?',
      answers: [
        {
          nextQuestionId: '1-3-1-1',
          text: 'Ja. Ich habe ein Angebot der Airline akzeptiert und freiwillig auf meinen ursprünglichen Flug verzichtet.',
        },
        {
          nextQuestionId: '1-3-1-2',
          text: 'Nein. Ich habe mich nicht mit der Airline geeinigt. Und obwohl ich es wollte, konnte ich nicht in der gebuchten Maschine mitfliegen.',
        },
      ],
    },
    {
      id: '1-3-1-2',
      title: 'Wie weit war Deine Flugstrecke? ',
      subtitle:
        'Die Entfernung kannst Du auf der Seite <a href="http://www.luftlinie.org" target="_blank">http://www.luftlinie.org</a> oder <a href="https://airmilescalculator.com" target="_blank">airmilescalculator.com</a> bei Zwischenstopps berechnen.',
      answers: [
        {
          nextQuestionId: '1-3-1-2-1',
          text: 'Flugstrecke bis 1.500 km',
        },
        {
          nextQuestionId: '1-3-1-2-2',
          text: 'Flug innerhalb der EU über 1.500 km oder Flug über die EU-Grenze hinaus zwischen 1.500 und 3.500 km',
        },
        {
          nextQuestionId: '1-3-1-2-3',
          text: 'Flug über EU-Grenze hinaus über 3.500 km',
        },
      ],
    },
  ],
  results: [
    {
      id: '0-1-2',
      pros: [],
      cons: [
        'Du hast nach europäischem Recht keinen Anspruch auf eine Entschädigung.',
      ],
      infos: [],
    },
    {
      id: '1-1-a-1',
      pros: [],
      cons: [
        'Du hast keinen Anspruch auf eine Entschädigung oder andere Leistungen. Eine Verspätung von weniger als zwei Stunden müssen Passagiere tolerieren.',
      ],
      infos: [],
    },
    {
      id: '1-1-a-2-1',
      pros: [
        'Getränk oder Snack für die Wartezeit',
        'Zwei Telefonate, E-Mails oder Faxe',
      ],
      cons: ['Keine Ausgleichszahlung'],
      infos: [],
    },
    {
      id: '1-1-a-2-2',
      pros: [],
      cons: [
        'Du hast keinen Anspruch auf eine Entschädigung oder andere Leistungen. Bei einer Flugstrecke von über 1.500 km müssen Passagiere eine Verspätung von weniger als drei Stunden tolerieren.',
      ],
      infos: [],
    },
    {
      id: '1-1-1',
      pros: [
        'Mahlzeiten und Erfrischungen in angemessenem Verhältnis zu Ihrer Wartezeit',
        'Zwei Telefonate, E-Mails oder Faxe',
        'Falls nötig Hotel und Transfer',
        'Ab fünf Stunden verspäteter Abflug: Flugpreiserstattung oder anderweitige Beförderung',
      ],
      cons: ['Keine Ausgleichszahlung'],
      infos: [],
      pdfVersion: 'V1',
    },
    {
      id: '1-1-2',
      pros: [
        'Mahlzeiten und Erfrischungen in angemessenem Verhältnis zu Ihrer Wartezeit',
        'Zwei Telefonate, E-Mails oder Faxe',
        'Falls nötig Hotel und Transfer',
        'Ab fünf Stunden verspäteter Abflug: Flugpreiserstattung oder anderweitige Beförderung',
      ],
      cons: ['Keine Ausgleichszahlung'],
      infos: [],
      pdfVersion: 'V1',
    },
    {
      id: '1-1-3',
      pros: [
        'Mahlzeiten und Erfrischungen in angemessenem Verhältnis zu Ihrer Wartezeit',
        'Zwei Telefonate, E-Mails oder Faxe',
        'Falls nötig Hotel und Transfer',
        'Ab fünf Stunden verspäteter Abflug: Flugpreiserstattung oder anderweitige Beförderung',
      ],
      cons: ['Keine Ausgleichszahlung'],
      infos: [],
      pdfVersion: 'V1',
    },
    {
      id: '1-1-5-1',
      pros: [
        'Ausgleichszahlung: voraussichtlich 250 Euro',
        'Mahlzeiten und Erfrischungen in angemessenem Verhältnis zu Ihrer Wartezeit',
        'Zwei Telefonate, E-Mails oder Faxe',
        'Falls nötig Hotel und Transfer',
        'Ab fünf Stunden verspäteter Abflug: Flugpreiserstattung oder anderweitige Beförderung',
      ],
      cons: [],
      infos: [],
      headline: 'Du hast grundsätzlich Anspruch auf voraussichtlich 250 Euro.',
      pdfVersion: 'V2',
    },
    {
      id: '1-1-5-2',
      pros: [
        'Ausgleichszahlung: voraussichtlich 400 Euro',
        'Mahlzeiten und Erfrischungen in angemessenem Verhältnis zu Ihrer Wartezeit',
        'Zwei Telefonate, E-Mails oder Faxe',
        'Falls nötig Hotel und Transfer',
        'Ab fünf Stunden verspäteter Abflug: Flugpreiserstattung oder anderweitige Beförderung',
      ],
      cons: [],
      infos: [],
      headline: 'Du hast grundsätzlich Anspruch auf voraussichtlich 400 Euro.',
      pdfVersion: 'V3',
    },
    {
      id: '1-1-5-3',
      pros: [
        'Ausgleichszahlung: voraussichtlich 600 Euro',
        'Mahlzeiten und Erfrischungen in angemessenem Verhältnis zu Ihrer Wartezeit',
        'Zwei Telefonate, E-Mails oder Faxe',
        'Falls nötig Hotel und Transfer',
        'Ab fünf Stunden verspäteter Abflug: Flugpreiserstattung oder anderweitige Beförderung',
      ],
      cons: [],
      infos: [],
      headline: 'Du hast grundsätzlich Anspruch auf voraussichtlich 600 Euro.',
      pdfVersion: 'V4',
    },
    {
      id: '1-2-1',
      pros: [
        'Alternative Beförderung oder Erstattung des Ticketpreises',
        'Falls nötig Hotel und Transfer',
      ],
      cons: ['Keine Ausgleichszahlung'],
      infos: [],
      pdfVersion: 'A2',
    },
    {
      id: '1-2-2-1',
      pros: ['Alternative Beförderung oder Erstattung des Ticketpreises'],
      cons: ['Keine Ausgleichszahlung'],
      infos: [],
      pdfVersion: 'A3',
    },
    {
      id: '1-2-3-1',
      pros: ['Alternative Beförderung oder Erstattung des Ticketpreises'],
      cons: ['Keine Ausgleichszahlung'],
      infos: [],
      pdfVersion: 'A4',
    },
    {
      id: '1-2-2-2-1',
      pros: [
        'Alternative Beförderung oder Erstattung des Ticketpreises',
        'Betreuungspflicht der Airline',
        'Falls nötig Hotel und Transfer',
      ],
      cons: ['Keine Ausgleichszahlung'],
      infos: [],
      pdfVersion: 'A1',
    },
    {
      id: '1-2-2-2-2',
      pros: [
        'Alternative Beförderung oder Erstattung des Ticketpreises',
        'Betreuungspflicht der Airline',
        'Falls nötig Hotel und Transfer',
      ],
      cons: ['Keine Ausgleichszahlung'],
      infos: [],
      pdfVersion: 'A1',
    },
    {
      id: '1-2-2-2-3',
      pros: [
        'Alternative Beförderung oder Erstattung des Ticketpreises',
        'Betreuungspflicht der Airline',
        'Falls nötig Hotel und Transfer',
      ],
      cons: ['Keine Ausgleichszahlung'],
      infos: [],
      pdfVersion: 'A1',
    },
    {
      id: '1-2-2-2-5-1',
      pros: [
        'Ausgleichszahlung: voraussichtlich 250 Euro',
        'Alternative Beförderung oder Erstattung des Ticketpreises',
        'Mahlzeiten und Erfrischungen in angemessenem Verhältnis zu Ihrer Wartezeit',
        'Zwei Telefonate, E-Mails oder Faxe',
        'Falls nötig Hotel und Transfer',
      ],
      cons: [],
      infos: [
        'Achtung: voraussichtlich 125 Euro bei Verspätung unter zwei Stunden',
      ],
      headline: 'Du hast grundsätzlich Anspruch auf voraussichtlich 250 Euro.',
      pdfVersion: 'A5',
    },
    {
      id: '1-2-2-2-5-2',
      pros: [
        'Ausgleichszahlung: voraussichtlich 400 Euro',
        'Alternative Beförderung oder Erstattung des Ticketpreises',
        'Mahlzeiten und Erfrischungen in angemessenem Verhältnis zu Ihrer Wartezeit',
        'Zwei Telefonate, E-Mails oder Faxe',
        'Falls nötig Hotel und Transfer',
      ],
      cons: [],
      infos: [
        'Achtung: voraussichtlich 200 Euro bei Verspätung unter drei Stunden',
      ],
      headline: 'Du hast grundsätzlich Anspruch auf voraussichtlich 400 Euro.',
      pdfVersion: 'A6',
    },
    {
      id: '1-2-2-2-5-3',
      pros: [
        'Ausgleichszahlung: voraussichtlich 600 Euro',
        'Alternative Beförderung oder Erstattung des Ticketpreises',
        'Mahlzeiten und Erfrischungen in angemessenem Verhältnis zu Ihrer Wartezeit',
        'Zwei Telefonate, E-Mails oder Faxe',
        'Falls nötig Hotel und Transfer',
      ],
      cons: [],
      infos: [
        'Achtung: voraussichtlich 300 Euro bei Verspätung unter vier Stunden',
      ],
      headline: 'Du hast grundsätzlich Anspruch auf voraussichtlich 600 Euro.',
      pdfVersion: 'A7',
    },
    {
      id: '1-3-2',
      pros: [],
      cons: [
        'Die Airline kann sich aus wichtigen Gründen weigern, Fluggäste zu befördern. In diesem Fall steht Dir keine Ausgleichszahlungen oder Leistungen von der Fluggesellschaft zu.',
      ],
      infos: [],
    },
    {
      id: '1-3-1-1',
      pros: [],
      cons: [],
      infos: [
        'Weil Du das Angebot der Airline freiwillig angenommen hast, steht Dir keine weitere Entschädigung zu.',
      ],
    },
    {
      id: '1-3-1-2-1',
      pros: [
        'Ausgleichszahlung: voraussichtlich 250 Euro',
        'Alternative Beförderung oder Erstattung des Ticketpreises',
        'Mahlzeiten und Erfrischungen in angemessenem Verhältnis zu Ihrer Wartezeit',
        'Zwei Telefonate, E-Mails oder Faxe',
        'Falls nötig Hotel und Transfer',
      ],
      cons: [],
      infos: [
        'Achtung: voraussichtlich 125 Euro bei Verspätung unter zwei Stunden',
      ],
      headline: 'Du hast grundsätzlich Anspruch auf voraussichtlich 250 Euro.',
      pdfVersion: 'N1',
    },
    {
      id: '1-3-1-2-2',
      pros: [
        'Ausgleichszahlung: voraussichtlich 400 Euro',
        'Alternative Beförderung oder Erstattung des Ticketpreises',
        'Mahlzeiten und Erfrischungen in angemessenem Verhältnis zu Ihrer Wartezeit',
        'Zwei Telefonate, E-Mails oder Faxe',
        'Falls nötig Hotel und Transfer',
      ],
      cons: [],
      infos: [
        'Achtung: voraussichtlich 200 Euro bei Verspätung unter drei Stunden',
      ],
      headline: 'Du hast grundsätzlich Anspruch auf voraussichtlich 400 Euro.',
      pdfVersion: 'N2',
    },
    {
      id: '1-3-1-2-3',
      pros: [
        'Ausgleichszahlung: voraussichtlich 600 Euro',
        'Alternative Beförderung oder Erstattung des Ticketpreises',
        'Mahlzeiten und Erfrischungen in angemessenem Verhältnis zu Ihrer Wartezeit',
        'Zwei Telefonate, E-Mails oder Faxe',
        'Falls nötig Hotel und Transfer',
      ],
      cons: [],
      infos: [
        'Achtung: voraussichtlich 300 Euro bei Verspätung unter vier Stunden',
      ],
      headline: 'Du hast grundsätzlich Anspruch auf voraussichtlich 600 Euro.',
      pdfVersion: 'N3',
    },
  ],
};
