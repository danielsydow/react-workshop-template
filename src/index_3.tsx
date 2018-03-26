import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shortnameToUnicode } from 'emojione';

interface Props {
    shortName: string;
}
class Emoji extends React.Component<Props> {
    render(): JSX.Element {
        const { shortName } = this.props;
        return (
        <span>{shortnameToUnicode(shortName)}</span>
        );
    }
}
const element = <Emoji shortName=":joy:"/>;
ReactDOM.render(element, document.getElementById('root'));