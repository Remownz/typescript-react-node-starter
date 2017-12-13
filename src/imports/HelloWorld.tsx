import * as React from 'react';

export interface HelloProps {
    header: string;
    subHeader: string;
}

export default class HelloWorld extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div className='hello'>
                <h1>{this.props.header}</h1>
                <h3>{this.props.subHeader}</h3>
            </div>
        );
    }
}
