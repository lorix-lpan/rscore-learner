app.config(['languageServiceProvider', function (language) {
  language.setTrans(
    {
      "titles": {
        "en": {
          "TITLE": "Get Your R Score",
          "SECTITLE": "A Better and Smarter R Score Calculator"
        },
        "fr": {
          "TITLE": "Obtenez votre cote R",
          "SECTITLE": "Une Calculatrice intelligente de Cote R, améliorée"
        }
      },
      "calculator": {
        "en": {
          "GRADE": "Your Grade",
          "STDEV": "Standard Deviation",
          "AVR": "Class Average",
          "HAVR": "High School Average",
          "RSCORE": "Your R Score is "
        },
        "fr": {
          "GRADE": "Votre Note",
          "STDEV": "L'écart-type",
          "AVR": "Moyenne de Classe",
          "HAVR": "Moyenne au secondaire",
          "RSCORE": "Votre Cote R est "
        }
      },
      "navList": {
        "en": {
          "CALC": "The Calculator",
          "ABOUT": "About R Score",
          "ESTIMATE": "Estimate Your Group Strength",
          "SUBMIT": "Submit Your Old R Score"
        },
        "fr": {
          "CALC": "La Calculatrice",
          "ABOUT": "À Propos de Cote R",
          "ESTIMATE": "Estimate Your Group Strength",
          "SUBMIT": "soumettre votre Cote R anciene"
        }
      }
    });
}]);
