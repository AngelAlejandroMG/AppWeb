import Listitem1 from './ListItem1'
import Listitem2 from './Listitem2'
import Listitem3 from './Listitem3'
import './main.css'

function MainContent() {
      return (
        <>
         <main>
          <h2>J'aime le développement web, et vous allez comprendre pourquoi à l'instant.</h2>
        <Listitem1/>
        <Listitem2/>
        <Listitem3/>
        </main>
        </>
    )
}

export default MainContent