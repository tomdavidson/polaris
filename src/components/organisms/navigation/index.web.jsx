import React, { useContext } from 'react'
import { Switch } from 'react-native'
import { useTheme } from 'styled-components'
import styled from 'styled-components/native'
import { ThemeActionsContext } from 'store'
import { useTranslation } from 'react-i18next'
import Container from 'components/atoms/container'
import Link from 'components/atoms/link'

const Wrapper = styled.View`
  height: 85px;
  flex-direction: row;
  align-items: stretch;
  border-bottom-color: #e0e0e0;
  border-bottom-width: 1px;
  background-color: ${props => props.theme.bgColor};
`

const Column = Container

const Left = styled(Column)`
  padding-left: 20px;
`

const Right = styled(Column)`
  padding-right: 20px;
`

const Center = styled(Container)`
  height: 100%;
`

const ThemeText = styled.Text`
  color: ${props => props.theme.textColor};
`

export default function Header() {
  const { t } = useTranslation()
  const { toggleTheme } = useContext(ThemeActionsContext)
  const theme = useTheme()

  return (
    <Wrapper>
      <Left>
        <Link title={t('home:title')} path={'/'} />
      </Left>
      <Center>
        <ThemeText>{t('nav:topCenter')}</ThemeText>
      </Center>
      <Right>
        <Link title={t('home:settingsButton')} path={'/settings'} />
        <Switch
          onValueChange={toggleTheme}
          value={theme.name !== 'light'}
          testID="theme-switch"
        />
      </Right>
    </Wrapper>
  )
}
