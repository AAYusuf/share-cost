import React, { Component } from 'react'
import  Navbar from '../components/Navbar'
import  DemoNavbar from '../components/Navbars/DemoNavbar'
import  Hero from './IndexSections/Hero'
import Intro from './IndexSections/Intro'
import ModernInterface from './IndexSections/ModernInterface'
import IndexCards from './IndexSections/IndexCards'
import CalculateProfit from './IndexSections/CalculateProfit'
import WhyUs from './IndexSections/WhyUs'
import CardFooter  from '../components/Footers/CardFooter'

export default class Index extends Component {
    render() {
        return (
            <>
                <DemoNavbar/>
                <main ref="main">
                    <Hero />
                    <Intro/>
                    <IndexCards/>
                    <ModernInterface/>
                    <CalculateProfit/>
                    <WhyUs/>
                    <CardFooter/>
                </main>
            </>
        )
    }
}
