import { useState } from 'react';
import { generateGroceryListAPI } from '../Services/groceryService.js';

export const useGroceryList = () => {
  const [formData, setFormData] = useState({
    budget: '',
    diet: '',
    allergies: '',
    people: 2,
    days: 7,
    mealsPerDay: 3
  });
  
  const [groceryList, setGroceryList] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [savedLists, setSavedLists] = useState([]);
  const [userStats, setUserStats] = useState({
    totalLists: 0,
    avgSpend: 0,
    totalSaved: 0
  });

  const generateGroceryList = async () => {
    setIsGenerating(true);
    try {
      const { items, total } = await generateGroceryListAPI(formData);
      setGroceryList(items);
      setTotalCost(total);
    } catch (error) {
      console.error('Error generating grocery list:', error);
    }
    setIsGenerating(false);
  };

  const saveList = () => {
    const newList = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      budget: formData.budget,
      diet: formData.diet,
      items: groceryList,
      total: totalCost,
      people: formData.people,
      days: formData.days
    };
    
    const updated = [...savedLists, newList];
    setSavedLists(updated);
    updateStats(updated);
  };

  const deleteList = (id) => {
    const updated = savedLists.filter(list => list.id !== id);
    setSavedLists(updated);
    updateStats(updated);
  };

  const reuseList = (list) => {
    setFormData({
      budget: list.budget,
      diet: list.diet,
      people: list.people,
      days: list.days,
      mealsPerDay: formData.mealsPerDay,
      allergies: formData.allergies
    });
    setGroceryList(list.items);
    setTotalCost(list.total);
  };

  const updateStats = (lists) => {
    if (lists.length > 0) {
      setUserStats({
        totalLists: lists.length,
        avgSpend: lists.reduce((sum, list) => sum + list.total, 0) / lists.length,
        totalSaved: lists.reduce((sum, list) => sum + (parseFloat(list.budget) - list.total), 0)
      });
    } else {
      setUserStats({ totalLists: 0, avgSpend: 0, totalSaved: 0 });
    }
  };

  return {
    formData,
    setFormData,
    groceryList,
    isGenerating,
    totalCost,
    savedLists,
    userStats,
    generateGroceryList,
    saveList,
    deleteList,
    reuseList
  };
};