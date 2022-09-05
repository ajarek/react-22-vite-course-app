import React from 'react'
import Logo from '../../components/Logo/Logo'
import Typography from '../../components/Typography/Typography'
import TextField from '../../components/TextField/TextField'
import Button from '../../components/Button/Button'
import classes from './styles.module.css'

export const LoginForm = (props) => {
  const {
    className,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onClickLogin,
    onClickCreateAccount,
    onClickForgotPassword,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
<Logo
        className={classes.logo}
      />
      <Typography
        className={classes.header}
        variant={'h1'}
      >
        Log in 👋
      </Typography>
      <TextField
        className={classes.textField}
        placeholder={'E-mail'}
        value={email}
        onChange={onChangeEmail}
      />
      <TextField
        className={classes.textField}
        placeholder={'Password'}
        type={'password'}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        className={classes.button}
        variant={'contained'}
        color={'primary'}
        onClick={onClickLogin}
      >
         <Typography
        variant={'button'}
      >
        LOGIN
        </Typography>
      </Button>
      <Button
        className={classes.button}
        variant={'contained'}
        color={'secondary'}
        onClick={onClickCreateAccount}
      >
         <Typography
        variant={'button'}
      >
        CREATE ACCOUNT
        </Typography>
        
      </Button>
      <Button
        className={classes.button}
        variant={'text'}
        onClick={onClickForgotPassword}
      >
         <Typography
        variant={'button'}
      >
         FORGOT PASSWORD
        </Typography>
       
      </Button>
    </div>
  )
}
export default LoginForm
