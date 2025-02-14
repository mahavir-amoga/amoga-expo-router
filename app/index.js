import { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '../contexts/AuthContext';

export default function Index() {
  const { user } = useAuth();
  const [redirectPath, setRedirectPath] = useState('');

  useEffect(() => {
    setRedirectPath(user ? '/(tabs)' : '/(auth)/login');
  }, [user]);

  if (!redirectPath) return null; // Prevents flickering

  return <Redirect href={redirectPath} />;
}
