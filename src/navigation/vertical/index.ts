import { useRouter } from 'next/router'

// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { CreditCard, CreditCardCheck, CreditCardLock, Gift, TuneVertical, Bitcoin, Cash } from 'mdi-material-ui'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  const router = useRouter()
  const currentPath = router.pathname

  const navItems = [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboard'
    },
    {
      sectionTitle: 'Sections'
    },
    {
      title: 'CC',
      icon: CreditCard,
      path: '/cc'
    },
    {
      title: 'VBV',
      icon: CreditCardCheck,
      path: '/vbv'
    },
    {
      title: 'Gift Card',
      icon: Gift,
      path: '/giftcard'
    },
    {
      sectionTitle: 'Profile Settings'
    },
    {
      title: 'Balance',
      icon: Cash,
      path: '/balance'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    }
  ]

  const filteredItems = (path: string) => {
    if (path.startsWith('/admin')) {
      const navItems = [
        {
          title: 'Dashboard',
          icon: HomeOutline,
          path: '/admin/dashboard'
        },
        {
          sectionTitle: 'manage users'
        },
        {
          title: 'users',
          icon: Table,
          path: '/admin/users'
        },
        {
          title: 'Ticket',
          icon: TuneVertical,
          path: '/admin/ticket'
        },
        {
          title: 'Report',
          icon: AlertCircleOutline,
          path: '/admin/report'
        },
        {
          title: 'Form Layouts',
          icon: CubeOutline,
          path: '/admin/form-layouts'
        },

        {
          title: 'Typography',
          icon: FormatLetterCase,
          path: '/typography'
        },
        {
          title: 'Icons',
          path: '/icons',
          icon: GoogleCirclesExtended
        },
        {
          title: 'Cards',
          icon: CreditCardOutline,
          path: '/cards'
        },
        {
          title: 'users',
          icon: Table,
          path: '/users'
        },
        {
          icon: CubeOutline,
          title: 'Form Layouts',
          path: '/form-layouts'
        }
      ]
      return navItems
    } else if (path.startsWith('/seller')) {
      const navItems = [
        {
          title: 'Dashboard',
          icon: HomeOutline,
          path: '/seller/dashboard'
        },
        {
          sectionTitle: 'My Sales'
        },

        {
          title: 'Sales',
          icon: Cash,
          path: '/seller/sales'
        },
        {
          title: 'Withdraw',
          icon: Bitcoin,
          path: '/seller/withdraw'
        },
        {
          title: 'Ticket',
          icon: TuneVertical,
          path: '/seller/ticket'
        },
        {
          title: 'Report',
          icon: AlertCircleOutline,
          path: '/seller/report'
        },
        {
          sectionTitle: 'Sections'
        },
        {
          title: 'CC',
          icon: CreditCard,
          path: '/seller/cc'
        },
        {
          title: 'VBV',
          icon: CreditCardCheck,
          path: '/seller/vbv'
        },
        {
          title: 'Gift Card',
          icon: Gift,
          path: '/seller/giftcard'
        }
      ]
      return navItems
    }
    return navItems
  }

  return filteredItems(currentPath)
}

export default navigation
