// const price = [15, 10, 20, 22, 1, 9];
// const maxProfit = function (prices) {
//   let maxProfit = 0;
//   let lowestPrice = prices[1];

//   for (let i = 1; i < price.lenght; i++) {
//     min = Math.min(prices[i], min);
//     maxProfit = Math.max(maxProfit, prices[i] - min);
//   }
//   return maxProfit;
// };
// const check = maxProfit();
// console.log(check);

function best(prices){
  let minPrice=prices[0];
  let maxProfit=prices[1]-prices[0];

for(let i=1; i<prices.length; i++){
  let currentPrice=prices[i];
  let potentialProfit= currentPrice-minPrice;

  maxProfit=Math.max(maxProfit-potentialProfit);
  minPrice=Math.min(minPrice,currentPrice);
}
return maxProfit;

}
const check=best([2, 3, 10, 6, 4, 8, 1]);
console.log(check)

// function best(prices){
//   let maxProfit=0;
//   for (i=0; i<prices.lenght; i++){
//     for(j=0; j<prices.lenght;j++){
//       let early=Math.min(i,j);
//       let later=Math.max(i,j);

//       let earlyPrice=prices[early];
//       let laterPrice=prices[later];

//       let potentialProfit=laterPrice-earlyPrice;
      
//       maxProfit=Math.max(maxProfit-potentialProfit)

//     }
//   }
//   return maxProfit;
// }
// console.log(best([2, 3, 10, 6, 4, 8, 1]))