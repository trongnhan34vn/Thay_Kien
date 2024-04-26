import { routes } from "../constant/constants.js";

function generateMenuMobileItem() {
  let mbMenuList = document.getElementById("mb-menu-list");
  let render = "";
  routes.forEach((item) => {
    render += `<a href="${item.link}" class="block w-full h-full p-4">
    ${item.title}
  </a>`
  })
  mbMenuList.innerHTML = render;
}

generateMenuMobileItem()

