import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">

      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        < Testimonio
        nombre= 'Shawn Wang'
        pais= 'Singapur'
        imagen= 'shawn'
        cargo= 'Ingeniero de Software'
        empresa= 'Amazon'
        testimonio= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam orci, condimentum vitae est at, mollis facilisis lorem. Donec faucibus dui vitae erat malesuada, eget aliquet metus ornare. Curabitur laoreet nulla felis, vitae iaculis massa efficitur sit amet. Integer lorem nisi, mollis vel rhoncus vitae, facilisis nec nulla. Donec feugiat libero a ex sollicitudin tincidunt. In vehicula massa ac justo gravida mollis. Nunc in ligula at quam ornare facilisis. Ut aliquet arcu sed gravida tempus. Sed commodo risus non ante pretium, at varius nisi commodo.' /> 

        < Testimonio
        nombre= 'Sarah Chima'
        pais= 'Nigeria'
        imagen= 'sarah'
        cargo= 'Ingeniera de Software'
        empresa= 'ChatDesk'
        testimonio= { <span> <strong> Lorem ipsum dolor sit amet, </strong> consectetur adipiscing elit. Sed quam orci, condimentum vitae est at, mollis facilisis lorem. Donec faucibus dui vitae erat malesuada, eget aliquet metus ornare. Curabitur laoreet nulla felis, vitae iaculis massa efficitur sit amet. Integer lorem nisi, mollis vel rhoncus vitae, facilisis nec nulla. Donec feugiat libero a ex sollicitudin tincidunt. In vehicula massa ac justo gravida mollis. Nunc in ligula at quam ornare facilisis. Ut aliquet arcu sed gravida tempus. Sed commodo risus non ante pretium, at varius nisi commodo. </span> }  /> 

        < Testimonio
        nombre= 'Emma Bostian'
        pais= 'Suecia'
        imagen= 'emma'
        cargo= 'Ingeniera de Software'
        empresa= 'Spotify'
        testimonio= { <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam orci, condimentum vitae est at, mollis facilisis lorem. Donec faucibus dui vitae erat malesuada, eget aliquet metus ornare. Curabitur laoreet nulla felis, vitae iaculis massa efficitur sit amet. Integer lorem nisi, mollis vel rhoncus vitae, facilisis nec nulla. Donec feugiat libero a ex sollicitudin tincidunt. In vehicula massa ac justo gravida mollis. Nunc in ligula at quam ornare facilisis. <strong> Ut aliquet arcu sed gravida tempus. </strong> Sed commodo risus non ante pretium, at varius nisi commodo. </span> } /> 
      </div>

    </div>
  );
}

export default App;
