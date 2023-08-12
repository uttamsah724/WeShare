import { useState } from "react";

const App = () => {
  const item = [1, 1, 1, 1, 1, 1, 1, 1];
  const [data, setdata] = useState(second)
  return (
    <div className="flex">
      <div className="grid grid-cols-4 gap-4">
      {item.map((item, index) => (
        <div key={index} className="max-w-sm border rounded-t-xl border-black bg-cyan-300">
          <img
            className="rounded-tl-xl rounded-tr-xl"
            src="https://images.unsplash.com/photo-1689457362806-af3a973a3c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="px-5 py-3">
            <h1 className="text-2xl font-bold">Movie Name</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad odio natus ipsum commodi consectetur
              neque animi amet nesciunt recusandae autem error quo placeat ratione alias aliquid vitae sit,
              perferendis veritatis.
            </p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default App;
