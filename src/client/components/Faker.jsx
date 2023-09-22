
import Card from './Card';
import {faker} from '@faker-js/faker';

export default function Faker() {
  const data = [];

  for(let i = 0; i < 50; i++) {
    let fakee = {
      id: i, 
      product_name: faker.commerce.product(),
      price: faker.commerce.price(),
    };
    data.push(fakee);
  }

  return (
    <div className="card-container outline">
      {data.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}