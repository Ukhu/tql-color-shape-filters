// importing the original module declarations
import "styled-components";

// and extending them
declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
    };
  }
}
