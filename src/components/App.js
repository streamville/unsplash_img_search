import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };


  onSearchSubmit = async (term) => {
    
    // get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any>>
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    })
    this.setState({ images: response.data.results });
  }


  render(){
    return(

      <React.Fragment>
        <div class="ui container">
          <h1>Unsplash Image Search</h1>
        </div>
        <div class="ui container" style={{ marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} images.
          <ImageList images={this.state.images} />
      </div>
      </React.Fragment>
    )
  }
}

export default App;