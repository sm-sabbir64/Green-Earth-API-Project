//Categories section start here
const categoryContainer = document.getElementById("categoriesContainer");

const showCategory = (categories) => {
  categories.forEach((cat) => {
    // console.log(cat.category_name);
    categoryContainer.innerHTML += `
            <li id="${cat.id}" class="text-[16px] font-medium p-2 rounded hover:bg-green-700 cursor-pointer">${cat.category_name}</li>
            `;
  });
  categoryContainer.addEventListener("click", (e) => {
    const allLi = document.querySelectorAll('li');
    allLi.forEach(li =>{
        li.classList.remove("bg-green-700", "text-white")
    })
    // console.log(e);
    if (e.target.localName === "li") {
      console.log(e.target)
      e.target.classList.add("bg-green-700", "text-white")
    }
  });
};
const loadTreeCategory = () => {
  fetch(`https://openapi.programming-hero.com/api/categories`)
    .then((res) => res.json())
    .then((data) => {
    //   console.log(data.categories);
      const categories = data.categories;
      showCategory(categories);
    })
    .catch((err) => {
      console.log(err);
    });
};
loadTreeCategory();
