import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Post from '../components/Post';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));


const post = {
    author: "Mr Jone1111s",
    created: 60000,
    json_metadata: `{"id": "64307415",
    "permlink": "grupos-de-relacionamentos-ou-tribos-todos-fazemos-parte-de-um-ou",
    "category": "busy",
    "parent_author": "",
    "image": ["https://imgp.golos.io/256x128/https://images.golos.io/DQmbHf5dhizdp8DGpxkysLEC5NhURBHjL2vPjPMKcpumnTR/Eccles_lab.jpg"],
    "parent_permlink": "busy",
    "body": "bla"
    }`,
    title: "Grupos de relacionamentos ou tribos. Todos fazemos parte de um ou...",
};
storiesOf('Post', module).add('Post', () => <Post post={post}/>);