module.exports = {
    content:['./*.html'],
    screens:{
        sm:"480px",
        md:"768px",
        lg:"976px",
        xl:"1440px"
    },
    theme:{
        extend: {
            // colors: {
            //     cyan: 'hsl(180,66%,49%)',
            //     cyanLight: 'hsl(180,66%,69%',
            //     darkViolet: 'hsl(257,27%,26%)',
            //     red: 'hsl(0,87%,67%)',
            //     grayishViolet: 'hsl(257,7%,63%)',
            //     veryDarkBlue: 'hsl(255,11%,22%)',
            //     veryDarkViolet: 'hsl(260,8%,14%)'
            // },
            fontFamily: {
                sans: ['Barlow Semi Condensed', 'sans-serif']
            },
            spacing: {
                100: '32rem'
            }
        }
    },
    plugins: []
}