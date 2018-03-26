import * as React from 'react';
import { Emoji } from './Emoji';
class App extends React.Component {
     render(): JSX.Element {
            return (
                   <div>
                     <Emoji shortName=":joy:" />
                     <Emoji shortName=":unicorn:" />
                   </div>
                 );
           }
     }
const element = <App />;