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

import './Apply.css'
import { useNavigate } from 'react-router-dom'

export const Apply = () => {
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = React.useState(0)
  const nodeRef = React.useRef(null)

  return (
    <Container fluid>
      <Stepper active={activeStep}>
        <Stepper.Step>Personal Info</Stepper.Step>
        <Stepper.Step>Application</Stepper.Step>
        <Stepper.Step>Final Thoughts</Stepper.Step>
      </Stepper>
      <Title ta="left" w={500} size="lg">
        {activeStep === 0 && "Let's get to each other"}
        {activeStep === 1 && "Tell us why you're unique"}
        {activeStep === 2 && 'Just one last thing...'}
      </Title>
      <Space h="lg" />
      <Center>
        <Stack>
          <Paper w={360} h={400} p="lg" shadow="md" radius="md" withBorder>
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
                      <TextInput label="Name" placeholder="Your Name" required />
                      <TextInput label="Phone" placeholder="Your Phone Number" required />
                      <TextInput label="Address" placeholder="Your Address" required />
                      <DateInput
                        clearable
                        label="Birthday"
                        placeholder="Select your birthday"
                        required
                      />
                    </Stack>
                  )}
                  {activeStep === 1 && (
                    <Stack>
                      <Textarea
                        label="Why do you want to work with us?"
                        placeholder="300 characters max"
                        maxLength={300}
                        required
                      />
                      <Textarea
                        label="What makes you unique?"
                        placeholder="300 characters max"
                        maxLength={300}
                        required
                      />
                      <FileInput label="Resume" placeholder="Upload your Resume" required />
                      <FileInput label="Cover Letter" placeholder="Upload your Cover Letter" />
                    </Stack>
                  )}
                  {activeStep === 2 && (
                    <Stack>
                      <Textarea
                        label="Anything else we should know?"
                        placeholder="300 characters max"
                      />
                      <Select
                        label="How did you hear about us?"
                        placeholder="Select an option"
                        required
                        data={[
                          { value: 'google', label: 'Google' },
                          { value: 'facebook', label: 'Facebook' },
                          { value: 'twitter', label: 'Twitter' },
                        ]}
                      />

                      <Checkbox label="I agree to the terms and conditions" required />
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
                onClick={() => {
                  setActiveStep((v) => Math.min(v + 1, 3))
                }}
              >
                Next
              </Button>
            </Group>
          )}
        </Stack>
      </Center>
    </Container>
  )
}
