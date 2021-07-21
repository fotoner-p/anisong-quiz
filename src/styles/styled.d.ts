import "styled-components";

// and extend them!
declare module "styled-components" {
    export interface DefaultTheme {
        basicWidth: string;

        color: {
            main: string;
            mainBright: string;
            sub: string;

            mainGrey: string;
            borderGrey: string;

            mainWhite: string;
        };
    }
}