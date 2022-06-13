import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    header: 'Discover the best food'
  },
  /*{
    id: 'email',
    title: 'Email',
    icon: <Mail size={20} />,
    navLink: '/apps/email'
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  },
  {
    id: 'todo',
    title: 'Todo',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/todo'
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
  },
  {
    id: 'invoiceApp',
    title: 'Invoice',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'invoiceList',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/list'
      },
      {
        id: 'invoicePreview',
        title: 'Preview',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/preview'
      },
      {
        id: 'invoiceEdit',
        title: 'Edit',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/edit'
      },
      {
        id: 'invoiceAdd',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/add'
      }
    ]
  },*/
  {
    id: 'eCommerce',
    title: 'Order Food Online',
    icon: <ShoppingCart size={20} />,
    children: [
      {
        id: 'restaurants',
        title: 'Restaurants',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/restaurants'
      },
      {
        id: 'categories',
        title: 'Categories',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/categories'
      },
      /*{
        id: 'addRestaurant',
        title: 'Add Restaurant',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/addRestaurant'
      },*/
     /* {
        id: 'detail',
        title: 'Details',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/product-detail'
      }*/
     /* {
        id: 'wishList',
        title: 'Wish List',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/wishlist'
      },*/
      {
        id: 'checkout',
        title: 'Checkout',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/checkout'
      }
    ]
  }
  /*{ 
    id: 'users',
    title: 'User',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/user/list'
      },
      {
        id: 'view',
        title: 'View',
        icon: <Circle size={12} />,
        navLink: '/apps/user/view'
      },
      {
        id: 'edit',
        title: 'Edit',
        icon: <Circle size={12} />,
        navLink: '/apps/user/edit'
      }
    ]
  }*/
]
