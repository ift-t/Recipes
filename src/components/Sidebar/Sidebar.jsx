import PropTypes from 'prop-types';

const Sidebar = ({ recipes }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Want to cook: {recipes.length < 10 ? `0${recipes.length}` : recipes.length}</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{index + 1}. {recipe.name}</span>
            <span>{recipe.time} minutes</span>
            <span>{recipe.calories} calories</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
    recipes: PropTypes.object
}

export default Sidebar;
