import './App.css';
import axios from "axios";
import {useEffect} from "react";




function App() {
  const callApi = async () => {
    axios.get('/api')
    .then((res) => {
      console.log(res.data.test)
    })
    .catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>여기는 루트입니다</div>

  );
}

export default App;