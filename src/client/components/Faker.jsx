export default function Faker() {

    const data = [];

    for(let i = 0; i < 100; i++) {
        let fakee = {
            id: i, 
            product_name: faker.commerce.product(),
            price: faker.commerce.price(),
        };
        data.push(fakee);
    }
    console.log(data);
    return(
        <>
            <h1>Faker</h1>
            {data.map((product) => {
                return(
                    <p key={product.id}>
                        Product: {product.product_name}, Price: {product.price}
                    </p>
                );
            })}
        </>
    )
}