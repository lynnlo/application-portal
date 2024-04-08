import React from 'react'
import {
  Paper,
  Stack,
  TextInput,
  Text,
  Title,
  Button,
  Box,
  Group,
  Center,
  Container,
  Space,
  Stepper,
  Textarea,
  FileInput,
  Select,
  Checkbox,
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { SwitchTransition, CSSTransition, TransitionGroup } from 'react-transition-group'
import { useNavigate } from 'react-router-dom'
import { User } from '@supabase/supabase-js'
import { Form, useForm } from '@mantine/form'
import dayjs from 'dayjs'

import supabase from '../../supabase'

import './Apply.module.css'

export const Apply = () => {
  const navigate = useNavigate()
  const [error, setError] = React.useState<string | null>(null)
  const [user, setUser] = React.useState<User>()
  const [activeStep, setActiveStep] = React.useState(0)
  const nodeRef = React.useRef(null)
  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      address: '',
      why: '',
      unique: '',
      resume: '',
      cover: '',
      anything: '',
      hear: '',
      agree: false,
    },
    validate: (values) => {
      if (!values.name) {
        return { name: 'Please enter a name' }
      }
      if (!values.phone || !values.phone.match(/^\d{10}$/)) {
        return { phone: 'Please enter a valid phone number' }
      }

      return {}
    },
  })

  React.useEffect(() => {
    supabase.auth.getUser().then((res) => {
      if (res && !res.error) {
        setUser(res.data.user)
      } else {
        navigate('/login', { state: { register: true } })
      }
    })
  }, [])

  const handleSubmit = () => {
    const { values } = form
    supabase
      .from('applications')
      .insert([
        {
          name: values.name,
          phone: values.phone,
          address: values.address,
          why: values.why,
          unique: values.unique,
          resume: values.resume,
          cover: values.cover,
          anything: values.anything,
          hear: values.hear,
          agree: values.agree,
          user_id: user?.id,
        },
      ])
      .then((res) => {
        if (res.error) {
          setError(res.error.message)
          return
        }
        setActiveStep(3)
      })
  }

  return (
    <Container fluid>
      <Title order={1}> Application </Title>
      <Space h="lg" />
      <Stepper active={activeStep}>
        <Stepper.Step>Personal Info</Stepper.Step>
        <Stepper.Step>Application</Stepper.Step>
        <Stepper.Step>Final Thoughts</Stepper.Step>
      </Stepper>
      <Title ta="left" w={500} order={3}>
        {activeStep === 0 && "Let's get to each other"}
        {activeStep === 1 && "Tell us why you're unique"}
        {activeStep === 2 && 'Just one last thing...'}
      </Title>
      <Space h="lg" />
      <Center>
        <Stack>
          <Paper w={360} h={400} p="lg" shadow="md" radius="md" withBorder>
            <Form form={form} style={{ height: '100%' }} netlify="true">
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={activeStep}
                  nodeRef={nodeRef}
                  addEndListener={(done: (arg0: TransitionEvent) => void) =>
                    nodeRef.current &&
                    (nodeRef.current as HTMLElement).addEventListener('transitionend', done, false)
                  }
                  classNames="fade"
                >
                  <Container ref={nodeRef} h="100%">
                    {activeStep === 0 && (
                      <Stack>
                        <TextInput
                          {...form.getInputProps('name')}
                          label="Name"
                          placeholder="Your Name"
                          required
                        />
                        <TextInput
                          {...form.getInputProps('phone')}
                          label="Phone"
                          placeholder="Your Phone Number"
                          required
                        />
                        <TextInput
                          {...form.getInputProps('address')}
                          label="Address"
                          placeholder="Your Address"
                          required
                        />
                      </Stack>
                    )}
                    {activeStep === 1 && (
                      <Stack>
                        <Textarea
                          {...form.getInputProps('why')}
                          label="Why do you want to work with us?"
                          placeholder="300 characters max"
                          maxLength={300}
                          required
                        />
                        <Textarea
                          {...form.getInputProps('unique')}
                          label="What makes you unique?"
                          placeholder="300 characters max"
                          maxLength={300}
                          required
                        />
                        <FileInput
                          {...form.getInputProps('resume')}
                          label="Resume"
                          placeholder="Upload your Resume"
                          required
                        />
                        <FileInput
                          {...form.getInputProps('cover')}
                          label="Cover Letter"
                          placeholder="Upload your Cover Letter"
                        />
                      </Stack>
                    )}
                    {activeStep === 2 && (
                      <Stack>
                        <Textarea
                          {...form.getInputProps('anything')}
                          label="Anything else we should know?"
                          placeholder="300 characters max"
                        />
                        <Select
                          {...form.getInputProps('hear')}
                          label="How did you hear about us?"
                          placeholder="Select an option"
                          data={[
                            { value: 'google', label: 'Google' },
                            { value: 'facebook', label: 'Facebook' },
                            { value: 'twitter', label: 'Twitter' },
                            { value: 'friend', label: 'Friend' },
                            { value: 'other', label: 'Other' },
                          ]}
                        />

                        <Checkbox
                          {...form.getInputProps('agree')}
                          label="I agree to the terms and conditions"
                          required
                        />
                      </Stack>
                    )}
                    {activeStep === 3 && (
                      <Center style={{ height: '100%' }}>
                        <Stack gap="sm">
                          <Title> Thank you! </Title>
                          <Text size="sm">We will get back to you as shortly as we can. </Text>
                          <Group>
                            <Button
                              onClick={() => {
                                navigate('/profile')
                              }}
                              variant="subtle"
                              color="grey"
                            >
                              View Profile
                            </Button>
                            <Button
                              onClick={() => {
                                navigate('/')
                              }}
                            >
                              Go Home
                            </Button>
                          </Group>
                        </Stack>
                      </Center>
                    )}
                  </Container>
                </CSSTransition>
              </SwitchTransition>
            </Form>
          </Paper>
          {activeStep !== 3 && (
            <Group grow>
              <Button
                onClick={() => {
                  setActiveStep((v) => Math.max(v - 1, 0))
                }}
                variant="subtle"
                color="grey"
              >
                Back
              </Button>
              <Button
                disabled={
                  (activeStep === 0 &&
                    (!form.values.name ||
                      !form.values.name ||
                      !form.values.phone ||
                      !form.values.address)) ||
                  (activeStep === 1 && (!form.values.why || !form.values.unique)) ||
                  (activeStep === 2 && !form.values.agree)
                }
                onClick={() => {
                  if (activeStep === 2) {
                    handleSubmit()
                  } else {
                    setActiveStep((v) => Math.min(v + 1, 3))
                  }
                }}
              >
                {activeStep === 2 ? 'Submit' : 'Next'}
              </Button>
            </Group>
          )}
          <Text c="red">{error}</Text>
        </Stack>
      </Center>
    </Container>
  )
}
