import { Box } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'
import image from "../images/Discover Japan.jpg"
import Booking from './Booking'
import Table from '../components/Table'

const BookPage = () => {
    return (
        <>
            <section className='h-screen pt-11 pl-10 pr-10 mt-7 book-page'>
                <Booking />
                <Table />
            </section >
        </>
    )
}

export default BookPage