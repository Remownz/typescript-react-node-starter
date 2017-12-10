import * as React from 'react';
import { Hello } from './hello/Hello';

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <section className='app__container'>
                <Hello
                    header='the project2'
                    subHeader='is the one that you want'
                />
            </section>
        );
    }
}