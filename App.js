import React from 'react'
import MoviesCard from './Movie/MoviesCard'
export default class App extends Component {
  constructor(){
    super();
    this.state ={
      title:'react movie Card'
    };
  }
  render(){
    return(
      
      <div className='mt-5'
      <MoviesCard />
      </div>
      </div>
    )
  }
}

export default App;
