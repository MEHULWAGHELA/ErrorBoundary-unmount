import './App.css';
import ErrorBoundries from './components/ErrorBoundries';
import ChildComponent from './components/ChildComponent';

function App() {
  return (
    <div className="App">
      <ErrorBoundries>
        <ChildComponent name="mehul" />
      </ErrorBoundries>
      <ErrorBoundries>
        <ChildComponent name="pratik" />
      </ErrorBoundries>
      <ErrorBoundries>
        <ChildComponent name="sagar" />
      </ErrorBoundries>
    </div>
  );
}

export default App;
