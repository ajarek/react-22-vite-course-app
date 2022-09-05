import React from 'react'
import Logo from '../../components/Logo/Logo'
import Typography from '../../components/Typography/Typography'
import TextField from '../../components/TextField/TextField'
import Button from '../../components/Button/Button'
import classes from './styles.module.css'

export const CreateAccountForm = (props) => {
  const {
    className,
    email,
    password,
    repeatPassword,
    onChangeEmail,
    onChangePassword,
    onChangeRepeatPassword,
    onClickCreateAccount,
    onClickBackToLogin,
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
        Create new account
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
      <TextField
        className={classes.textField}
        placeholder={'Repeat password'}
        type={'password'}
        value={repeatPassword}
        onChange={onChangeRepeatPassword}
      />
      <Button
        className={classes.button}
        variant={'contained'}
        color={'primary'}
        onClick={onClickCreateAccount}
      > <Typography
      variant={'button'}
    >
       CREATE ACCOUNT
      </Typography>
       
      </Button>
      <Button
        className={classes.button}
        variant={'text'}
        onClick={onClickBackToLogin}
      > <Typography
      variant={'button'}
    >
       BACK TO LOGIN
      </Typography>
       
      </Button>
    </div>
  )
}
export default CreateAccountForm
