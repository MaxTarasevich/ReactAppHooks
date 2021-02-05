
import Header from './header/header';
import MyCard from './card/card'


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
   <MyCard/>
   </div>
  );
}

export default App;
