import React from 'react';
import Header from './Header';
import NewsList from './NewsList';
import data from './db.json';

class App extends React.Component {
  state = {
    filtered: []
  }

  word = (event) => {
    let keyWord = event.target.value;
    let filtered = data.filter(item =>{
      return item.title.indexOf(keyWord) > -1 || item.feed.indexOf(keyWord) > -1;
    });
    this.setState({
      filtered
   });
  }
  render(){
    const filtere = this.state.filtered;
  //   const notFound = [{
  //     "id": 16,
  //     "title": "404: Not Found",
  //     "feed": "The news you are looking for is not found, try other key-word"
  // }];
    return (
      <div className="App">
        <Header word={ this.word }/>
        <NewsList data={ filtere.length > 0 ? filtere : data }>
          Available news are listed below:
        </NewsList>
      </div>
    );
  }
 
}

export default App;
