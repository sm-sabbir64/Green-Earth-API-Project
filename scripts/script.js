const categoryContainer = document.getElementById("categoriesContainer");
const treesByContainer = document.getElementById("treesByCategories");
const allTrees = document.getElementById("allTrees");

const showCategory = (categories) => {
  categories.forEach((cat) => {
    // console.log(cat.category_name);
    categoryContainer.innerHTML += `
            <li id="${cat.id}" class="text-[16px] font-medium p-2 rounded hover:bg-green-700 cursor-pointer">${cat.category_name}</li>
            `;
  });
  categoryContainer.addEventListener("click", (e) => {
    const allLi = document.querySelectorAll("li");
    allLi.forEach((li) => {
      li.classList.remove("bg-green-700", "text-white");
    });
    // console.log(e);
    if (e.target.localName === "li") {
      //   console.log(e.target.id)
      e.target.classList.add("bg-green-700", "text-white");
      loadTreesByCategory(e.target.id);
    }
  });
};
// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500

const showTreesByCategory = (plants) => {
  // console.log(plants);
  
  treesByContainer.innerHTML = "";
  plants?.forEach((plant) => {
    treesByContainer.innerHTML += `
        <div class="bg-white shadow rounded-lg p-3">
             <img class="h-[186px] w-[311px] rounded-md" src="${plant.image}" alt="">
              <h1 class="text-[16px] font-semibold mt-1">${plant.name}</h1>
              <p class="text-[12px]">${plant.description}</p>
              <!-- Free products & price start here -->
          <div class="mt-2 flex justify-between">
              <p class="bg-green-200 px-5 py-1 font-semibold rounded-xl text-[14px] text-green-700">${plant.category}</p>
              <span class="font-bold">$${plant.price}</span>
          </div>
              <button class="btn btn-wide bg-green-700 text-white rounded-3xl mt-2">Add to Cart</button>
       </div>

        `;
  });
};

const loadAllCategory = () => {
  fetch(`https://openapi.programming-hero.com/api/plants`)
    .then((res) => res.json())
    .then((data) => {
      showTreesByCategory(data.plants);
    });
};

const loadTreesByCategory = (treesId) => {
  // console.log(treesId);
  fetch(`https://openapi.programming-hero.com/api/category/${treesId}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.plants);
      showTreesByCategory(data.plants);
    });
};

const loadCategory = () => {
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

loadCategory();
// loadTreesByCategory();
loadAllCategory();
