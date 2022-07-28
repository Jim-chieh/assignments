function calculate(data) {
  let productList = data["product"]; //取出product陣列
  let priceList = []; //從product中取出price,加入新陣列
  let asnwer = 0; //設置總價格
  
  for (let i = 0; i < productList.length; i++) {
    priceList.push(productList[i]["price"]);
  }
  priceList.forEach((price) => {
    asnwer += price;
  });
  return (asnwer *= data.discount);
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
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});

console.log(discountedPrice);
