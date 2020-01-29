import 'dotenv/config';
import express from 'express';
import UserControllers from './app/controllers/UserControllers';
import BullBord from 'bull-board';
import Queue from './app/lib/Queue';


const app =express();
BullBord.setQueues(Queue.queues.map(queue => queue.bull));



app.use(express.json());
app.post('/users' , UserControllers.store );


app.use('/admin/queues ' , BullBord.UI);

app.listen(3333 , () =>{
  console.log('Esta tudo certo');
});


