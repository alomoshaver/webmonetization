import React, { useState } from 'react'
import { Container, TextField, Button } from '@mui/material'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import CodeBlock from '@theme/CodeBlock'
import styles from './styles.module.css'

export default function MetaTag(props) {
  const { config: siteConfig } = props

  const [pointerInput, setPointerInput] = useState('')
  const [pointer, setPointer] = useState('https://YourPaymentPointer')
  const [invalidUrl, setInvalidUrl] = useState(false)

  const isValidPointer = (pointerInput) => {
    try {
      const url = new URL(pointerInput)
      return url.href
    } catch (err) {
      if (pointerInput.charAt(0) === '$') {
        return pointerInput.replace('$', 'https://')
      } else {
        setInvalidUrl(true)
        return '$YourPaymentPointer'
      }
    }
  }

  const parsePointerUrl = (pointerInput) => {
    return isValidPointer(pointerInput)
  }

  return (
    <Layout
      permalink='/link-tag'
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <Container maxWidth='md' component='section'>
        <h1>Link Tag Generator</h1>
        <p>
          This Link Tag Generator helps you generate your HTML link tag to
          monetize your website. Just provide your{' '}
          <a
            href='https://docs.openpayments.guide/docs/payment-pointers'
            rel='noreferrer noopener'
            target='_blank'
          >
            Payment Pointer
          </a>{' '}
          and click generate.
        </p>
        <form onSubmit={(ev) => ev.preventDefault()} className={styles.form}>
          <TextField
            id='paymentPointer'
            label='Payment Pointer URL'
            placeholder='$YourPaymentPointer'
            variant='outlined'
            value={pointerInput}
            error={Boolean(invalidUrl)}
            helperText={
              invalidUrl
                ? 'Please check the format of your payment pointer'
                : ''
            }
            fullWidth
            onChange={(ev) => {
              setPointerInput(ev.target.value)
              setInvalidUrl('')
            }}
          />
          <Button
            className={styles.btn}
            variant='contained'
            type='submit'
            onClick={() => {
              setInvalidUrl(false)
              setPointer(parsePointerUrl(pointerInput))
            }}
          >
            Generate
          </Button>
        </form>
        <p>
          Read our <Link to='/docs'>docs</Link> to learn more about Web
          Monetization. If you're interested in splitting revenue between
          multiple parties, check out the{' '}
          <Link to='/prob-revshare'>Probabilistic Revshare Generator</Link>.
        </p>
        <div>
          <p>
            To monetize your website add the following <code>&lt;link&gt;</code>{' '}
            tag to the <code>&lt;head&gt;</code> section of all pages on your
            website.
          </p>
          <CodeBlock className='language-html'>
            {`<link rel="monetization" href="${pointer}" />`}
          </CodeBlock>
        </div>
      </Container>
    </Layout>
  )
}
