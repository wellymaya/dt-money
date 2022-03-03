import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transition: Model,
  },
  
  seeds(server) {
    server.db.loadData({
      trasactions: [
      {
        id: 1,
        title: 'Feelance de Website',
        type: 'Deposit',
        category: 'Dev',
        amount: 400,
        created: new Date('2021-02-12 09:00:00'),
       },
      {
        id: 2,
        title: 'Aluguel',
        type: 'withdraw',
        category: 'Casa',
        amount: 400,
        created: new Date('2021-02-02 09:00:00'),
       },
      ]
    })
  },

  routes() {
    this.namespace = 'api';
  
    this.get('/transactions',
    () => {
      return this.schema.all('transaction') 
    })
    this.post('/transactions', (schema, request) => {
     const data = JSON.parse(request.requestBody) 
     return schema.create('transaction', data);

    })
},
})