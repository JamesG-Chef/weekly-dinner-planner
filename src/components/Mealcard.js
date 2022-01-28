
const MealCard = (props) => {
    
  return (
      <p className="menu-item">
        {props.day}: {props.meal}
      </p>
  );
};

export default MealCard;
