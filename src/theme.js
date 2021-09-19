import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    typography: {
        fontFamily: [ 'Poppins', 'sans-serif'].join(',')
       }
})

export default theme