import {Box, Button, Container, IconButton, InputAdornment, Switch, TextField, Typography} from '@mui/material'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {Link, useNavigate} from 'react-router'
import {useAuth} from '../../context/AuthContext'
import {useLinkedInLogin, useUserLogin} from "../../api/authRequest/login.ts";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useState} from "react"
import {LinkedIn, Visibility, VisibilityOff} from '@mui/icons-material';
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const schema = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

const LoginPge = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })
    const { mutate, data } = useLinkedInLogin()
    const navigate = useNavigate()
    const toggleVisibility = () => setShowPassword((prev) => !prev);
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
    const handleSocialLogin = () => {
        mutate()
    }

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: {sm:'80%', xs: '100%'}, p: 4, alignItems: 'center', display:"flex", flexDirection:"column" }}>
                <img src={"./images/profile4.png"} alt={""} width={200} height={200} style={{ display: 'block'}}/>
                <Typography variant="h5" align="center" gutterBottom>تسجيل الدخول</Typography>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="البريد الالكتروني"
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
                                type={showPassword ? 'text' : 'password'}
                                label={"كلمة المرور"}
                                fullWidth
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                placeholder={"كلمة المرور"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={toggleVisibility} edge="end">
                                                {showPassword ? <VisibilityOff fontSize='small' /> : <Visibility fontSize='small' />}
                                            </IconButton>
                                            {!!errors.password && <ErrorOutlineIcon sx={{ml:1}} color="error" />}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                    <Box sx={{ display: 'flex', flexDirection:"row", alignItems: 'center', mt: 2, justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Switch value={false} defaultChecked={false}/>
                            <Typography>تذكرني</Typography>
                        </Box>
                        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                            نسيت كلمة السر
                        </Typography>
                    </Box>
                    <Button disabled={userLogin.isPending} type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        {userLogin.isPending ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                    </Button>
                </form>
                <Box sx={{ mt: 2, width: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button variant="outlined" color="primary" startIcon={<LinkedIn/>} fullWidth onClick={handleSocialLogin}>تسجيل الدخول مع لينكدين</Button>
                    <Typography variant="body2" align="center">
                        ليس لديك حساب؟{' '}
                        <Link to="/signup" style={{ color: '#1976d2' }}>انشاء حساب</Link>
                    </Typography>
                </Box>
                <Box>
                    <Typography>
تريد معرفة لمزيد عن مجنمع مشبك
                        <Link to={"/about-us"}>اضغط هنا</Link>
                    </Typography>
                </Box>
                <Box>
                    <img src={"./images/profile1.png"} alt={""} width={100} height={100}/>
                </Box>
            </Box>
        </Container>
    )
}

export default LoginPge