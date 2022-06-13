import { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import { FileText, User, MapPin, Link, CreditCard } from 'react-feather'
import PersonalInfo from './PersonalInfo'
import OrderHistory from '../orderhistory'
import Address from '../myaddress'

const Vertical = () => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const steps = [
    {
      id: 'personal-info',
      title: 'Personal Info',
      subtitle: 'Add Personal Info',
      icon: <User size={18} />,
      content: <PersonalInfo stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'step-address',
      title: 'Address',
      subtitle: 'Add Address',
      icon: <MapPin size={18} />,
      content: <Address stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'step-orders',
      title: 'My Orders ',
      subtitle: 'orders Details',
      icon: <FileText size={18} />,
      content: <OrderHistory stepper={stepper} type='modern-vertical' />
    }
   
  ]

  return (
    <div className='modern-vertical-wizard'>
      <Wizard
        type='modern-vertical'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default Vertical
