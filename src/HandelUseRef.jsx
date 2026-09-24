import { useRef,useState } from "react";

const HandelUseRef=()=> {

    const[errors,setErrors]=useState({});
    const[message,setMessage]=useState("");

    const[display,setDisplay]=useState(false);
  //inputs
  const nomRef = useRef(null);
  const prenomRef = useRef(null);
  const emailRef = useRef(null);
  //radios
  const genderMaleRef = useRef(null);
  const genderFemaleRef = useRef(null);
  //select
  const villeRef = useRef(null);
  // Checkboxes
  const hobbiesRefs = useRef([]);

  const villes = [
    "Casablanca",
    "Rabat",
    "Agadir",
    "Marrakech",
    "Tanger",
  ];

  const hobbiesListe = [
    "Lecture",
    "Voyage",
    "Sport",
  ];

 //onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    //Récupérer les valeurs des champs
    const nom = nomRef.current.value;
    const prenom = prenomRef.current.value;
    const email = emailRef.current.value;
    const ville = villeRef.current.value;
    //récupérer le Gender
    let gender = "";

    if (genderMaleRef.current.checked) {
      gender = genderMaleRef.current.value;
    }

    if (genderFemaleRef.current.checked) {
      gender = genderFemaleRef.current.value;
    }
    //récupérer les hobbies
    const data = hobbiesRefs.current.filter((ref) => ref.checked);
    const hobbies=data.map((ref) => ref.value);
    console.log(gender);
    //validation

    let res = {};

    // Validation du nom
    if (nom.trim() === "") {
      res.nom = "Le nom est obligatoire !!!!";
    } else if (!/^[a-zA-Z]{2,}$/.test(nom.trim())) {
      res.nom = "Le nom est invalide !!!!";
    }
    // Validation du prenom
    if (prenom.trim() === "") {
      res.prenom = "Le prenom est obligatoire !!!!";
    } else if (!/^[a-zA-Z]{2,}$/.test(prenom.trim())) {
      res.prenom = "Le prenom est invalide !!!!";
    }

    // Validation du genre
    if (gender === "") {
      res.gender = "Le genre est obligatoire !!!!";
    }

    // Validation de la ville
    if (ville === "") {
      res.ville = "La ville est obligatoire !!!!";
    }

    // Validation de l'email
    if (email.trim() === "") {
      res.email = "L'email est obligatoire !!!!";
    } else if (!email.includes("@")) {
      res.email = "L'email est invalide !!!!";
    }

    // Validation des hobbies
    if (hobbies.length === 0) {
      res.hobbies = "Selectionner au moins un hobby";
    }

    // Mise a jour des erreurs
    setErrors(res);
   //initialiser la variable message
    // Si aucune erreur
    if (Object.keys(res).length === 0) {
        setDisplay(true);
    }else{
        setDisplay(false);
    }

  };

  return (
    <div className="container mt-5">
      <h2>Formulaire avec useRef</h2>

      <form onSubmit={handleSubmit}>

        {/* nom */}
        <div className="mb-3">
          <label className="form-label">
            Nom
          </label>

          <input
            type="text"
            className="form-control"
            ref={nomRef}
          />
        </div>

        {/* prenom */}
        <div className="mb-3">
          <label className="form-label">
            Prénom
          </label>

          <input
            type="text"
            className="form-control"
            ref={prenomRef}
          />
        </div>

        {/* EMAIL */}
        <div className="mb-3">
          <label className="form-label">
            Email
          </label>

          <input
            type="email"
            className="form-control"
            ref={emailRef}
          />
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">
            Gender
          </label>

          <div className="form-check">
            <input
              type="radio"
              name="gender"
              value="Male"
              className="form-check-input"
              ref={genderMaleRef}
            />

            <label className="form-check-label">
              Homme
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="gender"
              value="Female"
              className="form-check-input"
              ref={genderFemaleRef}
            />

            <label className="form-check-label">
              Femme
            </label>
          </div>
        </div>

        {/* VILLE */}
        <div className="mb-3">
          <label className="form-label">
            Ville
          </label>

          <select
            className="form-select"
            ref={villeRef}
            defaultValue=""
          >
            <option value="">
              -- Choisir une ville --
            </option>

            {villes.map((ville) => (
              <option
                key={ville}
                value={ville}
              >
                {ville}
              </option>
            ))}
          </select>
        </div>

        {/* HOBBIES */}
        <div className="mb-3">
          <label className="form-label">
            Hobbies
          </label>

          {hobbiesListe.map((hobby, index) => (
            <div
              className="form-check"
              key={hobby}
            >
              <input
                type="checkbox"
                value={hobby}
                className="form-check-input"
                ref={(item)=>hobbiesRefs.current[index] = item}
              />

              <label className="form-check-label">
                {hobby}
              </label>
            </div>
          ))}
        </div>

        {/* BOUTON */}
        <button
          type="submit"
          className="btn btn-primary"
        >
          Envoyer
        </button>

      </form>
{/** */}
 {display && (
    <ul>
     <li>nom :{nomRef.current.value}</li>
       <li>prenom :{prenomRef.current.value}</li>
       <li>hobbis:{[...hobbiesRefs.current].filter(item=>item.checked).map(item=>item.value).join()}</li>


       </ul>
      )}

    </div>















  );
}

export default HandelUseRef;

