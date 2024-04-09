const partners = [
  {
    img: '/src/assets/images/logo-amaron.04de7f48.png'
  },
  {
    img: '/src/assets/images/logo-amaron.04de7f48.png'
  },
  {
    img: '/src/assets/images/logo-amaron.04de7f48.png'
  },
  {
    img: '/src/assets/images/logo-amaron.04de7f48.png'
  },
  {
    img: '/src/assets/images/logo-amaron.04de7f48.png'
  },
  {
    img: '/src/assets/images/logo-amaron.04de7f48.png'
  },
  {
    img: '/src/assets/images/logo-amaron.04de7f48.png'
  },
  {
    img: '/src/assets/images/logo-amaron.04de7f48.png'
  },
  {
    img: '/src/assets/images/logo-amaron.04de7f48.png'
  },
]

// const renderPartner = (partner, index) => {
//   //   return `<li class="slider-item w-11/12 tablet:w-full">
//   //   <img class="w-full object-contain block border-[1px] border-[#895609]" src="${partner.img}" alt="">
//   // </li>`;
//   return `<div class="slide w-11/12 tablet:w-full">
// <img class="mx-10 object-contain block border-[1px] border-[#895609]" src="${partner.img}" height="100" width="250" alt="" />
// </div>`
// }

const renderPartners = () => {
  let render = "";
  let partnersId = document.getElementById('partners');
  partners.forEach((partner, index) => {
    render += renderPartner(partner, index);
  });
  partnersId.innerHTML = render;
}

renderPartners();

