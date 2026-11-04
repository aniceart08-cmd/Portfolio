 

/* 
  console.log(Recuperation)
  let image = document.querySelectorAll('.defiler-image')
  for(let i = 0; i <image.length; i++){
    console.log(image[i])
  } */ 

 
let Recuperation = document.querySelectorAll('.defiler')

function modification() {
  for (let i = 0; i < Recuperation.length; i++) {
    let image = Recuperation[i].querySelectorAll('.defiler-image')
    let courant = 0

    // 1. Trouver l'image active de ce conteneur
    for (let j = 0; j < image.length; j++) {
      if (image[j].classList.contains('active')) {
        courant = j
      }
    }

    // 2. Passer à la suivante, une seule fois
    image[courant].classList.remove('active')
    let suivant = (courant + 1) % image.length
    image[suivant].classList.add('active')
  }
}

setInterval(modification, 3000)

 
/* function modification (){
    for(i = 0; i < Recuperation.length; i++){
        let image = document.querySelectorAll('.defiler-image')
        let courant = 0

       for (let j = 0; j < image.length; j++) {
      if (image[j].classList.contains('active')) {
        courant = j
      }
    }
    }
}
 setInterval(modification, 3000); */





 

  /*  
 function nodification(){
    Reperation.forEach(Reperation => {
        console.log(Reperation)
    });
 }
console.log(nodification())
*/

 function calcule(a,b){
     return a*b
}
console.log(calcule(2,4))