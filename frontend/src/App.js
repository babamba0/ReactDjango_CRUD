import React, { Component } from 'react'
import './App.css'
import api from './api'

// PostView Import
import PostView from './Components/PostView'

export default class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
  title: '',
  content: '',
  // 모든 Post들을 저장할 results 배열.
results: [],
  }
  }

  // Posts 불러오기.
componentDidMount() {
  this.getPosts()
  }
  // getPosts()를 선언.
  async getPosts() {
  let _results = await api.getAllPosts()
  this.setState({ results: _results.data })
}

handleChange = evt => {
  this.setState({
  [evt.target.name]: evt.target.value,
  })
  }
  handleSubmit = async evt => {
  evt.preventDefault()
  await api.createPost({
  title: this.state.title,
  content: this.state.content,
  })
  this.setState({
  title: '',
  content: '',
  })
  this.getPosts()
  }
  // handleDelete 함수 추가.
  // 여기도 async, await
  handleDelete = async id => {
  await api.deletePost(id)
  this.getPosts()
  }



  render() {
    return (
    <div className="App">
    <div className="PostingSection">
    {/* 이전에 있던 내용을 지우라는 것이 아닌 코드가 길어져 생략한 것임. */}
    </div>
    <div className="ViewSection">
    {this.state.results.map(post => (
    <div>
    <PostView
    key={post.id}
    id={post.id}
    title={post.title}
    content={post.content}
    />
    {/* 삭제를 위한 button 추가 */}
    <button
    type="submit"
    onClick={event => this.handleDelete(post.id)}>
    삭제하기
    </button>
    </div>
    ))}
    </div>
    </div>
    )
  }
}




<div className="App">
<div className="PostingSection">
<form className="" onSubmit={this.handleSubmit}>
<input type="text" name="title"/>
<textarea name="content"></textarea>
<button type="submit">제출하기</button>
</form>
</div>
<div className="ViewSection"></div>
</div>

export default class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
  title: '',
  content: '',
  }
  }
  handleChange = evt => {
  this.setState({
  [evt.target.name]: evt.target.value,
  })
  }
  handleSubmit = evt => {
  evt.preventDefault()
  api.createPost({
  title: this.state.title,
  content: this.state.content,
  })
  }
  render() {
  return (
  <div className="App">
  <div className="PostingSection">
  <form className="" onSubmit={this.handleSubmit}>
  <input
  type="text"
  name="title"
  onChange={this.handleChange}
  value={this.state.title}
  />
  <textarea
  name="content"
  onChange={this.handleChange}
  value={this.state.content}></textarea>
  <button type="submit">제출하기</button>
  </form>
  </div>
  <div className="ViewSection"></div>
</div>
)
}
}





// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
