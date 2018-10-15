var Personne = {
  nom: "",
  prenom: "",
  dateNais: [1, 1, 1977],
  taille: 170,

  init: function(nom, prenom, dateNais, taille) {
    this.nom = nom;
    this.prenom = prenom;
    this.dateNais = dateNais;
    this.taille = taille;
  },

  decrire: function() {
    console.log(`Je suis ${this.prenom} ${this.nom}, né(e) le ${this.dateNais.join("/")} et je mesure ${this.taille} cm.`);
  },

  age: function() {
    var today = new Date();
    var tmpDate = this.dateNais;
    tmpDate.reverse();
    
    var diff =  today - tmpDate;
    return new Date(diff).getUTCFullYear() - 1970;
  }
}

var Professeur = Object.create(Personne);
Professeur.email = "prof@school.com";

Professeur.initProfesseur = function(nom, prenom, dateNais, taille, email) {
  this.init(nom, prenom, dateNais, taille);
  this.email = email;
};

Professeur.decrire = function() {
  console.log(`Je suis ${this.prenom} ${this.nom}, né(e) le ${this.dateNais.join("/")} et je mesure ${this.taille} cm. Mon adresse email est : ${this.email}.`);
};

var jack = Object.create(Professeur);
jack.initProfesseur("SPARROW", "Jack", [13, 8, 2003], 165, "jack.sparrow@pirateschool.com");

jack.decrire();

var doctor = Object.create(Professeur);
doctor.initProfesseur("WHO", "Doctor", [23, 11, 1963], 180, "doctor.who@spacetimeschool.com");

doctor.decrire();

// Taille et Age définis pour Professeur car Professeur créé à partir de Personne