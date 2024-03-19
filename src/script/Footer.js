import { mobileIcon, emailIcon, locationIcon } from "../constant/constants.js";

const contactMethods = [
  {
    content: "Hotline: 0796 39 58 68 - 093 66 97 139",
    icon: mobileIcon
  },
  {
    content: "Email: acquyhoaphat5868q9@gmail.com",
    icon: emailIcon
  },
  {
    content: "Địa chỉ: 828 xa lộ Hà Nội, Phường. Hiệp Phú, TP. Thủ Đức, TP. HCM.",
    icon: locationIcon
  }
]

const renderCrontactMethod = (method) => {
  return `<div class="flex items-start mt-2">
  <span class="w-[2.5rem] h-[2rem] flex items-center">
    ${method.icon}
  </span>
  <p class="text-[20px] text-white pt-1">
    ${method.content}
  </p>
</div>`
}

const renderContactMethods = () => {
  let render = '';
  contactMethods.forEach(method => {
    render += renderCrontactMethod(method)
  })
  let contactsId = document.getElementById('contacts')
  contactsId.innerHTML = render
}

const categories = [
  'Bình ắc quy GS',
  'Bình ắc quy VARTA',
  'Bình ắc quy SEBANG',
  'Bình ắc quy AMARON',
  'Bình ắc quy DONGNAI',
]

const renderCategoryElement = (category) => {
  return `<p class="text-white text-[20px] mb-2">${category}</p>`
}

const renderCategories = () => {
  let render = '';
  categories.forEach(category => {
    render += renderCategoryElement(category)
  })
  let categoriesId = document.getElementById('categories')
  categoriesId.innerHTML = render
}

renderCategories();
renderContactMethods();