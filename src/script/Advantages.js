const advantages = [
  {
    title: "CAM KẾT CHÍNH HÃNG",
    img: "/src/assets/images/genuine.ae38b4c3.png"
  },
  {
    title: "HỖ TRỢ MỌI LÚC",
    img: "/src/assets/images/support.55d5b76d.png"
  },
  {
    title: "TƯ VẤN MIỄN PHÍ",
    img: "/src/assets/images/free.95b59d71.png"
  },
  {
    title: "CHÍNH SÁCH ĐỔI TRẢ",
    img: "/src/assets/images/change.a2e701f2.png"
  }
]

const renderAdvantage = (advantage, index) => {
  const isLast = index === advantages.length - 1;
  return `<div class="flex px-3 ${isLast ? "" : "border-r-[2px]"} border-[#895609] h-[75%] items-center justify-center w-[25%]">
  <img class="mr-2" src="${advantage.img}" alt="">
  <p class="font-[500] text-[1.25rem] text-[#8a4d04]">${advantage.title}</p>
</div>`
}

const renderAdvantages = () => {
  let render = '';
  advantages.forEach((advantage, index) => {
    render += renderAdvantage(advantage, index);
  })
  let advantagesId = document.getElementById('advantages');
  advantagesId.innerHTML = render;
}

renderAdvantages();