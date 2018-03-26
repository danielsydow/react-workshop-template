import * as React from 'react';
import * as ReactDOM from 'react-dom';
import app as
interface Props {
    emojis: string[];
    }

function EmojiList(
  { emojis }: Props
): JSX.Element {
      return (
             <React.Fragment>
               {
                   emojis.map(
                       (emoji, index) =>
                           <Emoji
                               key={index}
                               shortname={emoji}
                           />
                   )
               }
         </React.Fragment>
       );
}

ReactDOM.render(<App />, document.getElementById('root'));