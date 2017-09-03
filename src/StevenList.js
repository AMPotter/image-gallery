import React, {Component} from 'react';

export default class Stevens extends Component {
    
    render() {
        const {stevens} = this.props;
        return (
            <ul>
                {stevens && stevens.map(steven => (
                    <li key={steven.title}>
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
            <span><a href={steven.url}>{steven.title}</a></span>
            <span>{steven.description}</span>
        </div>
    );
}