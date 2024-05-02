export const filteredProducts = (filter, products, allProducts) => {
  if (!filter) {
    return products;
  }
  if (filter.filterByCategory === 'All') {
    return products;
  }

  let filteredAndSorted = allProducts.filter(({ name, category }) => {
    const filteredByCategory = filter.filterByCategory ? filter.filterByCategory === category : category;
    const handleSearch = filter.searchValue ? name.toLowerCase().includes(filter.searchValue.toLowerCase()) : name;

    return filteredByCategory && handleSearch;
  });

  if (filter.sortByPrice === 'Price Low to High') {
    filteredAndSorted = sortProductsByAsc(filteredAndSorted.length>10 ? products : filteredAndSorted);
  } else if (filter.sortByPrice === 'Price High to Low') {
    filteredAndSorted = sortProductsByDesc(filteredAndSorted.length>10 ? products : filteredAndSorted);
  }
    return filteredAndSorted;
};

const sortProductsByAsc = products => {
  return products.slice().sort((a, b) => a.price - b.price);
};
const sortProductsByDesc = products => {
  return products.slice().sort((a, b) => b.price - a.price);
};

