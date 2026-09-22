import { useState } from "react";

const ValidationForm = () => {
  const villes = ["Agadir", "Rabat", "Casablanca", "Safi"];


  const hobbies=["lecture","sport","shopping"];

  // Variables d'état
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [ville, setVille] = useState("");
  const [display, setDisplay] = useState(false);
  const [errors, setErrors] = useState({});

  // Fonction de validation
  const validate = () => {
    let res = {};

    // Validation du nom
    if (nom === "") {
      res["nom"] = "Le nom est obligatoire !!!!";
    } else if (!/^[a-zA-Z]{2,}$/.test(nom)) {
      res["nom"] = "Le nom est invalide !!!!";
    }

    // Validation du prénom
    if (prenom === "") {
      res["prenom"] = "Le prénom est obligatoire !!!!";
    } else if (!/^[a-zA-Z]{2,}$/.test(prenom)) {
      res["prenom"] = "Le prénom est invalide !!!!";
    }

    // Validation du genre
    if (gender === "") {
      res["gender"] = "Le genre est obligatoire !!!!";
    }

    // Validation de la ville
    if (ville === "") {
      res["ville"] = "La ville est obligatoire !!!!";
    }

    // Validation de l'email
    if (email === "") {
      res["email"] = "L'email est obligatoire !!!!";
    } else if (!email.includes("@")) {
      res["email"] = "L'email est invalide !!!!";
    }

    return res;
  };

  // Soumission du formulaire
  const handelSubmit = (e) => {
    e.preventDefault();

    // On récupère les erreurs dans une variable
    const result = validate();

    // On met à jour l'état errors => re ender componenet
    setErrors(result);

    console.log(result);

    // On utilise result et non errors
    if (Object.keys(result).length === 0) {
      setDisplay(true);
    }
    else{
        setDisplay(false);
    }
  };

  return (
    <div className="container my-5 p-3 text-start">

      <form onSubmit={handelSubmit}>

        {/* Nom */}
        <div className="mb-3">
          <label htmlFor="nom">Nom</label>

          <input
            type="text"
            id="nom"
            name="nom"
            className="form-control"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />

          <span className="text-danger">
            {errors.nom}
          </span>
        </div>


        {/* Prenom */}
        <div className="mb-3">
          <label htmlFor="prenom">Prénom</label>

          <input
            type="text"
            id="prenom"
            name="prenom"
            className="form-control"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />

          <span className="text-danger">
            {errors.prenom}
          </span>
        </div>


        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email">Email</label>

          <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <span className="text-danger">
            {errors.email}
          </span>
        </div>


        {/* Gender */}
        <div className="mb-3">

          <label>Genre</label>
          <br />

          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />

          Male

          &nbsp;&nbsp;

          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />

          Female

          <br />

          <span className="text-danger">
            {errors.gender}
          </span>

        </div>


        {/* Ville */}
        <div className="mb-3">

          <label htmlFor="ville">Ville</label>

          <select
            id="ville"
            name="ville"
            value={ville}
            className="form-select"
            onChange={(e) => setVille(e.target.value)}
          >

            <option value="">
              Choisir une ville ...
            </option>

            {villes.map((v, pos) => (
              <option key={pos} value={v}>
                {v}
              </option>
            ))}

          </select>

          <span className="text-danger">
            {errors.ville}
          </span>

        </div>


        {/* Bouton */}
        <div className="mb-3">

          <button
            type="submit"
            className="btn btn-primary"
          >
            Envoyer
          </button>

        </div>

      </form>


      {/* Affichage des informations */}
      {display && (
        <div className="my-3 mx-5">

          <h4>Informations saisies :</h4>

          <ul>
            <li>Nom : {nom}</li>
            <li>Prénom : {prenom}</li>
            <li>Email : {email}</li>
            <li>Gender : {gender}</li>
            <li>Ville : {ville}</li>
          </ul>

        </div>
      )}

    </div>
  );
};

export default ValidationForm;
