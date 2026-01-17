import React from 'react'
import {useAuth, useClerk} from '@clerk/clerk-react';
import {useNavigation} from 'react-router=dom';
import {pricingStyles, pricingCardStyles} from '../assets/dummyStyles.js'

const Pricing = () => {
    const [bilingPeriod, setBillingPeriod] = useState("monthly");
    const clerk = useClerk();
    const {isSignedIn} =useAuth();
    const navigate = useNavigate();

  return (
    <div>Pricing</div>
  )
}

export default Pricing