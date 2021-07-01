
const RecepieAdded = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('.title').value.trim();
    const ingredients = document.querySelector('.ingredints').value.trim();
    const instructions = document.querySelector('.instructions').value.trim();
    // const image = document.querySelector('.responsive-img').src;
    // const password = document.querySelector('#password-login').value.trim();
  
    console.log("Werstdrfghj");
    console.log(name);
    console.log(ingredients);
    console.log(instructions);
    // console.log(image);
    
      // Send a POST request to the API endpoint
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({name,ingredients,instructions}),
      headers: { 'Content-Type': 'application/json'},
    });
}
  
    //   if (response.ok) {
    //     // If successful, redirect the browser to the profile page
    //     document.location.replace('/profile');
    //   } else {
    //     alert(response.statusText);
    //   }
    
// };
  
//   const signupFormHandler = async (event) => {
//     event.preventDefault();
  
//     const name = document.querySelector('#name-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();
  
//     if (name && email && password) {
//       const response = await fetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify({ name, email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
  
  document
    .querySelector('#imageButton')
    .addEventListener('click', RecepieAdded);

  // document
  //   .querySelector('.submitEvent')
  //   .addEventListener('click', (event) =>{
  //     event.preventDefault();
  //     console.log('preventing default')
  //     fetch('upload',{method:'POST'}).then(r=>{console.log(r)})

  //   });
  
  
//   document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);
  