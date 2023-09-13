import PropTypes from "prop-types";

const Card = ({ data, handleAddToCart }) => {
  //   console.log(data);
  const { name, image, title, role, salary } = data;
  return (
    <div className="card border border-blue-700 border-opacity-80 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={`This is actors name ${name}`}
          className="rounded-full"
        />
      </figure>
      <div className="card-body items-center text-center text-white space-y-3">
        <h2 className="card-title">{name}</h2>
        <p>{title}</p>
        <div className="flex gap-3">
          <p>Salary: ${salary} </p>
          <p>{role}</p>
        </div>
        <div className="card-actions mt-3">
          <button
            onClick={() => handleAddToCart(data)}
            className="btn btn-primary"
          >
            Select Actors
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func,
};

export default Card;
