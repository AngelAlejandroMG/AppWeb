import WelcomeBanner from "./WelcomeBanner"
import SensorStatus from "./SensorStatus"

function MainContent() {
      return (
        <>
         
      <WelcomeBanner user ={{ name: "Alice", age: 25, city: "Paris" }} />
      <WelcomeBanner user ={{ name: "Bob", age: 30, city: "Lyon" }} />
      

        </>
    )
}

export default MainContent