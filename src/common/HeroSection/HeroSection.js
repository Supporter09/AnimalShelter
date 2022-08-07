import * as React from 'react';
import { Container, Typography, Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
// import { useRouter } from 'next/router'


export const HeroSection = ({ backgroundImg, title, description = null, isDescription, isButton = false, isInput = false }) => {
    const formik = useFormik({
        initialValues: {
            animalName: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
        },
    });

    return (
        <Box sx={(theme) => ({
            backgroundImage: `url(${backgroundImg.src})`,
            backgroundColor: '#27272E',
            backgroundPosition: 'center',
            [theme.breakpoints.down("md")]: {
                backgroundColor: '#191919',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            },
        })}>
            <Container maxWidth='xl' sx={{ padding: '0 2% !important' }} >
                <Typography variant='h1'
                    sx={(theme) => ({
                        fontFamily: 'Inter, san-serif',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '5rem',
                        pt: '8%',
                        width: { md: '60%', xs: '70%' },
                        [theme.breakpoints.down("md")]: {
                            fontSize: '3.5rem',
                        },
                        [theme.breakpoints.down("sm")]: {
                            fontSize: '2rem',
                        },

                    })}
                >
                    {title ? title : ''}
                </Typography>
                <Typography variant='body1'
                    sx={(theme) => ({
                        fontFamily: 'Inter, san-serif',
                        color: '#fff',
                        fontSize: '1rem',
                        pt: 4,
                        width: { md: '55%', xs: '76%' },
                        display: { md: 'block', xs: 'none' },
                    })}
                >
                    {description ? description : ''}
                </Typography>

                {isButton && (
                    <Box sx={{
                        pt: 4,
                        pb: "12%",
                    }}>
                        <Button
                            variant='contained'
                            sx={(theme) => ({
                                backgroundColor: '#FFF',
                                fontFamily: 'Inter, san-serif',
                                color: '#16192C',
                                fontWeight: '600',
                                "&:hover": {
                                    backgroundColor: '#EDF2F7'
                                },
                                [theme.breakpoints.down("md")]: {
                                    fontSize: '0.5rem'
                                },
                            })}
                        >
                            Tìm hiểu ngay
                        </Button>
                    </Box>
                )}

                {isInput && (
                    <Box component='form' onSubmit={formik.handleSubmit} sx={{ pt: { md: '2%', xs: '4%' }, pb: "12%", display:'flex' }}>
                        <TextField
                            id='animalName'
                            name="animalName"
                            onChange={formik.handleChange}
                            value={formik.values.animalName}
                            label="Tên loài động vật ..."
                            variant="outlined"
                            required
                            size='small'
                            sx={(theme) => ({
                                width: '35%',
                                '& > div': {
                                    borderRadius: '5px 0px 0px 5px!important',
                                    background: '#fff',
                                },
                                '& > div > fieldset': {
                                    borderColor: '#fff'
                                },
                                '& > div > input': {
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: '0.4rem',
                                    },
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: '0.3rem',
                                    },
                                },
                                '& > label ': {
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: '0.55rem',
                                    },
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: '0.45rem',
                                    },
                                },
                            })}
                        />
                        <Button
                            variant='contained'
                            type='submit'
                            onClick={formik.handleSubmit}
                            sx={(theme) => ({
                                width: 'max-content',
                                background: '#4C6FFF',
                                fontFamily: 'Inter, san-serif',
                                color: '#FFF',
                                fontWeight: '600',
                                "&:hover": {
                                    backgroundColor: '#EDF2F7'
                                },
                                [theme.breakpoints.down("md")]: {
                                    fontSize: '0.5rem',
                                },
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: '0.4rem',
                                },
                                filter: 'drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25))',
                                borderRadius: '0px 5px 5px 0px',
                            })}
                        >
                            Tìm kiếm
                        </Button>
                    </Box>
                )}

            </Container>
        </Box>
    );
}
