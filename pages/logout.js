// // pages/logout.js
// import { useContext, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import AuthContext from './context/AuthContext';

// const LogoutPage = () => {
//   const { logout } = useContext(AuthContext);
//   const router = useRouter();

//   useEffect(() => {
//     logout();
//     router.push('/login');
//   }, [logout, router]);

//   return <div>Logging out...</div>;
// };

// export default LogoutPage;
