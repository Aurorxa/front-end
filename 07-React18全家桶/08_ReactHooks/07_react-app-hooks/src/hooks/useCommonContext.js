import {ThemeContext, TokenContext} from "@/context";
import {useContext} from "react";

export function useCommonContext() {
  const theme = useContext(ThemeContext)
  const token = useContext(TokenContext)
  
  return [theme, token]
}