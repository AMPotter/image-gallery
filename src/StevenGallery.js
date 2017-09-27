import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Stevens extends Component {

    state = {
        index: 0
    };

    static propTypes = {
        stevens: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })).isRequired
    };

    changeImage = value => {
        this.setState((state) => {
            if (state.index === 0 && value === -1) return {index: this.props.stevens.length-1}
            return {index: (state.index + value)%this.props.stevens.length}
        })
    }
    
    render() {
        const {stevens} = this.props;
        return (
            <div>
                {this.props.stevens.length && <Steven steven={stevens[this.state.index]}/>}
                <button onClick={() => this.changeImage(-1)}>Prev</button>
                <button onClick={() => this.changeImage(1)}>Next</button>
            </div>
        );
    }
}

export function Steven({steven}) {
    return (
        <div style={{
            padding: '10px',
            clear: 'both'
        }}>
            <img src={steven.url}
                alt={steven.title}
            />
            <br/>
            <span><a href={steven.url}>{steven.title}</a></span>
            <br/>
            <span>{steven.description}</span>
        </div>
    );
}