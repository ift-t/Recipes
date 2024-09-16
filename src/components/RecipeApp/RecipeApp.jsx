import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);

  useEffect(() => {
    fetch('./../../../public/recipes.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipe data:', error));
  }, []);

  const handleAddToCook = (recipe) => {
    if (wantToCook.find((r) => r.name === recipe.name)) {
      toast.error(`${recipe.name} is already added to the list!`);
    } else {
      setWantToCook([...wantToCook, recipe]);
    }
  };

  return (
    <div className="flex">
      <div className="w-2/3 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recipes.map((recipe, index) => (
            <Card key={index} recipe={recipe} onAddToCook={handleAddToCook} />
          ))}
        </div>
      </div>
      <div className="w-1/3 p-4">
        <Sidebar recipes={wantToCook} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipeApp;
