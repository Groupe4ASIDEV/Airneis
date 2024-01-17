export const components = (palette) => ({
    MuiLink: {
        styleOverrides: {
            root: {
                color: palette.primary.main,
                '&:hover': {
                    color: palette.primary.light,
                },
            },
        },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                backgroundColor: palette.primary.main,
                '&:hover': {
                    color: palette.primary.dark,
                    backgroundColor: palette.secondary.main,
                },
            },
        },
    },
    MuiAvatar: {
        styleOverrides: {
            root: {
                backgroundColor: palette.primary.light,
            },
        },
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                '&:hover': {
                    color: palette.secondary.light,
                },
            },
        },
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: palette.primary.dark,
            },
        },
    },
});
