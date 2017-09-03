import React, {Component} from 'react';

export default class Stevens extends Component {
    
    render() {
        const {stevens} = this.props;
        return (
            <ul>
                {stevens && stevens.map(steven => (
                    <li key={steven._id}>
                        <Steven steven={steven}/>
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
            <img src={steven.url}
                alt={steven.title}
                style={{
                    float: 'left',
                    width: 100
            }}/>
            <span><a href={steven.url}>{steven.title}</a></span>
        </div>
    );
}