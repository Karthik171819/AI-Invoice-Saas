import React from 'react'
import { useState } from "react";
import {useAuth, useClerk} from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import {pricingStyles, pricingCardStyles} from '../assets/dummyStyles.js'

const Pricing = () => {
    const [billingPeriod, setBillingPeriod] = useState("monthly");
    const clerk = useClerk();
    const {isSignedIn} =useAuth();
    const navigate = useNavigate();

     const plans = {
    monthly: [
      {
        title: "Starter",
        price: "₹0",
        period: "month",
        description: "Perfect for freelancers and small projects",
        features: [
          "5 invoices per month",
          "Basic AI parsing",
          "Standard templates",
          "Email support",
          "PDF export",
        ],
        isPopular: false,
      },
      {
        title: "Professional",
        price: "₹499",
        period: "month",
        description: "For growing businesses and agencies",
        features: [
          "Unlimited invoices",
          "Advanced AI parsing",
          "Custom branding",
          "Priority support",
          "Advanced analytics",
          "Team collaboration (3 members)",
          "API access",
        ],
        isPopular: true,
      },
      {
        title: "Enterprise",
        price: "₹1,499",
        period: "month",
        description: "For large organizations with custom needs",
        features: [
          "Everything in Professional",
          "Unlimited team members",
          "Custom workflows",
          "Dedicated account manager",
          "SLA guarantee",
          "White-label solutions",
          "Advanced security",
        ],
        isPopular: false,
      },
    ],
    annual: [
      {
        title: "Starter",
        price: "₹0",
        period: "month",
        description: "Perfect for freelancers and small projects",
        features: [
          "5 invoices per month",
          "Basic AI parsing",
          "Standard templates",
          "Email support",
          "PDF export",
        ],
        isPopular: false,
        isAnnual: false,
      },
      {
        title: "Professional",
        price: "₹399",
        period: "month",
        description: "For growing businesses and agencies",
        features: [
          "Unlimited invoices",
          "Advanced AI parsing",
          "Custom branding",
          "Priority support",
          "Advanced analytics",
          "Team collaboration (3 members)",
          "API access",
        ],
        isPopular: true,
        isAnnual: true,
      },
      {
        title: "Enterprise",
        price: "₹1,199",
        period: "month",
        description: "For large organizations with custom needs",
        features: [
          "Everything in Professional",
          "Unlimited team members",
          "Custom workflows",
          "Dedicated account manager",
          "SLA guarantee",
          "White-label solutions",
          "Advanced security",
        ],
        isPopular: false,
        isAnnual: true,
      },
    ],
  };

  const currentPlans = plans[billingPeriod];

  function handleCtaClick (planeMeta, flags = {} ) {
    if(flags.openSignInFallback || !isSignedIn){
      if(clerk && typeof clerk.openSignIn === "functions" ){
        clerk.openSignIn({redirectUrl: "app/create-invoice"});
      }
      else {
        navigate("/sign-in");
      }
      return;
    }
    navigate("app/create-invoice", {
      state: {fromPlan: planMeta?.title || null},
    })
  }

  return (
    <section id='pricing' className={pricingStyles.section}>
      <div className={pricingStyles.bgElement1}></div>
      <div className={pricingStyles.bgElement2}></div>
      <div className={pricingStyles.bgElement3}></div>

      <div className={pricingStyles.container}>
        <div className={pricingStyles.headerContainer}>
          <div className={pricingStyles.badge}>
            <span classname={pricingStyles.badgeDot}></span>
            <span className={pricingStyles.badgeText}>Transparent Pricing</span>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;