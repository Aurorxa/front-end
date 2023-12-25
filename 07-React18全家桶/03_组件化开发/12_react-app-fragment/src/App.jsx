import React from 'react'

class App extends React.PureComponent {
  
  state = {
    message: 'Hello React',
    movies: ['星际穿越', '大话西游', '梦幻西游', '诛仙'],
  }
  
  render() {
    return (
      <>
        <h2>电影列表</h2>
        <ul>
          {
            this.state.movies.map((movie,index) => (
              <li key={index}>{movie}</li>
            ))
          }
        </ul>
      </>
    )
  }
}

export default App