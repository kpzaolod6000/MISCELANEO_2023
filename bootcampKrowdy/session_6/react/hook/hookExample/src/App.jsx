import { useEffect, useState, memo, useMemo } from "react";
import "./App.css";

const getTasks_ = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'titulo 1'
        }
      ]);
    }, 5000);
  });
};

const Hijo = () => {
  // const [counter, setcounter] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const main = async () => {
      try {
        const docs = await getTasks_();
        //console.log(docs);
        setTasks(docs);  
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
      
    };
    main();
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setcounter((prev) => prev + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  // useEffect(() => {
  //   console.log("counter: ", counter);
  // }, [counter]);

  // return <h1>Hijo_: {counter}</h1>

  if (loading) return <div>...loading</div>;
  // console.log(tasks);
  return (
    <div>
      {tasks.map((task) => {
        return <div key={task.id}>{task.title}</div>
      })}
    </div>
  );
};

// la variable counter no se vuelve a renderizar ya que es una variable primitiva
// mientras que la variable obj que es un objeto se renderiza debido al cambio de memoria
const Hijo2 = memo(({params_}) => {
  console.log("hola papi 2");
  console.log(params_);
  return <div>Hijo2</div>
})

function App() {
  const [state, setstate] = useState(false);

  const handleState = () => {
    setstate((prev) => !prev);
  };

  const counter = 10;
  //const obj = {};
  const obj = useMemo(() => {
    return {};
  },[]); // para evitar el renderizado se usa useMemo con un array de dependencia y como esta vacio solo se ejcuta una sola vez

  return (
    <div className="App">
      <button onClick={handleState}>toggle</button>
      {state && <Hijo />}
      <Hijo2 params_ = {counter}/>
      <Hijo2 params_ = {obj}/>
    </div>
  );
}

export default App;
