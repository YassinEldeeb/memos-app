import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  AppStackParamList,
  AuthStackParamList,
  HomeTabsParamList,
} from './StackParamList'

export interface AuthNavProps<Screen extends keyof AuthStackParamList> {
  route: RouteProp<AuthStackParamList, Screen>
  navigation: StackNavigationProp<AuthStackParamList, Screen>
}

export interface HomeNavProps<Screen extends keyof HomeTabsParamList> {
  route: RouteProp<HomeTabsParamList, Screen>
  navigation: StackNavigationProp<HomeTabsParamList, Screen>
}

export interface AppNavProps<Screen extends keyof AppStackParamList> {
  route: RouteProp<AppStackParamList, Screen>
  navigation: StackNavigationProp<AppStackParamList, Screen>
}
