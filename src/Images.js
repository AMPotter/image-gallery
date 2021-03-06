import React, { Component } from 'react';
import StevenList from './StevenList';
import StevenThumbnail from './StevenThumbnail';
import StevenGallery from './StevenGallery';
import {Link} from 'react-router-dom';
import qs from 'query-string';
import {post, getAll, remove} from './services';

const emptySteven = {title:'', description:'', url:''}

class Images extends Component {

    constructor() {
        super();
        this.state = {
          stevens: [],
          newSteven: emptySteven
        }
      }

    handleChange = e => {
        this.setState({
            newSteven: {
                ...this.state.newSteven,
                [e.target.name]: e.target.value
            }
        })
    }

    submitSteven = e => {
        e.preventDefault()
        post(this.state.newSteven)
        .then(res => {
            this.setState(state => {
                return {
                    stevens: [...state.stevens, res],
                    newSteven: emptySteven
                }
            })
        })
    }

    removeSteven = id => {
        remove(id)
            .then(deleted => {
                const stevens = this.state.stevens;
                this.state.stevens.forEach((steven, index) => {
                    if (steven._id === deleted._id) stevens.splice(index, 1)
                })
                this.setState({stevens})
            })
    }

    componentDidMount() {
        getAll()
            .then(stevens => {
                this.setState({
                    stevens
                })
            })
    }
    

    render() {

        const view = qs.parse(this.props.location.search).view;

        const { stevens, newSteven } = this.state;
        const { match } = this.props;
        const url = match.url;
        
        return (
            <div>
                {view === 'detail' && <StevenList stevens={stevens} onRemove={this.removeSteven}/> }
                {view === 'thumbnail' && <StevenThumbnail stevens={stevens} onRemove={this.removeSteven}/> }
                {view === 'gallery' && <StevenGallery stevens={stevens}/> }
                <nav>
                    <Link to={`${url}?view=detail`}>Detail</Link>
                    <Link to="/images?view=thumbnail">Thumbnail</Link>
                    <Link to="/images?view=gallery">Gallery</Link>
                </nav>
                <p className="App-intro">
                    Thank you for looking at my pictures of Steven.
                </p>
                <form onSubmit={this.submitSteven}>
                    <h2>Add Your Own Steve</h2>
                    <label>Name Steven</label>
                    <input type="text" name='title' onChange={this.handleChange} value={newSteven.title}/>
                    <label>Describe Steven</label>
                    <input type="text" name='description' onChange={this.handleChange} value={newSteven.description}/>
                    <label>Steven's URL</label>
                    <input type="text" name='url' onChange={this.handleChange} value={newSteven.url}/>
                    <button type="submit">Submit Your Stevn</button>
                </form>
            </div>
        );
    }
}

export default Images;