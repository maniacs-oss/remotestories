import duxy from 'duxy';
import duxySuperagent from 'duxy-superagent';
import superagent from 'superagent';

const http = duxySuperagent(superagent)((_, client) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';
  client.url = baseUrl + client.url;
});

export default duxy({ http }, ({ resources }) => {
  resources('stories', { only: ['findAll', 'findOne', 'create'] }, () => {
    resources('comments', { only: ['create'] });
    resources('reactions', { only: ['create', 'delete'] });
  });
});
