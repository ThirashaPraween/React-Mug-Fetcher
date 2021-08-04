import { useFetcher } from "./hooks/index";
function App() {
  const { data, loading, error, length } = useFetcher("https://jsonplaceholder.typicode.com/comments?postId=1"); 

  console.log(data, loading, error, length);

  if(loading){
    return <p> Loading... </p>
  }

  return (
    <div className="App">
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>Total items = {length}</p>
    </div>
  );
}

export default App;
