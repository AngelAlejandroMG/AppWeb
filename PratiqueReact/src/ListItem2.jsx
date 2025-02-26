import './Listitem1.css'

function Listitem2(props) {


    return (
        <>
            <div class="list-item">
                <img src={props.lien2} alt="Utilité" />
                <div>
                    <h3>{props.titre2}</h3>
                    <p>{props.paragraphe2}</p>
                </div>
            </div>
        </>
    )
}

export default Listitem2