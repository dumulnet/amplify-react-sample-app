import { Header } from 'semantic-ui-react';

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ isPassedToWithAuthenticator, signOut, user }) {
        return (
            <div>
              	<Header as='h1'>Hello {user.username}</Header>
      		<button onClick={signOut}>Sign out</button>
            </div>
        );
    }

export default withAuthenticator(App, {includeGreetings: true});

