import PropTypes from "prop-types";
const Cart = ({ actor }) => {
  const { name } = actor;
  return (
    <div className="mt-3">
      <ul className="text-3xl text-white text-center list-disc">
        <li>{name}</li>
      </ul>
    </div>
  );
};

Cart.propTypes = {
  actor: PropTypes.string,
};

export default Cart;
