import React, {Component} from 'react';

export default class Stevens extends Component {
    
    render() {
        const {stevens} = this.props;
        return (
            <ul>
                {stevens && stevens.map(steven => (
                    <li key={steven._id}>
                        <Steven steven={steven}/>
                        <button onClick={() => this.props.onRemove(steven._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        );
    }
}

export function Steven({steven}) {
    return (
        <div style={{
            padding: '10px',
            clear: 'both'
        }}>
            <span><a href={steven.url}>{steven.title}</a></span>
            <span>{steven.description}</span>
        </div>
    );
}