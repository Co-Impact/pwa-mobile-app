import {Box, Button, Container, TextField, Typography} from '@mui/material'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {Link, useNavigate} from 'react-router'
import {useAuth} from '../../context/AuthContext'
import {useUserLogin} from "../../api/authRequest/login.ts";

const schema = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

const LoginPge = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const navigate = useNavigate()

    const {login} = useAuth()

    const handleLoginSuccess = (data: any) => {
        const { token, user, businessDetails } = data
        console.log( { token, user, businessDetails } )
        login(user)
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("businessDetails", JSON.stringify(businessDetails));
        navigate('/')
    }

    const userLogin = useUserLogin(handleLoginSuccess)

    const onSubmit = async (data: any) => {
        try {
            await userLogin.mutateAsync(data)
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: {sm:'80%', xs: '100%'}, p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>

                <Typography variant="h5" align="center" gutterBottom>تسجيل الدخول</Typography>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Email"
                                fullWidth
                                margin="normal"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                autoComplete="email"
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Password"
                                type="password"
                                fullWidth
                                margin="normal"
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                autoComplete="current-password"
                            />
                        )}
                    />
                    <Button disabled={userLogin.isPending} type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        {userLogin.isPending ? 'Logging in...' : 'Login'}
                    </Button>
                </form>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                       نسيت كلمة السر
                    </Typography>
                    <Typography variant="body2" align="center">
                        Dont have an account?{' '}
                        <Link to="/signup" style={{ color: '#1976d2' }}>انشاء حساب</Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default LoginPge