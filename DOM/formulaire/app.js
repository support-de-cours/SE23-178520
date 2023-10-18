// console.log( document.getElementById('birthday') );
// console.log( document.querySelector('#birthday') );
// console.log( document.querySelectorAll('#birthday') );
// console.log( document.querySelectorAll('label') );


// document.querySelector('type'); // <div> / <form> 
// document.querySelector('.maClasse'); // <div class"maClasse"> / <form class="maClasse"> 
// document.querySelector('#monId'); // <div id="monId"> / <form id="monId"> 
// document.querySelector('[name=firstname]'); // <div name="firstname"> / <form name="firstname"> 
// document.querySelector('[class]'); // <div class="xxxx"> / <form class="zzzz"> 

const MONTHS = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
];

// Generate Birthday options
(() => {

    const birthday_nodes = document.querySelectorAll('[name^=birthday]');
    const node_day       = birthday_nodes[0];
    const node_month     = birthday_nodes[1];
    const node_year      = birthday_nodes[2];

    const date     = new Date;
    const year     = date.getFullYear();
    const min_year = year - 100;

    // Generate list of days
    for (let i=1; i<=31; i++)
    {
        let option = document.createElement('option');
            option.textContent = i;
            option.value = i;
            // option.id = `node_${i}`;
            
            node_day.append(option);
    }

    // Generate list of month
    Array.from(MONTHS, (month, index) => {
        let option = document.createElement('option');
            option.textContent = month;
            option.value = (index+1);

        node_month.append(option);
    });

    // Generate list of years
    for (let i=year; i>=min_year; i--)
    {
        let option = document.createElement('option');
            option.textContent = i;
            option.value = i;

        node_year.append(option);
    }

})();


(() => {

    const form = document.querySelector('form');
          form.onsubmit = checkForm;
        //   form.addEventListener('submit', checkForm);

        //   form.addEventListener('submit', event => {

        //     // Annule l'action prévue par l'evenement
        //     event.preventDefault();

        //     console.log( event.target );
        //     console.log( form );
        //   })

    // console.log( form );

})();

function checkForm(event)
{

    // Initialisation du tableau d'erreurs
    // -> vide, on considère que le formulaire n'a pas d'erreur
    let errors = [];

    // Recupération du formulaire a l'origine de l'evenement qui declenche la fonction checkForm
    const form = event.target;
    // console.log( form );

    // Recupération des champs (elements) du formulaire
    const form_controls       = form.elements
    // console.log(form.elements);

    // Recupération de chaque champ (HTML Node) depuis la liste de "form_controls"
    const node_firstname      = form_controls.firstname;
    const node_lastname       = form_controls.lastname;
    const node_email          = form_controls.email;
    const node_password       = form_controls.password;
    const node_birthday_day   = form_controls['birthday[day]'];
    const node_birthday_month = form_controls['birthday[month]'];
    const node_birthday_year  = form_controls['birthday[year]'];

    // Recupération des valeurs des champs
    const firstname      = node_firstname.value;
    const lastname       = node_lastname.value;
    const email          = node_email.value;
    const password       = node_password.value;
    const birthday_day   = node_birthday_day.value;
    const birthday_month = node_birthday_month.value;
    const birthday_year  = node_birthday_year.value;
    const birthday       = `${birthday_year}-${birthday_month}-${birthday_day}`;


    // Nettoyage des messages d'erreur
    Array.from(form_controls, form_control => {

        // Supprime le message d'erreur
        const node = form_control;
        const parent = node.parentNode;
        const errNode = parent.querySelector('.invalid-feedback');

        errNode?.remove();
        // if (errNode)
        // {
        //     errNode.remove();
        // }

        // Supprime la class 'is-invalid'
        node.classList.remove('is-invalid');

        // console.log( node );
        // console.log( parent );
        // console.log( errNode );
    })






    // Controle du champ Firstname
    // - Obligatoire
    // - a-z
    // console.log( firstname.length == 0 );
    // console.log( firstname.length <= 0 );
    // console.log( firstname.length != null );
    // console.log( !firstname.length ); 

    // console.log(  /^[a-z\s-]+$/i.test( firstname )  );
    // const re = new RegExp('^[a-z\\s-]+$', 'i');
    // console.log(  re.test(firstname) );
    
    if (!firstname.length) // le champ est vide
    {
        errors.push({
            control: node_firstname,
            message: `Le champs Prenom est obligatoire`
        });
    }
    else if (!/^[a-z\s-]+$/i.test( firstname )) // controle du motif de chaine
    {
        errors.push({
            control: node_firstname,
            message: `Le prenom n'est pas valide`
        });
    }


    // Controle du champ lastname
    // - Obligatoire
    // - a-z
    if (!lastname.length)
    {
        errors.push({
            control: node_lastname,
            message: `Le champs Nom est obligatoire`
        });
    }
    else if (!/^[a-z\s-]+$/i.test( lastname ))
    {
        errors.push({
            control: node_lastname,
            message: `Le nom n'est pas valide`
        });
    }

    // Controle du champ Email

    // Controle du champ Password

    // Controle du champ Birthday



    // Verification du tableau d'erreur
    if (errors.length)
    {
        // Annule l'action prévue par l'evenement
        event.preventDefault();

        Array.from(errors, error => {

            const paragraph = document.createElement('p');
                  paragraph.textContent = error.message;
                  paragraph.classList.add('invalid-feedback');

            error.control.parentNode.append(paragraph);

            error.control.classList.add('is-invalid');
        })


        console.log('-----');
        // console.table(errors)

    }

}