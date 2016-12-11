import duxy from 'duxy';
import duxySuperagent from 'duxy-superagent';
import superagent from 'superagent';
import { canUseLocalStorage } from 'src/utils';

const http = duxySuperagent(superagent)((_foo, client) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';
  client.url = baseUrl + client.url;

  // NOTE(ayrton) enable CORS
  client.withCredentials();

  const token = canUseLocalStorage() ? localStorage.token : null;
  if (token) client.set('Authorization', 'Bearer ' + token);
});

export default duxy({ http }, ({ namespace, resource, resources }) => {
  resources('stories', { only: ['findAll', 'findOne', 'create'] }, () => {
    resources('comments', { only: ['create'] });
    resources('reactions', { only: ['create', 'delete'] });
  });

  namespace('my', () => {
    resource('users', { only: ['findOne', 'create'] });
  });

  resource('userToken', { path: 'user_token', only: ['create'] });
});
