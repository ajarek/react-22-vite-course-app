import React from 'react'
import Logo from '../../components/Logo/Logo'
import Typography from '../../components/Typography/Typography'
import TextField from '../../components/TextField/TextField'
import Button from '../../components/Button/Button'
import classes from './styles.module.css'

export const RecoverPasswordForm = (props) => {
  const {
    className,
    email,
    onChangeEmail,
    onClickRecover,
    onClickBackToLogin,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
 <Typography
        className={classes.header}
        variant={'h1'}
      >
        Recover password
      </Typography>
      <TextField
        className={classes.textField}
        placeholder={'E-mail'}
        value={email}
        onChange={onChangeEmail}
      />
      <Button
        className={classes.button}
        variant={'contained'}
        color={'primary'}
        onClick={onClickRecover}
      >
        RECOVER
      </Button>
      <Button
        className={classes.button}
        variant={'text'}
        onClick={onClickBackToLogin}
      >
        ️BACK TO LOGIN
      </Button>
    </div>
  )
}
export default RecoverPasswordForm
