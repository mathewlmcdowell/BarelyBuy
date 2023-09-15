import { faker } from '@faker-js/faker';

export default function Faker() {

    const data = [];

    for (let i = 0; i < 100; i++) {
        let fakee = {
            id: i,
        }
        data.push(fakee);
    };
    console.log(data);

    return(
        <>
          {data.map((product) => {
            return(
                <p key={product.id}>

                </p>
            );
          })}  
        </>
    );
}