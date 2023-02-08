import React, {useState, useRef} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {Box, Input, Textarea, Button, Text} from 'theme-ui'
import {useTranslation} from 'react-i18next'
import ReCAPTCHA from 'react-google-recaptcha'

export default function FormContact(props) {
  const {t, i18n} = useTranslation('common')
  const recaptchaRef = useRef()
  const [formData, setFormData] = useState({})
  const [qbResponseErrors, setqbResponseErrors] = useState('')
  const [qbResponseSuccess, setqbResponseSuccess] = useState('')

  const updateInput = e => {
    setFormData({
      ...formData,
      'g-recaptcha-response': formData.sitekey,
      [e.target.name]: e.target.value,
    })
  }

  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = data => {
    sendEmail()
    setFormData({
      name: 'Namn',
      email: 'Epost',
      message: 'Meddelande',
    })
  }

  const sendEmail = () => {
    axios
      .post('https://quickbutik.com/home/start/support', formData)
      .then(function (res) {
        res.data.status === 1
          ? setqbResponseSuccess(res.data.message)
          : setqbResponseErrors(res.data.error)
      })
      .catch(error => {
        setqbResponseErrors(error.error)
      })
  }

  const captchaValidated = value => {
    formData.sitekey = value
  }

  return (
    <Box py={3} css={{maxWidth: '500px', minWidth: '50%'}}>
      {qbResponseErrors && (
        <Text
          color="white"
          px={2}
          my={2}
          py={2}
          bg="red"
          css={{borderRadius: '4px', textAlign: 'center'}}
        >
          {qbResponseErrors}
        </Text>
      )}
      {qbResponseSuccess && (
        <Text
          color="white"
          my={2}
          px={2}
          py={2}
          bg="green"
          css={{borderRadius: '4px', textAlign: 'center'}}
        >
          {qbResponseSuccess}
        </Text>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={t('common:name')}
          sx={{
            py: 2,
            borderColor: 'dark100',
            color: 'dark300',
            bg: 'white',
            ':focus': {
              outline: 'none',
              borderColor: 'primary',
              transition: 'all 0.3s linear',
            },
            ':focus::placeholder': {
              color: 'transparent',
              transition: 'all 0.3s linear',
            },
          }}
          name="name"
          {...register('name', {required: true})}
          onChange={updateInput}
          value={formData.name || ''}
        />
        {errors.example && <small>{t('common:specifyName')}</small>}
        <br/>
        <Input
          placeholder={t('common:email')}
          sx={{
            py: 2,
            borderColor: 'dark100',
            color: 'dark300',
            bg: 'white',
            ':focus': {
              outline: 'none',
              borderColor: 'primary',
              transition: 'all 0.3s linear',
            },
            ':focus::placeholder': {
              color: 'transparent',
              transition: 'all 0.3s linear',
            },
          }}
          name="email"
          {...register('email', {required: true})}
          onChange={updateInput}
          value={formData.email || ''}
        />
        {errors.example && <small>{t('common:specifyEmail')}</small>}
        <br/>
        <Textarea
          placeholder={t('common:message')}
          sx={{
            py: 2,
            borderColor: 'dark100',
            color: 'dark300',
            bg: 'white',
            ':focus': {
              outline: 'none',
              borderColor: 'primary',
              transition: 'all 0.3s linear',
            },
            ':focus::placeholder': {
              color: 'transparent',
              transition: 'all 0.3s linear',
            },
          }}
          name="message"
          {...register('message', {required: true})}
          onChange={updateInput}
          value={formData.message || ''}
        />
        {errors.exampleRequired && <small>{t('common:specifyMessage')}</small>}
        <Box py={3}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6Ld4eE8UAAAAADrjK1KhoV-Ez3ySre2ccCaJROj4"
            onChange={captchaValidated}
          />
        </Box>
        <Button
          type="submit"
          my={3}
          // onClick={formValidation}
          variant="buttons.primary"
          sx={{maxWidth: '240px', width: '100%', display: 'block'}}
        >
          {props.buttonText}
        </Button>
      </form>
    </Box>
  )
}
