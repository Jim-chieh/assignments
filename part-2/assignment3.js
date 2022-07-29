// function calculate(data) {
//   const productList = data.product; //取出product陣列
//   const priceList = []; //從product中取出price,加入新陣列
//   let answer = 0; //設置總價格

//   for (let i = 0; i < productList.length; i++) {
//     priceList.push(productList[i]["price"]);
//   }
//   priceList.forEach((price) => {
//     answer += price;
//   });
//   return answer *= data.discount;
// }

function calculate(data) {
  const product = data.product;
  const discounted = product.reduce((priceTotal, currentProduct) => {
    priceTotal += currentProduct.price * data.discount;
    return priceTotal;
  }, 0);
  return discounted;
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
