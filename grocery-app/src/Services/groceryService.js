import { GROCERY_ITEMS } from '../utils/constants';

export const generateGroceryListAPI = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const budget = parseFloat(formData.budget);
  const { people, days } = formData;
  
  let selectedItems = GROCERY_ITEMS[formData.diet.toLowerCase()] || GROCERY_ITEMS.default;
  
  // Adjust quantities based on people and days
  const multiplier = (people * days) / 14; // Base calculation for 2 people, 7 days
  selectedItems = selectedItems.map(item => ({
    ...item,
    price: Math.round(item.price * multiplier * 100) / 100
  }));
  
  // Sort by price and select items within budget
  selectedItems.sort((a, b) => a.price - b.price);
  let runningTotal = 0;
  const finalList = [];
  
  for (const item of selectedItems) {
    if (runningTotal + item.price <= budget) {
      finalList.push(item);
      runningTotal += item.price;
    }
  }
  
  // If budget allows, add some extras
  if (runningTotal < budget * 0.9) {
    const extras = [
      { name: 'Snack Mix', amount: '300g', price: 3.50 },
      { name: 'Fresh Herbs', amount: 'Mixed pack', price: 2.80 },
      { name: 'Cooking Oil', amount: '1L', price: 4.20 }
    ];
    
    for (const extra of extras) {
      if (runningTotal + extra.price <= budget) {
        finalList.push(extra);
        runningTotal += extra.price;
      }
    }
  }
  
  return {
    items: finalList,
    total: runningTotal
  };
};