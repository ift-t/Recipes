import PropTypes from 'prop-types';


const Card = ({recipe, onAddToCook}) => {
    return (
        <div className="border p-4 rounded-lg shadow-lg">
        <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover rounded-t-lg" />
        <h2 className="text-xl font-bold mt-4">{recipe.name}</h2>
        <p className="text-gray-600 mt-2">{recipe.description}</p>
        <h3 className="font-semibold mt-4">Ingredients: {recipe.ingredients.length}</h3>
        <ul className="list-disc ml-5 mt-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-4">
          <span className="flex items-center">
            <i className="far fa-clock mr-1"></i> {recipe.time}
          </span>
          <span className="flex items-center">
            <i className="fas fa-fire-alt mr-1"></i> {recipe.calories} calories
          </span>
        </div>
        <button
          onClick={() => onAddToCook(recipe)}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >
          Want to Cook
        </button>
      </div>
    );
};

Card.propTypes = {
    recipe: PropTypes.object,
    onAddToCook: PropTypes.func

}

export default Card;