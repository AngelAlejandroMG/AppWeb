import './Listitem1.css'

function Listitem3(props) {


    return (
        <>
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

export default Listitem3