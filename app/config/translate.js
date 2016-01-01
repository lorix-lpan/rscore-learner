app.config(['languageServiceProvider', function (language) {
  language.setTrans(
    {
      "titles": {
        "en": {
          "TITLE": "Get Your R Score",
          "SECTITLE": "A Better and Smarter R Score Calculator"
        },
        "fr": {
          "TITLE": "Obtenez Votre Cote R",
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
          "ESTIMATE": "Estimate the Group Strength",
          "SUBMIT": "Submit Your Old R Score"
        },
        "fr": {
          "CALC": "La Calculatrice",
          "ABOUT": "À Propos de Cote R",
          "ESTIMATE": "Estimer la Puissance du Groupe",
          "SUBMIT": "Soumettre Cote R Ancienne"
        }
      },
      "dynamicsTabs": {
        "en": {
          "OVERALL": "Overall R Score: "
        },
        "fr": {
          "OVERALL": "Cote R Globale: "
        }
      },
      "dialog": {
        "en": {
          "COURSE": "Course",
          "CREDITS": "Credits",
          "CREATE": "New Subject",
          "MODIFY": "Edit Subject",
          "REQUIRE": "This Field is Required",
          "INVALID": "Invalid Input"
        },
        "fr": {
          "COURSE": "Cours",
          "CREDITS": "Crédits",
          "CREATE": "Créer Sujet",
          "MODIFY": "Modifier Sujet",
          "REQUIRE": "Ce champ est requis",
          "INVALID": "Entrée Invalide"
        }
      }
    });
}]);
