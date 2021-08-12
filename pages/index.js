import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout';
import authContext from '../context/auth/authContext';

const Home = () => {
  // Extraer el usuario autenticado del storage
  const { usuarioAutenticado } = useContext(authContext);

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <Layout>
      <h1>Index2</h1>
    </Layout>
  )
}

export default Home
