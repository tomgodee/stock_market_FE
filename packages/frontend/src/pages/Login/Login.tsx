import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { MARKET_PATH } from '../../config/paths';
import { ACCESS_TOKEN } from '../../config/localStorage';
import { selectUserState, login } from '../../reducers/user';
import {
  LoginContainer as Container,
  ItemGrid,
  LoginButton as Button,
  LoginTextField as TextField,
  LoginForm as Form,
} from './styles';
import type { LoginForm } from '../../types/user';
import { BASIC_INPUT_VALIDATION } from '../../utils/formValidator';

const USERNAME = 'username';
const PASSWORD = 'password';

const Login = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const user = useAppSelector(selectUserState);

  const { handleSubmit, control, formState: { isValid } } = useForm<LoginForm>({
    defaultValues: {
      [USERNAME]: '',
      [PASSWORD]: '',
    },
    criteriaMode: 'all',
    shouldFocusError: true,
    mode: 'onChange',
  });

  const submitHandler = (data: LoginForm) => {
    dispatch(login(data));
  };

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      history.push(MARKET_PATH);
    }
  }, [user]);

  return (
    <Container>
      <ItemGrid item xs={12} md={5}>
        <Form onSubmit={handleSubmit(submitHandler)} $flex $directionColumn>
          <Controller
            rules={BASIC_INPUT_VALIDATION}
            name={USERNAME}
            control={control}
            render={({ field, fieldState }) => {
              const error = fieldState.invalid;
              return (
                <TextField
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value.trim())}
                  onBlur={field.onBlur}
                  inputRef={field.ref}
                  error={error}
                  autoFocus
                  color="primary"
                  label={field.name}
                  id={field.name}
                  name={field.name}
                  required
                  type="text"
                  variant="outlined"
                  helperText={error ? 'Incorrect input' : ''}
                />
              );
            }}
          />
          <Controller
            rules={BASIC_INPUT_VALIDATION}
            name={PASSWORD}
            control={control}
            render={({ field, fieldState }) => {
              const error = fieldState.invalid;
              return (
                <TextField
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value.trim())}
                  onBlur={field.onBlur}
                  inputRef={field.ref}
                  error={error}
                  color="primary"
                  label={field.name}
                  id={field.name}
                  name={field.name}
                  required
                  type="password"
                  variant="outlined"
                  helperText={error ? 'Incorrect input' : ''}
                />
              );
            }}
          />
          <Button type="submit" disabled={!isValid} variant="contained" color="primary">Log in</Button>
        </Form>
      </ItemGrid>
    </Container>
  );
};

export default React.memo(Login);
