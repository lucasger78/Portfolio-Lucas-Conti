// --------------------------------------------------------------
// FUNCIONA PERO NO REACOMODA 
// --------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     // Obtenemos los elementos necesarios
//     const portfolioItems = document.querySelectorAll('.portfolio-img');
//     const portfolioFilters = document.querySelectorAll('#portfolio-flters li');

//     // Agregamos un event listener a cada filtro
//     portfolioFilters.forEach(filter => {
//         filter.addEventListener('click', function () {
//             // Eliminamos la clase activa de todos los filtros
//             portfolioFilters.forEach(f => f.classList.remove('active'));

//             // Marcamos el filtro actual como activo
//             this.classList.add('active');

//             // Obtenemos la categoría del filtro
//             const category = this.getAttribute('data-filter');

//             // Aplicamos el efecto de transición suave
//             portfolioItems.forEach(item => {
//                 const categories = item.getAttribute('data-categories').split(' ');

//                 if (categories.includes(category) || category === 'Todo') {
//                     item.style.opacity = 1;
//                     item.style.transform = 'scale(1)';
//                 } else {
//                     item.style.opacity = 0;
//                     item.style.transform = 'scale(0)';
//                 }
//             });
//         });
//     });
// });



//FUNCIONA PERO ES MUY BRUSCO//


// document.addEventListener('DOMContentLoaded', function () {
//     const portfolioItems = document.querySelectorAll('.portfolio-img');
//     const portfolioFilters = document.querySelectorAll('#portfolio-flters li');

//     portfolioFilters.forEach(filter => {
//         filter.addEventListener('click', function () {
//             portfolioFilters.forEach(f => f.classList.remove('active'));
//             this.classList.add('active');

//             const category = this.getAttribute('data-filter');

//             portfolioItems.forEach(item => {
//                 const categories = item.getAttribute('class').split(' ');

//                 if (categories.includes(category) || category === 'all') {
//                     anime({
//                         targets: item,
//                         opacity: 1,
//                         scale: 1,
//                         duration: 600, // Ajusta la duración según sea necesario
//                         easing: 'easeInOutQuart' // Puedes ajustar el tipo de easing
//                     });
//                 } else {
//                     anime({
//                         targets: item,
//                         opacity: 0,
//                         scale: 0,
//                         duration: 600, // Ajusta la duración según sea necesario
//                         easing: 'easeInOutQuart', // Puedes ajustar el tipo de easing
//                         complete: () => {
//                             item.style.display = 'none';
//                         }
//                     });
//                 }
//             });

//             setTimeout(() => {
//                 portfolioItems.forEach(item => {
//                     const categories = item.getAttribute('class').split(' ');

//                     if (!categories.includes(category) && category !== 'all') {
//                         item.style.display = 'none';
//                     } else {
//                         item.style.display = 'block';
//                     }
//                 });
//             }, 600); // Ajusta el valor según la duración de tu animación
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.portfolio-img');
    const portfolioFilters = document.querySelectorAll('#portfolio-flters li');

    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            portfolioFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const categories = item.getAttribute('class').split(' ');

                if (categories.includes(category) || category === 'all') {
                    anime({
                        targets: item,
                        opacity: 1,
                        translateY: 0,
                        scale: 1,
                        duration: 600,
                        easing: 'easeInOutQuad'
                    });
                } else {
                    anime({
                        targets: item,
                        opacity: 0,
                        translateY: -20,
                        scale: 0.8,
                        duration: 600,
                        easing: 'easeInOutQuad',
                        complete: function () {
                            item.style.display = 'none';
                        }
                    });
                }
            });

            setTimeout(function () {
                portfolioItems.forEach(item => {
                    const categories = item.getAttribute('class').split(' ');

                    if (!categories.includes(category) && category !== 'all') {
                        item.style.display = 'none';
                    } else {
                        item.style.display = 'block';
                    }
                });
            }, 600);
        });
    });
});









