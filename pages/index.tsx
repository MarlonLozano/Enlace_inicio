import { NextPage, NextPageContext, GetServerSideProps, GetStaticProps } from 'next';
import Header from '~/components/layout/header/Header'
import inicio from '~/components/layout/inicio/Inicio';
import Inicio from '~/components/layout/inicio/Inicio';

// Esta interfaz permite controlar los datos que pueden ser recibidos 
interface Props {
  query: { name?: string };
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { query }: Props = context;
  return {
    props: {
      // La propiedad query se usa para obtener datos desde un enlace, ejemplo: http://.../?name=NICK
      //Se hace parse y stringify porque next no acepta campos "undefined"
      query: JSON.parse(JSON.stringify(query)),
    }
  }
}

/*
// La vista puede implementar alguno de estos dos metodos, para hacer SSG o SSR, no se deben usar los dos
// Si la vista no implementa ninguna, se considera que es SSG sin alimentación de datos

// La vista actua como estatica (Static Side Generation), obtiene la información al momento de compilar
export const getStaticProps: GetStaticProps<> = async (context) => {
  //Se hace fetch (por default en metodo GET) a la api
  const res = await fetch(process.env.API_URL + '/api/endpoint/')
  const data = await res.json()
  return {
    props: {
      //Se pasan los datos en alguna variable como propiedad, a la vista o a los componentes
      datos: data
    },
  }
}

// Hace Server Side Render, obtiene la información al momento de consultar la vista
export const getServerSideProps: GetServerSideProps<> = async (context) => {
  const res = await fetch(process.env.API_URL + '/api/endpoint/')
  const data = await res.json()
  return {
    props: {
      datos: data
    },
  }
} 
*/

// Corresponde al contenido de la vista (Recibe las propiedades, si pasaramos una propiedad llamada datos sería: { query, datos}: Props)
const HomePage: NextPage<Props> = ({ query }: Props) => {
  return (
    <div className="fondo_inicio">
      <Inicio/>
    </div>
  )
}

export default HomePage