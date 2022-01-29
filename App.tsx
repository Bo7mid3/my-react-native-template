import Index from './src';
import { Provider } from 'react-redux';
import appStore from '@store';


export default function App() {
  return <Provider store={appStore}><Index /></Provider>
}
