import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/superbase';

export const useUserStore = defineStore('users', () => {
    const user = ref(null);
    const errorMessage = ref('');
    const loadingUser = ref(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

  const handleSignup = async (credentials) => {
    const { email, password, username } = credentials;
    errorMessage.value = '';

    if (password.length < 6) {
        return errorMessage.value = 'Password must be at least 6 characters long';
    }

    if (username.length < 4) {
        return errorMessage.value = 'Username must be at least 4 characters long';
    }

    if (!validateEmail(email)) {
      return errorMessage.value = 'Invalid email format';
    }

    // validate if user already exists
    const {data: userWithUsername} = await supabase
      .from('users')
      .select()
      .eq('username', username)
      .single();

    if (userWithUsername) {
      return errorMessage.value = 'Username already exists';
    }

    // Create a new user
    const response = await supabase.auth.signUp({
      email,
      password
    });

    if (response.error) {
      return errorMessage.value = response.error.message;
    }

    const createUserResult = await supabase.from('users').insert({
      username,
      email
    });

    console.log('createUserResult', createUserResult);

    if (createUserResult.error) {
      // If there is an error creating the user, we can handle it here
      // For example, we can delete the user from auth if the user creation fails
      return errorMessage.value = createUserResult.error.message;
    }

    // Retrive the newly created user
    const {data: newUser} = await supabase
      .from('users')
      .select()
      .eq('email', email)
      .single();

    user.value = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email
    };
  };

  const handleLogin = async (credentials) => {
    const { email, password } = credentials;
    errorMessage.value ='';

    if (!validateEmail(email)) {
      return errorMessage.value = 'Invalid email format';
    }

    if (!password.length) {
      return errorMessage.value = 'Password cannot be empty';
    }

    const signInResult = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (signInResult.error) {
      return errorMessage.value = signInResult.error.message;
    }

    // Retrive the user after login
    const {data: existingUser} = await supabase
      .from('users')
      .select()
      .eq('email', email)
      .single();

      if (!existingUser) {
        return errorMessage.value = 'User not found';
      }

    user.value = {
      id: existingUser.id,
      username: existingUser.username,
      email: existingUser.email
    };
  };
  const handleLogout = async () => {
    const response = await supabase.auth.signOut();
    user.value = null;

    console.log('handleLogout response', response);
  };
  const getUser = async () => {
    loadingUser.value = true;
    const response = await supabase.auth.getUser();

    console.log('getUser response', response);

    if (!response.user) {
      loadingUser.value = false;
      return user.value = null;
    }

    const { data: userWithEmail } = await supabase
      .from('users')
      .select()
      .eq('email', response.data.user.email)
      .single();

      user.value = {
        id: userWithEmail.id,
        username: userWithEmail.username,
        email: userWithEmail.email
      };

      loadingUser.value = false;
  };

  const clearErrorMessage = () => {
    errorMessage.value = '';
  };


  return { user, handleLogin, handleLogout, handleSignup, getUser, errorMessage, clearErrorMessage, loadingUser};
})
