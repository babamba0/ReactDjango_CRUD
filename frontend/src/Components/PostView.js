import React, { Component } from 'react'
import './App.css'
import api from './api'
import PostView from './Components/PostView'
// dummy_prop를 주석처리하거나 제거
// const dummy_prop = {
// title: '테스트용 제목',
// content: '테스트용 내용',
export default class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
    title: '',
    content: '',
    results: [],
    }
    }
    componentDidMount() {
    this.getPosts()
    }
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
    // async, await을 추가해야 정상 작동.
    evt.preventDefault()
    await api.createPost({
    title: this.state.title,
    content: this.state.content,
    })
    // Submit 후에 input과 textarea를 비우고,
    this.setState({
    title: '',
    content: '',
    })
    // Post를 새로 불러와 PostSection 업데이트
    this.getPosts()
    }
    render() {
        return (
        <div className="App">
        <div className="PostingSection">
        </div>
        <div className="ViewSection">
        </div>
        </div>
        )
        }
        }