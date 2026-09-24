import { useState,useEffect } from "react";

const HandelForm = () => {
  const villes = ["Agadir", "Rabat", "Casablanca", "Safi"];

  const Listhobbies = ["lecture", "sport", "shopping"];

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    gender: "",
    ville: "",
    display: false,
    hobbies: []
  });

  const [errors, setErrors] = useState({});

  const handelChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({...prev,[name]: value}));
    //affiche l ancienne valeur de formData => setFormData est asynchrone
    console.log(formData);
  };
useEffect(() => {
  console.log(`formData : ${JSON.stringify(formData)}`);
}, [formData]);

  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    let newValue=checked?{...formData,hobbies:[...formData.hobbies,value]}:
                 {...formData,hobbies:formData.hobbies.filter(h=>h!==value)};
    setFormData(newValue);
     
  }


  const validate = () => {
    let res = {};

    // Validation du nom
    if (formData.nom.trim() === "") {
      res.nom = "Le nom est obligatoire !!!!";
    } else if (!/^[a-zA-Z]{2,}$/.test(formData.nom.trim())) {
      res.nom = "Le nom est invalide !!!!";
    }
    // Validation du prenom
    if (formData.prenom.trim() === "") {
      res.prenom = "Le prenom est obligatoire !!!!";
    } else if (!/^[a-zA-Z]{2,}$/.test(formData.prenom.trim())) {
      res.prenom = "Le prenom est invalide !!!!";
    }

    // Validation du genre
    if (formData.gender === "") {
      res.gender = "Le genre est obligatoire !!!!";
    }

    // Validation de la ville
    if (formData.ville === "") {
      res.ville = "La ville est obligatoire !!!!";
    }

    // Validation de l'email
    if (formData.email.trim() === "") {
      res.email = "L'email est obligatoire !!!!";
    } else if (!formData.email.includes("@")) {
      res.email = "L'email est invalide !!!!";
    }

    // Validation des hobbies
    if (formData.hobbies.length === 0) {
      res.hobbies = "Selectionner au moins un hobby";
    }

    return res;
  };

 
  const handelSubmit = (e) => {
    e.preventDefault();

    const result = validate();

    // Mise a jour des erreurs
    setErrors(result);

    // Si aucune erreur
    if (Object.keys(result).length === 0) {
      setFormData((prev) => ({
        ...prev,
        display: true
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        display: false
      }));
    }
  };


  return (
    <div className="container my-5 p-3 text-start">

      <form onSubmit={handelSubmit}>

        <div className="mb-3">
          <label htmlFor="nom">
            Nom
          </label>

          <input
            type="text"
            id="nom"
            name="nom"
            className="form-control"
            value={formData.nom}
            onChange={handelChange}
          />

          <span className="text-danger">
            {errors.nom}
          </span>

        </div>

        <div className="mb-3">
          <label htmlFor="prenom">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            className="form-control"
            value={formData.prenom}
            onChange={handelChange}
          />

          {errors.prenom && (
            <span className="text-danger">
              {errors.prenom}
            </span>
          )}

        </div>

        <div className="mb-3">
          <label htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handelChange}
          />

          <span className="text-danger">
            {errors.email}
          </span>

        </div>

        <div className="mb-3">
          <label>
            Genre
          </label>
          <div className="form-check mb-3">
            <input
              type="radio"
              name="gender"
              value="male"
              className="form-check-input"
              checked={formData.gender === "male"}
              onChange={handelChange}
            />
            <label className="form-check-label">
              Male
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              type="radio"
              name="gender"
              value="female"
              className="form-check-input"
              checked={formData.gender === "female"}
              onChange={handelChange}
            />

            <label className="form-check-label">
              Female
            </label>

          </div>

          <span className="text-danger">
            {errors.gender}
          </span>

        </div>

        <div className="mb-3">
          <label htmlFor="ville">
            Ville
          </label>
          <select
            id="ville"
            name="ville"
            value={formData.ville}
            className="form-select"
            onChange={handelChange}
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

        <div className="mb-3">
          <label className="form-label">
            Hobbies :
          </label>
          {Listhobbies.map((hobby, pos) => (

            <div
              className="form-check"
              key={pos}
            >

              <input
                type="checkbox"
                className="form-check-input"
                value={hobby}
                checked={formData.hobbies.includes(hobby)}
                onChange={handleHobbyChange}
              />

              <label className="form-check-label">
                {hobby}
              </label>

            </div>

          ))}

          <p className="text-danger">
            {errors.hobbies}
          </p>

        </div>

        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Envoyer
          </button>

        </div>

      </form>


      {formData.display && (

        <div className="my-3 mx-5">

          <h4>
            Informations saisies :
          </h4>

          <ul>

            <li>
              Nom : {formData.nom}
            </li>

            <li>
              Prénom : {formData.prenom}
            </li>

            <li>
              Email : {formData.email}
            </li>

            <li>
              Gender : {formData.gender}
            </li>

            <li>
              Ville : {formData.ville}
            </li>

            <li>
              Hobbies : {formData.hobbies.join(", ")}
            </li>

          </ul>

        </div>

      )}

    </div>
  );
};

export default HandelForm;


