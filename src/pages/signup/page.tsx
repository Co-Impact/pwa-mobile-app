import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {FC, useState} from "react";
import {University} from "./data.ts";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {signupSchema} from "../../schema/signup.ts";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import {useCreateAccount} from "../../api/authRequest/createAccount.ts";

const RegisterPage: FC = () => {
    const [dialog, setDialog] = useState(false)
    const { handleSubmit, control } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            phoneNumber:"",
            email: "",
            university:"",
            studyField:"",
            password: "",
            company:"",
            position:"",
        },
        resolver: yupResolver(signupSchema),
    });
    const { mutate } = useCreateAccount()
    const onSubmit = (data: any) => {
        mutate(data,{
            onSuccess: () => {
                setDialog(true)
            },
        })
    }
  return (
    <Container>
        {
            dialog? <>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '80vh', // This makes the box take up most of the viewport height
                        textAlign: 'center',
                        padding: 2,
                    }}
                >
                    <Typography variant={"h3"} sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                        شكراً لتسجيلك في مجتمع مشبك
                    </Typography>
                    <Typography variant={"body1"} sx={{ marginTop: 2, color: 'text.secondary' }}>
                        سوف يتم فحص طلبك والتواصل معك في اقرب وقت ممكن
                    </Typography>
                    <Button
                        variant="contained"
                        href="/login"
                        sx={{
                            marginTop: 2,
                            paddingX: 4,
                            paddingY: 1.5,
                        }}
                    >
                        العودة لصفحة الدخول
                    </Button>
                </Box>
            </>:<>
                <Box>
                    <Typography variant={"h3"}>
                        تسجيل الدخول
                    </Typography>
                    <Typography variant={"body2"}>
                        مشبك تقون بفحص جميع طلبات التسجيل قبل التاكيد من فضلك اترك تفاصيل
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                size='small'
                                {...field}
                                label="First Name"
                                fullWidth
                                margin="normal"
                                required
                                error={!!error}
                                helperText={error ? error.message : ""}
                                InputProps={{
                                    endAdornment: !!error && (
                                        <InputAdornment position="end">
                                            <ErrorOutlineIcon color="error" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                size='small'
                                {...field}
                                label="Last Name"
                                fullWidth
                                margin="normal"
                                required
                                error={!!error}
                                helperText={error ? error.message : ""}
                                InputProps={{
                                    endAdornment: !!error && (
                                        <InputAdornment position="end">
                                            <ErrorOutlineIcon color="error" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                    {/* Phone Number */}
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                fullWidth
                                size="small"
                                margin="normal"
                                label="Phone Number"
                                required
                                error={!!error}
                                helperText={error ? error.message : ""}
                                InputProps={{
                                    endAdornment: !!error && (
                                        <InputAdornment position="end">
                                            <ErrorOutlineIcon color="error" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />

                    {/* Company */}
                    <Controller
                        name="company"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                fullWidth
                                size="small"
                                margin="normal"
                                label="Company"
                                required
                                error={!!error}
                                helperText={error ? error.message : ""}
                                InputProps={{
                                    endAdornment: !!error && (
                                        <InputAdornment position="end">
                                            <ErrorOutlineIcon color="error" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />

                    {/* Position */}
                    <Controller
                        name="position"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                fullWidth
                                size="small"
                                margin="normal"
                                label="Position"
                                required
                                error={!!error}
                                helperText={error ? error.message : ""}
                                InputProps={{
                                    endAdornment: !!error && (
                                        <InputAdornment position="end">
                                            <ErrorOutlineIcon color="error" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="email"
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                fullWidth
                                size="small"
                                margin="normal"
                                label="Email"
                                required
                                error={!!error}
                                helperText={error ? error.message : ""}
                                InputProps={{
                                    endAdornment: !!error && (
                                        <InputAdornment position="end">
                                            <ErrorOutlineIcon color="error" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                type="password"
                                fullWidth
                                size="small"
                                margin="normal"
                                label="Password"
                                required
                                error={!!error}
                                helperText={error ? error.message : ""}
                                InputProps={{
                                    endAdornment: !!error && (
                                        <InputAdornment position="end">
                                            <ErrorOutlineIcon color="error" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="university"
                        control={control}
                        rules={{ required: "university is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <FormControl fullWidth margin="normal" error={!!error}>
                                <InputLabel>Universty</InputLabel>
                                <Select
                                    size={"small"}
                                    {...field}
                                    input={
                                        <OutlinedInput
                                            label="university"
                                            endAdornment={
                                                error && (
                                                    <InputAdornment position="end">
                                                        <ErrorOutlineIcon color="error" />
                                                    </InputAdornment>
                                                )
                                            }
                                        />
                                    }
                                >
                                    {University.map(({name, code}) => (
                                        <MenuItem key={code} value={code}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>{error?.message}</FormHelperText>
                            </FormControl>
                        )}
                    />
                    <Controller
                        name="studyField"
                        control={control}
                        rules={{ required: "studyField is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <FormControl fullWidth margin="normal" error={!!error}>
                                <InputLabel>study Field</InputLabel>
                                <Select
                                    {...field}
                                    size={"small"}
                                    input={
                                        <OutlinedInput
                                            label="study Field"
                                            endAdornment={
                                                error && (
                                                    <InputAdornment position="end">
                                                        <ErrorOutlineIcon color="error" />
                                                    </InputAdornment>
                                                )
                                            }
                                        />
                                    }
                                >
                                    {University.map(({name, code}) => (
                                        <MenuItem key={code} value={code}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>{error?.message}</FormHelperText>
                            </FormControl>
                        )}
                    />
                    <Button type={"submit"}>submit</Button>
                </form>
            </>
        }

    </Container>
  );
};

export default RegisterPage;
