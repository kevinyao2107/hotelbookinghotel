import Top from '../../components/chambre/Top';
import Room from '../../components/chambre/Room';
import Head from 'next/head';
import { getAllRoom } from '../../redux/actions/roomAction';
import { wrapper } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';

const Chambre = () => {
  const { room } = useSelector((state) => state.allRooms);
  const gridCol = 'grid grid-cols-3 gap-8 pt-5';
  const containerCol = 'w-2/3 pt-2 mx-auto';
  const title = 'Chambres';
  const headerImage = '/cchambre.jpeg';
  return (
    <div className='pt-10'>
      <div>
        <Head>
          <title>Hotel Chambre</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
      </div>
      <Top title={title} headerImage={headerImage} />
      <Room room={room} gridCol={gridCol} containerCol={containerCol} />
    </div>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ req, store }) => {
//     await store.dispatch(getAllRoom(req));
//   }
// );

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(getAllRoom(req));
    }
);

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ req, dispatch }) =>
//     async () => {
//       await dispatch(getAllRoom(req));
//     }
// );

export default Chambre;
