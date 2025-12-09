import { useBrowser } from "../../Context/Browser-context"
import "./Home.css";



export const Home =()=>{
    const {name,browserDispatch} =  useBrowser();

    const handleformsubmit =(event)=>{
          event.preventDefault();
    }

    const handleNameChange =(event)=>{
        if(event.key === "Enter" && event.target.value.length > 0){
            browserDispatch({
                type:"NAME",
                payload:event.target.value,
            })
            localStorage.setItem("name",event.target.value);
        }
    }
    return (
        <div className="home-container d-flex direction-column align-center gap-lg">
            <h1 className="main-heading">Browser Extension</h1>
            <div className="user-details d-flex direction-column gap">
                <span className="heading-1">Hello, What's your Name ?</span>
                <form onSubmit={handleformsubmit}>
                    <input  className="input" onKeyUp={handleNameChange}/>
                </form>
            </div>
        </div>

    )
}