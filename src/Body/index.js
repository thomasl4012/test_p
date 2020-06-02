import * as S from "./styles.css"

import React from "react";

import NiceButton from "../Button/NiceButton";



function Body() {
  const [isSecondButtonLoading, setIsSecondButtonLoading] = React.useState(
    false
  );
  const [loadingSpeed] = React.useState(1);

  React.useEffect(() => {
    

    if (isSecondButtonLoading) {
      setTimeout(() => {
        setIsSecondButtonLoading(false);
      }, 10000 / loadingSpeed);
    }
  }, [isSecondButtonLoading, loadingSpeed]);

  


  return (
    <div className={S.container} >
      <h1>De la recherche de bien au crédit</h1>
      <p>Soyez prêt pour votre premier achat immobilier. Tous nos conseils sont réunis dans un ebook gratuit !</p>
      <form onSubmit={() => setIsSecondButtonLoading(true)} >
        <input
          
          type="email"
          placeholder="bruce@wayneentreprise.com"
          required
        />
             
             <NiceButton
          isLoading={isSecondButtonLoading}
        
          
        >
          TÉLÉCHARGER
        </NiceButton>
          
        
      </form>
    </div>
  );
}



export default Body;
