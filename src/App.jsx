import "./App.scss";
import Gifts from "./components/Gifts/Gifts";
import Header from "./components/Header/Header";
import Invitation from "./components/Invitation/Invitation";
import Location from "./components/Location/Location";


function App({data}) {
    console.log(data);

    return (
        <>
            <Header/>
            <Invitation />
            <Gifts data={data}/>
            <Location />
        </>
    );
}

export default App;
