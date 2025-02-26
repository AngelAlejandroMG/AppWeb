import './Listitem1.css'
import './ListItem2.jsx'
import './ListItem3.jsx'

function Listitem1(props) {


    return (
        <>

            <div class="list-item">
                <img src={props.lien} alt="céativité" />
                <div>
                    <h3>{props.titre}</h3>
                    <p>{props.paragraphe}</p>
                </div>
            </div>
           

        </>
    )
}

export default Listitem1