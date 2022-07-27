const sumSales = function (sales) {
  let sum = 0;
  for(sale of sales){
    sum +=sale
  }
  return sum
}

const calculateTax = function(sales, taxRate){  
  let result = sales * taxRate
  return result 
}

const calculateSalesTax = function(salesData, taxRates) {
  let result = {}
  console.log(Array.isArray(salesData))
  
  
  for (const data of salesData){
    let companyName = data.name
    let companySales = data.sales
    let companyProvince = data["province"]
    let totalCompanySales = sumSales(companySales)
    let companyTaxRate = taxRates[companyProvince]
    let companyTaxes = calculateTax(totalCompanySales, companyTaxRate )

    if (!result[companyName]){
      result[companyName] = {totalSales:0, totalTaxes:0}
      
    }  

    result[companyName].totalSales += totalCompanySales
    result[companyName].totalTaxes += companyTaxes
    
  }
  return result 

}



const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ] 
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ] 
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ] 
  }
];

console.log(calculateSalesTax(companySalesData, salesTaxRates))