import React, { Component } from 'react';
import StevePics from './images/Stevens';
import StevenList from './StevenList';
import StevenThumbnail from './StevenThumbnail';
import StevenGallery from './StevenGallery';
import {Link} from 'react-router-dom';
import qs from 'query-string';

class Images extends Component {

    constructor() {
        super();
        this.state = {
          stevens: StevePics,
        }
      }

    render() {

        const view = qs.parse(this.props.location.search).view;

        const { stevens } = this.state;
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
            </div>
        );
    }
}

export default Images;