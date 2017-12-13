import * as React from 'react';
import HelloWorld  from './HelloWorld';

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <section>
                <HelloWorld
                    header='Hello World,'
                    subHeader='we start Typescript!'
                />
            </section>
        );
    }
}
