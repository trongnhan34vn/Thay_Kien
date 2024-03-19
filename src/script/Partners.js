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
]

const renderPartner = (partner) => {
  return `<li class="slider-item w-[375px]">
  <img class="w-full object-contain border-[1px] border-[#895609]" src="${partner.img}" alt="">
</li>`;
}

const renderPartners = () => {
  let render = "";
  let partnersId = document.getElementById('partners');
  partners.forEach(partner => {
    render += renderPartner(partner);
  });
  partnersId.innerHTML = render;
}

renderPartners();

