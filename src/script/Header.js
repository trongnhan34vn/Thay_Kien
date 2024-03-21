import { getCurrentUrl } from "../utils/utils.js";

// const basicUrl = "http://127.0.0.1:5500/src/pages";

const routers = [
  {
    title: "TRANG CHỦ",
    link: "/",
  },
  {
    title: "SẢN PHẨM",
    link: "/products.html",
  },
  {
    title: "DỊCH VỤ",
    link: "/services.html",
  },
  {
    title: "LIÊN HỆ",
    link: "/contact.html",
  },
]

const routerRender = (router) => {
  if (!router) return 'Error No Router'
  // let result = getCurrentUrl().substring()
  let active = router.link === getCurrentUrl();
  if (active) {
    return `<li
    class="page relative nav-item group cursor-pointer text-xl font-semibold text-[#895609] mx-0 m-0 duration-200 nav-normal">
    ${router.title}
  </li>`
  }
  return `<li
    class="page relative nav-item group cursor-pointer text-xl font-semibold text-white mx-0 m-0 duration-200 nav-normal">
    <a class="block" href=${router.link} >  ${router.title}</a>
    <div
      class="w-0 group-hover:w-[80%] h-[3px] absolute bottom-0 transform left-1/2 -translate-x-1/2 bg-white ease-in-out duration-150 -mb-1">
    </div>
  </li>`
}

const routersRender = () => {
  let render = '';
  routers.forEach(router => {
    render += routerRender(router);
  })
  const routersId = document.getElementById('routers');
  routersId.innerHTML = render;


}

routersRender();

const setFixedHeader = () => {
  window.onscroll = () => {
    let isFixedHeader = window.scrollY > 20;
    let headerId = document.getElementById('header');
    let containerId = document.getElementById('container');
    let containerClasslist = containerId.classList;
    let headerClasslist = headerId.classList;
    if (!isFixedHeader) {
      headerClasslist.replace('fixed', 'relative');
      containerClasslist.remove('pt-[7rem]');
      headerClasslist.remove('isSticky');
      // headerClasslist.add('isNotSticky');
      return;
    }
    headerClasslist.replace('relative', 'fixed');
    containerClasslist.add('pt-[7rem]')
    headerClasslist.add('isSticky')
    // headerClasslist.remove('isNotSticky')
  }
}

setFixedHeader();


