import { useState } from "react";
import Card from "../card/Card";
import { useEffect } from "react";
import Cart from "../cart/Cart";

const Home = () => {
  const [loadData, setLoadData] = useState([]);
  const [selectActor, setSelectActor] = useState([]);
  const [count, setCount] = useState(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLoadData(data));
  }, []);

  const handleAddToCart = (actors) => {
    let salary = actors.salary;
    const isExist = selectActor.find((item) => item.id === actors.id);
    if (isExist) {
      return alert("This person already added");
    }
    selectActor.forEach((actor) => {
      salary = salary + actor.salary;
    });
    const rest = 40000 - salary;

    if (rest < 0) {
      return alert("Budget nai!!! Try again in next movie ");
    }
    setCount(salary);
    setRemaining(rest);
    setSelectActor([...selectActor, actors]);
  };

  return (
    <div className="flex gap-8">
      <div className="grid lg:grid-cols-3 gap-3 w-3/4 p-4">
        {loadData.map((data, idx) => (
          <Card key={idx} data={data} handleAddToCart={handleAddToCart}></Card>
        ))}
      </div>
      <div className="mt-5 ml-6">
        <h3 className="text-white text-3xl">
          Total Actor: {selectActor.length}
        </h3>
        <h3 className="text-white text-xl my-3">Total Cost: {count} </h3>
        <h3 className="text-white text-xl mb-5">Remaining: {remaining} </h3>
        {selectActor.map((actor, idx) => (
          <Cart key={idx} actor={actor}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Home;
