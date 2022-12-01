import { createContext, useState, useEffect } from "react";
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { api } from '../services/api';

WebBrowser.maybeCompleteAuthSession();

export interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
  isUserLoading: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [isUserLoading, setIsUserLoading] = useState(false);
  console.log(AuthSession.makeRedirectUri({ useProxy: true }))

  const [, response, promptAsync] = Google.useAuthRequest({
    clientId: '826775961201-0gatv378b2ul66t8kfq705053nqv3s35.apps.googleusercontent.com',
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ['profile', 'email']
  });

  const signIn = async () => {
    try {
      setIsUserLoading(true);
      await promptAsync();
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsUserLoading(false);
    }
  };

  async function signInWithGoogle(accessToken: string) {
    try {
      setIsUserLoading(true);

      const tokenResponse = await api.post('/users', { access_token: accessToken });
      api.defaults.headers.common["Authorization"] = `Bearer ${tokenResponse.data.token}`;
      console.log(tokenResponse.data)

      const userInfoResponse = await api.get('/me');
      console.log(userInfoResponse.data.user, "meeeeeeeeeeeeeeee");
      setUser(userInfoResponse.data.user);

    } catch (error) {
      console.log({ error });
      throw error;
    } finally {
      setIsUserLoading(false);
    }
  }

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      signInWithGoogle(response.authentication.accessToken);
    }
  }, [response]);


  return (
    <AuthContext.Provider value={{
      signIn,
      isUserLoading: isUserLoading,
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}