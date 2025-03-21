"use client"

import Breadcrumb from '@/components/Breadcrumb';
import { Service } from '@/components/service';
import React from 'react'

const Page = () => {
  return (
    <>
      <div>
        <Breadcrumb
          title={"Our Vision"}
          Breadcrumb={"Home"}
          discription={"Our Vision"}
        />
        <Service show={false} />
        
      </div>
    </>
  );
}

export default Page
