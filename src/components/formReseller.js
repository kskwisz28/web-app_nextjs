import React, {useState, useRef} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {Box, Input, Textarea, Button, Text} from 'theme-ui'

import ReCAPTCHA from 'react-google-recaptcha'

export default function FormReseller(props) {
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

  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      company_name: 'Företagsnamn',
      url: 'Webbplats',
      name: 'Fullständigt namn (kontaktperson)',
      phonenumber: 'Telefon',
      email: 'Epost',
      message: 'Meddelande',
    }
  })

  const onSubmit = data => {
    sendEmail()
    setFormData({
      company_name: 'Företagsnamn',
      url: 'Webbplats',
      name: 'Fullständigt namn (kontaktperson)',
      phonenumber: 'Telefon',
      email: 'Epost',
      message: 'Meddelande',
    })
  }

  const sendEmail = () => {
    axios
      .post('https://quickbutik.com/home/start/reseller', formData)
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
          placeholder={'Företagsnamn'}
          sx={{
            py: 2,
            my: 2,
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
          name="company_name"
          {...register('company_name', {required: true})}
          onChange={updateInput}
          value={formData.company_name || ''}
        />
        <Input
          placeholder={'Webbplats (länkadress)'}
          sx={{
            py: 2,
            my: 2,
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
          name="url"
          {...register('url', {required: true})}
          onChange={updateInput}
          value={formData?.url || ''}
        />
        <Input
          placeholder={'Fullständigt namn (kontaktperson)'}
          sx={{
            py: 2,
            my: 2,
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
        <Input
          placeholder={'Telefon'}
          sx={{
            py: 2,
            my: 2,
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
          name="phonenumber"
          {...register('phonenumber', {required: true})}
          onChange={updateInput}
          value={formData.phonenumber || ''}
        />
        {errors.phonenumber && <small>Vänligen fyll i namn</small>}
        <Input
          placeholder={'Epost'}
          sx={{
            py: 2,
            my: 2,
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
        {errors.email && <small>Vänligen fyll i e-post adress</small>}
        <Textarea
          placeholder={'Beskriv din verksamhet kort (bransch, inriktning)'}
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
        {errors.message && <small>Vänligen fyll i meddelandet</small>}
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
