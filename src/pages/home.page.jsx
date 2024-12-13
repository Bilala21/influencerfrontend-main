import React from 'react'
import { HeaderComponent } from '../components/header/header.component'
import { BannerComponent } from '../components/banner/banner.component'
import { HomeComponent } from '../components/home/home.component'
import { FooterComponent } from '../components/footer/footer.component'

export const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <BannerComponent />
        <HomeComponent />
      </main>
      <FooterComponent />
    </>
  )
}
