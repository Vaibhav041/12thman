//sample data
const data = [
  {
    name: "Product 1",
    category: "Electronics",
    price: 799.99,
    available: true,
  },
  {
    name: "Product 2",
    category: "Books",
    price: 19.99,
    available: true,
  },
  {
    name: "Product 3",
    category: "Home & Kitchen",
    price: 49.99,
    available: false,
  },
  {
    name: "Product 4",
    category: "Toys & Games",
    price: 29.99,
    available: true,
  },
  {
    name: "Product 5",
    category: "Electronics",
    price: 599.99,
    available: true,
  },
  {
    name: "Product 6",
    category: "Books",
    price: 9.99,
    available: true,
  },
];

//function to apply filters
const applyFilters = () => {
  const categoryFilter = document.getElementById("category").value; // get value of filter

  if (categoryFilter === "") return displayItems(data); //if to show all items return from here

  // filter logic
  const filteredItems = data?.filter((item) => {
    return (
      item.category === categoryFilter ||
      (categoryFilter === "Available" && item.available)
    );
  });

  displayItems(filteredItems);
};

//function to display the data, gets the data in params
const displayItems = (items) => {
  const itemList = document.getElementById("List");
  itemList.innerHTML = "";

  items?.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.category} - ${item.price}`;
    itemList.appendChild(li);
  });
};

// apply filter on button click
document.getElementById("filter").addEventListener("click", () => {
  applyFilters();
});

// apply filter on enter
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    applyFilters();
  }
});

displayItems(data);
