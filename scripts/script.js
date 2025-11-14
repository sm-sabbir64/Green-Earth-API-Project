const categoryContainer = document.getElementById("categoriesContainer");
const treesByContainer = document.getElementById("treesByCategories");

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
const showTreesByCategory = (plants) => {
  console.log(plants);
    plants.forEach(plant => {
        treesByContainer.innerHTML += `
        <div class="border border-orange-500 p-4">
                        <img class="" src="${plant.image}" alt="">
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
    })

  
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

const loadTreesByCategory = (treesId) => {
  // console.log(treesId);
  fetch(`https://openapi.programming-hero.com/api/category/${treesId}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.plants);
      showTreesByCategory(data.plants);
    });
};

loadCategory();
loadTreesByCategory();
