
import React from 'react';


const divStyle = {
    color: 'blue',
    font: 'italic',
    fontsize: '40',

  };




function App2() {

    return( 
        //<div style={{ height: 30 }}>
        //<center>Hello World!</center>
        //</div>
        
        <div style={divStyle}>
            
            <p><centre>Utilizar estilos en el segundo componente</centre></p>
            
        </div> 
         

    );
}

export default App2;