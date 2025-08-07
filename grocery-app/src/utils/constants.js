export const GROCERY_ITEMS = {
    vegetarian: [
      { name: 'Brown Rice', amount: '2kg', price: 3.50 },
      { name: 'Lentils', amount: '1kg', price: 2.80 },
      { name: 'Spinach', amount: '500g', price: 2.00 },
      { name: 'Tomatoes', amount: '1kg', price: 3.20 },
      { name: 'Carrots', amount: '1kg', price: 1.50 },
      { name: 'Onions', amount: '1kg', price: 1.20 },
      { name: 'Eggs', amount: '12 pack', price: 3.00 },
      { name: 'Cheese', amount: '400g', price: 4.50 },
      { name: 'Bread', amount: '800g loaf', price: 2.20 },
      { name: 'Bananas', amount: '1kg', price: 1.80 }
    ],
    'high-protein': [
      { name: 'Chicken Breast', amount: '1.5kg', price: 8.50 },
      { name: 'Salmon Fillets', amount: '600g', price: 12.00 },
      { name: 'Greek Yogurt', amount: '1kg', price: 4.00 },
      { name: 'Eggs', amount: '18 pack', price: 4.20 },
      { name: 'Tuna Cans', amount: '6 pack', price: 8.00 },
      { name: 'Quinoa', amount: '500g', price: 4.50 },
      { name: 'Almonds', amount: '200g', price: 3.80 },
      { name: 'Cottage Cheese', amount: '500g', price: 3.50 },
      { name: 'Sweet Potatoes', amount: '1kg', price: 2.20 },
      { name: 'Broccoli', amount: '500g', price: 2.50 }
    ],
    'low-carb': [
      { name: 'Chicken Thighs', amount: '1kg', price: 6.50 },
      { name: 'Beef Mince', amount: '750g', price: 8.00 },
      { name: 'Avocados', amount: '6 pieces', price: 6.00 },
      { name: 'Cauliflower', amount: '1 head', price: 2.80 },
      { name: 'Zucchini', amount: '1kg', price: 3.00 },
      { name: 'Bell Peppers', amount: '1kg', price: 4.20 },
      { name: 'Olive Oil', amount: '500ml', price: 5.50 },
      { name: 'Cheese', amount: '600g', price: 7.00 },
      { name: 'Eggs', amount: '12 pack', price: 3.00 },
      { name: 'Spinach', amount: '300g', price: 1.80 }
    ],
    default: [
      { name: 'Chicken Breast', amount: '1kg', price: 6.00 },
      { name: 'Ground Beef', amount: '500g', price: 5.50 },
      { name: 'Rice', amount: '2kg', price: 3.00 },
      { name: 'Pasta', amount: '1kg', price: 2.20 },
      { name: 'Potatoes', amount: '2kg', price: 2.80 },
      { name: 'Mixed Vegetables', amount: '1kg frozen', price: 3.50 },
      { name: 'Milk', amount: '2L', price: 2.40 },
      { name: 'Bread', amount: '800g loaf', price: 2.20 },
      { name: 'Eggs', amount: '12 pack', price: 3.00 },
      { name: 'Apples', amount: '1kg', price: 2.50 }
    ]
  };
  
  export const DIET_OPTIONS = [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'high-protein', label: 'High Protein' },
    { value: 'low-carb', label: 'Low Carb' },
    { value: 'default', label: 'No Preference' }
  ];