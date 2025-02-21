import './Listitem1.css'

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
            <div class="list-item">
                <img src={props.lien2} alt="Utilité" />
                <div>
                    <h3>{props.titre2}</h3>
                    <p>{props.paragraphe2}</p>
                </div>
            </div>
            <div class="list-item">
                <img src={props.lien3} alt="Technologie évolutive" />
                <div>
                    <h3>{props.titre3}</h3>
                    <p>{props.paragraphe3}</p>
                </div>
            </div>

        </>
    )
}

export default Listitem1