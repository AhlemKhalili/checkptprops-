import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const style = { border: "solid 1px black", maxWidth: "100vw" };
  let bio
  let alrt = () => {
    alert("hello you are welcome in my page");
  }
  return (
    < div className="App">
        <Profile alrt={alrt} name="Ahlem Khalili "
        bio={bio}
        profession="Ingénieur en informatique industrielle "
         children ={<img src="https://wallpapercave.com/wp/wp5756323.jpg" /> }/>
        </div>
  );
}

export default App;
