![N|Solid](https://i.imgur.com/ouPNaeH.png)


![Build man](https://img.shields.io/badge/Library%20version-v1.0-green?style=for-the-badge&logo=appveyor) ![Build man](https://img.shields.io/github/last-commit/ThirashaPraween/React-Mug-Fetcher?style=for-the-badge) ![Build man](https://img.shields.io/badge/Developer-ThirashaPW-blueviolet?style=for-the-badge&logo=appveyor)


# React Mug Fetcher
React API fetch data without asynchronous or hooks

## Installation

###### NPM

```
npm i @thira/react-mugfetcher
```

###### YARN

```
yarn add @thira/react-mugfetcher
```

## Implement React Mug Fetcher

First import the library
```
import { useFetcher } from "@thira/react-mugfetcher";
```

##### Implement a simple fetch request
```
const { data, loading, error, length } = useFetcher("https://jsonplaceholder.typicode.com/comments?postId=1"); 
```

##### Simple example code
```
import { useFetcher } from "@thira/react-mugfetcher";

function App() {
  const { data, loading, error, length } = useFetcher("https://jsonplaceholder.typicode.com/comments?postId=1"); 

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
```

Thank you for using React Mug Fetcher!