import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <>
        <div onClick = {() => props.whenKegClicked(props.id)}>
          <p>{props.name} </p>
          <p>{props.brand} </p>
          <p>{props.price} </p>
          <p>{props.abv} </p>
          <p>quantity</p>
          <p>button</p>
        </div>

      {/* <tr>
          <td>{props.name} </td>
          <td>{props.brand} </td>
          <td>{props.price} </td>
          <td>{props.abv} </td>
          <td>quantity</td>
          <td>button</td>
      </tr> */}
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  whenKegClicked: PropTypes.func
};

export default Keg;