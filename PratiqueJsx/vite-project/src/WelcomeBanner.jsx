function WelcomeBanner(props) {

    return (
      <>
      <p>
        Bienvenue sur notre site, {props.user.name} !
      </p>
        
      </>
    )
  }
  
  export default WelcomeBanner