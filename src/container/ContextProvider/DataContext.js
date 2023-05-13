import { createContext, useEffect, useState } from "react";
import axios from 'axios';

 const ProductContext = createContext();


export  const AppProvider = ({children}) =>{
    const [productList, setProductList] = useState([]);

     const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([]);

    const handleMessageSend = (props) => {
    axios.post(`https://100096.pythonanywhere.com/send_message/<int:pk>/?room_id=${2}`, {
      message: message,
      user_id: props.userId,
      side: true
    })
    .then(response => {
      console.log(response.data);
      const newMessage = response.data;
    // Add the new message to the chat app state
    console.log(newMessage)
    //   setMessages([...messages, newMessage]);
    })
    .catch(error => {
      console.log(error);
    });
    setMessage("");
  };



    useEffect(() => {
        axios.get(`https://100096.pythonanywhere.com/admin_product_list/`)
      .then(res => {
        console.log('getting products');
        setProductList(res.data.product_list);
      })
      .catch(err => {
        console.log('error', err);
      })
    }, []);
    
   
   
    return (
        <ProductContext.Provider value={
            [productList, message, messages, handleMessageSend]
            }>
        {children}
    </ProductContext.Provider>
    )
    
}


export default ProductContext;