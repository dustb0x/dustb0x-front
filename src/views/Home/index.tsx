// Config
import Router from 'next/router'
import styles from '@/styles/Home.module.css'
import { APP_NAME } from '@/config/constants/app'

// Next UI
import { Button, Card, Container, Image, Grid, Text } from '@nextui-org/react'

// Components
import PageMeta from '@/components/Layout/PageMeta'
import TopNavbar from '@/components/Layout/TopNavbar'

const HomeView: React.FC = () => {
  return (
    <>
      <PageMeta />
      <TopNavbar />
      <Container
        css={{
          pb: 100,
        }}
      >
        <div className={styles.header_section}>
          <div className={styles.header_message_box}>
            <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
            >
              Efficiently test smart contracts.
            </Text>
            <Button
              className={styles.header_button}
              color="gradient"
              size="lg"
              auto
              shadow
              rounded
              onClick={() => Router.push('/app')}
            >
              START APP
            </Button>
          </div>
        </div>
        <div className={styles.support_section}>
          <div>
            <Text
              h1
              css={{
                color: "#000000",
                mb: 50,
              }}
            >
              Supported chains
            </Text>
          </div>
          <div>
            <Image
              src="./ethereum_logo.svg"
              alt="Ethereum Logo"
              width={150}
            />
          </div>
        </div>
        <Grid
          css={{
            py: 100,
          }}
        >
          <Text
            h1
            css={{
              textAlign: "center",
              mb: 50,
            }}
          >
            Features
          </Text>
          <Grid.Container gap={2} justify="center">
            <Grid xs>
              <Card>
                <Card.Header>
                  Flexible
                </Card.Header>
                <Card.Body>
                  <Text
                    css={{ 
                      p: 15,
                     }}
                    size={30}
                  >
                    Make beautiful websites regardless of your design experience.
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs>
              <Card>
                <Card.Header>
                  Extensible
                </Card.Header>
                <Card.Body>
                  <Text
                    css={{ 
                      p: 15,
                     }}
                    size={30}
                  >
                    Make beautiful websites regardless of your design experience.
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs>
              <Card>
                <Card.Header>
                  Fast
                </Card.Header>
                <Card.Body>
                  <Text
                    css={{ 
                      p: 15,
                     }}
                    size={30}
                  >
                    Make beautiful websites regardless of your design experience.
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
        </Grid>
      </Container>
      <footer className={styles.footer}>
        &copy; 2022 RuckPlus, Inc.
      </footer>
    </>
  )
}

export default HomeView
