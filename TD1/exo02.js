function Etudiant(nom, prenom, numEtu, dateNais) {
  this.nom = nom;
  this.prenom = prenom;
  this.numEtu = numEtu;
  this.dateNais = new Date(dateNais.reverse());

  this.presenter = function() {
    console.log(`Je m'appelle ${this.prenom} ${this.nom}, né(e) le ${this.dateNais.toLocaleDateString()}. Mon numéro étudiant est : ${this.numEtu}.`);
  };

  this.age = function() {
    var today = new Date();
    var diff =  today - this.dateNais;
    return new Date(diff).getUTCFullYear() - 1970;
  };
};

var seb = new Etudiant("GAYA", "Sébastien", 123456, [3, 6, 1999]);
var john = new Etudiant("SMITH", "John", 78901, [1, 3, 1937]);