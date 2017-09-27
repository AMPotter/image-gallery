import React, {Component} from 'react';

export default class Stevens extends Component {
    
    render() {
        const {stevens} = this.props;
        return (
            <div style={{width:'100%', clear:'both'}}>
                <ul>
                    {stevens && stevens.map(steven => (
                        <li style={{
                            display: 'inline-block',
                            width: '12%'
                        }} key={steven._id}>
                            <Steven steven={steven}/>
                            <button onClick={() => this.props.onRemove(steven._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export function Steven({steven}) {
    return (
        <div style={{
            padding: '10px',
            clear: 'both',
        }}>
            <img src={steven.url}
                alt={steven.title}
                style={{
                    display: 'block',
                    float: 'left',
                    width: 100
            }}/>
            <span><a href={steven.url}>{steven.title}</a></span>
        </div>
    );
}