import { Container } from './styles';
import { OrdersBoard } from '../OrdersBoards';
import { Order } from '../../types/Order';

const orders: Order[]= [
  {
    '_id': '63ab2fc3d29afdc35ccf77a6',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1672153689059-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '63ab2fc3d29afdc35ccf77a7'
      },
      {
        'product': {
          'name': 'Coca-cola',
          'imagePath': '1672162416988-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '63ab2fc3d29afdc35ccf77a8'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon = "🕑"
        title = "Fila de espera"
        orders = {orders}
      />
      <OrdersBoard
        icon = "👨‍🍳"
        title = "Em preparação"
        orders = {[]}
      />
      <OrdersBoard
        icon = "✅"
        title = "Pronto!"
        orders = {[]}
      />
    </Container>
  );
}
