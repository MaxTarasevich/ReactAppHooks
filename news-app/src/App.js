
import Header from './header/header';
import Main from './main/main'


const styles = {
  maxWidth:'1280px',
  boxSizing:'border-box',
  padding:'0 20px',
  margin:'0 auto'
}

function App() {
  return (
    <div style={styles}>
   <Header/>
   <Main/>
   </div>
  );
}

export default App;
