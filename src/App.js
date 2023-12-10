import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div >
      <ChatEngine
        height="100vh"
        projectID="71743bd7-1f1f-4a4f-9b81-73f9230f7a21"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} x={console.log(chatAppProps)} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;



