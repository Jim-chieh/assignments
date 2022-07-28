function calculate(data) {
  let productList;
  let priceList = [];
  let discount;
  let asnwer = 0;
  for (let i in data) {
    productList = data["product"];
    discount = data["discount"];
  }
  for (let i = 0; i < productList.length; i++) {
    priceList.push(productList[i]["price"]);
  }
  priceList.forEach((price) => {
    asnwer += price;
  });
  return (asnwer *= 1 - discount);
}

const discountedPrice = calculate({
  discount: 0.1,
  product: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 600,
    },
    {
      name: "Product 3",
      price: 300,
    },
  ],
});

console.log("Assignment3, Discounted Price: ", discountedPrice);
