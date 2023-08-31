import { Center, Heading, SimpleGrid, Text, Button} from '@chakra-ui/react';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';



const SendOrder = () => {
const {cart, clearCart, totalFinal} = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  const order = {
    buyer: {name, phone, email},
    items: cart,
    total: totalFinal
  };

  const ordersCollection = collection(db, "orden");

  return (
    <div>
        <SimpleGrid columns={1}>
        <Center margin={20}>
      <Heading>Complete el formulario de contacto para finalizar su compra!</Heading>
      </Center>
      <form onSubmit={handleSubmit}>
        <Center>
      <Text>Nombre y Apellido:</Text>
      </Center>
      <Center>
        <input
          type="text"
          placeholder="Nombre y apellido"
          onChange={(e) => setName(e.target.value)}
        />
        </Center>
        <Center>
      <Text >Telefono:</Text>
      </Center>
      <Center>
        <input
          type="number"
          placeholder="Telefono"
          onChange={(e) => setPhone(e.target.value)}
        />
        </Center>
        <Center>
      <Text >E-mail:</Text>
      </Center>
      <Center>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        </Center>
        <Center>
      <Text >Confirmar e-mail:</Text>
      </Center>
      <Center>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail2(e.target.value)}
        />
        </Center>
        <Center>
            {email===email2 && email!="" && email2!=""? <Button margin={10} type="submit">Realizar compra</Button> : <Heading as='h4' size='md' margin={10}> Ingresa todos los datos para realizar la compra!</Heading> }
        </Center>
      </form>
      </SimpleGrid>
      <Center margin={10}>
      <Heading as='h4' size='md' margin={10}>Numero de orden:</Heading>
      </Center>
      <br/>
      <Center>
        <Heading as='h4' size='md' margin={10}>{orderId}</Heading>
        </Center>
      
    </div>
  );
};

export default SendOrder;