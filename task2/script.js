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

const applyFilters = () => {
  const categoryFilter = document.getElementById("category").value;

  if (categoryFilter === "") return displayItems(data);

  console.log(categoryFilter);

  const filteredItems = data?.filter((item) => {
    return (
      item.category === categoryFilter ||
      (categoryFilter === "Available" && item.available)
    );
  });

  displayItems(filteredItems);
};

const displayItems = (items) => {
  const itemList = document.getElementById("List");
  itemList.innerHTML = "";

  items?.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.category} - ${item.price}`;
    itemList.appendChild(li);
  });
};

document.getElementById("filter").addEventListener("click", () => {
  applyFilters();
});

displayItems(data);
