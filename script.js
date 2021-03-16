const testimonials = [
  {
    id: 1,
    image: './images/id-1.jpeg',
    name: 'Mike',
    job: 'web developer',
    testimoinal:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel saepe accusantium sapiente deleniti at magni, et laborum animi. Expedita quam accusantium voluptatibus neque aperiam sed, nesciunt ab, praesentium alias enim iure tempore pariatur quod est doloremque assumenda et hic?',
  },

  {
    id: 2,
    image: './images/id-2.jpeg',
    name: 'Sarah',
    job: 'software engeneer',
    testimoinal:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cum amet cupiditate asperiores molestiae quis illum, ducimus quas natus rerum recusandae eveniet, exercitationem omnis nihil nulla! Reprehenderit quam et dicta ducimus quaerat deserunt exercitationem odit aliquid. Quaerat, eveniet. Minus ullam eius corrupti placeat, ut nisi!',
  },

  {
    id: 3,
    image: './images/id-3.jpeg',
    name: 'Richard',
    job: 'web anylyst',
    testimoinal:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere numquam autem incidunt voluptatem praesentium explicabo culpa unde pariatur temporibus. Voluptates fuga doloremque cupiditate beatae harum dicta eum dignissimos! Nesciunt id neque quod unde asperiores laudantium natus iusto voluptatum assumenda rem, deleniti modi doloremque recusandae. Tempora accusamus animi ipsum a. Laborum.',
  },

  {
    id: 4,
    image: './images/id-4.jpeg',
    name: 'Emily',
    job: 'web developer',
    testimoinal:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum harum, voluptatibus suscipit repellat asperiores nobis sit qui, saepe accusamus, similique sunt perferendis explicabo iure labore molestias eligendi ducimus? Dignissimos perferendis itaque nemo dolorem et distinctio quam autem libero corporis voluptatum ut ipsam, modi aspernatur enim nulla. Facilis, neque molestiae qui tempora alias consequatur voluptatem error!',
  },

  {
    id: 5,
    image: './images/id-5.jpeg',
    name: 'Sam',
    job: 'project manager',
    testimoinal:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At id inventore explicabo ratione sunt eius tempora necessitatibus minima laudantium deleniti tempore fugiat error corrupti voluptatem, accusamus saepe nemo possimus nam dignissimos nihil, ullam commodi. Accusantium porro maiores nihil ipsa ratione et totam quibusdam praesentium molestias dolorum saepe, odit expedita inventore repudiandae? Nesciunt impedit architecto ratione vitae. Blanditiis labore sit voluptatibus.',
  },
];

const btn = document.querySelectorAll('.btn');
const container = document.querySelector('.card');

let counter = 0;
container.innerHTML = `
      <img src=${testimonials[counter].image} />
      <h2>${testimonials[counter].name.toUpperCase()}</h2>
        <h3>${testimonials[counter].job.toUpperCase()}</h3>
        <h3>${testimonials[counter].testimoinal}</h3>
        `;

let cardInformation = btn.forEach(function (button) {
  button.addEventListener('click', function () {
    if (button.classList.contains('right-btn')) {
      counter++;
      if (counter > 4) {
        counter = 0;
      }
    }
    if (button.classList.contains('left-btn')) {
      counter--;
      if (counter < 0) {
        counter = 4;
      }
    }
    container.innerHTML = `
      <img src=${testimonials[counter].image} />
      <h2>${testimonials[counter].name.toUpperCase()}</h2>
        <h3>${testimonials[counter].job.toUpperCase()}</h3>
        <h3>${testimonials[counter].testimoinal}</h3>
        `;
  });
});
