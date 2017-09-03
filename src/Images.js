import React, { Component } from 'react';
// import StevePics from './images/Stevens';
import StevenList from './StevenList';
import StevenThumbnail from './StevenThumbnail';
import StevenGallery from './StevenGallery';
import {Link} from 'react-router-dom';
import qs from 'query-string';
import {post} from './services';

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

    render() {

        const view = qs.parse(this.props.location.search).view;

        const { stevens, newSteven } = this.state;
        const { match } = this.props;
        const url = match.url;
        
        return (
            <div>
                {view === 'detail' && <StevenList stevens={stevens}/> }
                {view === 'thumbnail' && <StevenThumbnail stevens={stevens}/> }
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